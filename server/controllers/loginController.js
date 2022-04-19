'use strict';

const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

class LoginController {

  index(req, res, next) {
    res.locals.email = '';
    res.locals.error = '';
    res.render('login');
  }

  // login post from website
  async post(req, res, next) {
    try {
      const { email, password } = req.body;

      // buscar el usuario en la BD
      const usuario = await Usuario.findOne({ email });

      // si no lo encuentro o no coincide la contraseña --> error
      if (!usuario || !(await usuario.comparePassword(password))) {
        res.locals.email = email;
        res.locals.error = res.__('Invalid credentials');
        res.render('login');
        return;
      }

      // apunto en la sesión de este usuario que es un usuario logado
      req.session.usuarioLogado = {
        _id: usuario._id,
        rol : usuario.rol
      };

      // si lo encuentro y la contraseña coincide --> redirigir a la zona privada
      res.redirect('/privado');
    } catch (err) {
      next(err);
    }
  }

  logout(req, res, next) {
    req.session.regenerate(err => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/');
    })
  }

  // login post desde API que retorna JWT
  async postJWT(req, res, next) {
    try {
      const { email, password } = req.body;

      // buscar el usuario en la BD
      const usuario = await Usuario.findOne({ email });

      // si no lo encuentro o no coincide la contraseña --> error
      if (!usuario || !(await usuario.comparePassword(password))) {
        res.json({ error: 'invalid credentials'})
        return;
      }

      // generamos un JWT con su _id
      jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET, {
        expiresIn: '2d'
      }, (err, jwtToken) => {
        if (err) {
          next(err);
          return;
        }
        // devolver al cliente es token generado
        res.json({ token: jwtToken });
      });
    } catch (err) {
      next(err);
    }
  }



}

module.exports = LoginController;