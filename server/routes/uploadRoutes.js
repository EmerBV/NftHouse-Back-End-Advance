import path from "path";
import express from "express";
import multer from "multer";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

uploadRouter.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join (__dirname, "/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, `${file.filename}"-"${Date.now()}.${file.mimetype.split("/")[1]}`);
  }
}); */


export default uploadRouter;
