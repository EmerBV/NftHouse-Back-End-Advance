import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";

import { login, reset } from "../../features/user/userSlice";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const style = {
  signinWrapper:
    "flex justify-center items-center w-full h-screen bg-[#3b3d42]",
  signinContainer:
    "relative block p-[50px] justify-center items-center w-[900px]",
  signinText: "text-[34px] text-center text-white font-[600] mb-4",
  formContainer:
    "p-[50px] rounded-lg border-[#151c22] border justify-center items-center",
  inputContainer: "mb-4",
  placeholderContainer:
    "lex relative rounded-[10px] bg-[#363840] items-center pl-[12px] h-[48px] border border-[#151b22] w-full text-white outline-none text-[20px]",
  loginBtnContainer: "flex justify-center items-center p-[0.3rem] my-2",
  loginBtn:
    "justify-center items-center border border-[#282b2f] bg-[#2081e2] hover:bg-[#42a0ff] text-[25px] font-semibold rounded-lg text-white w-[250px] h-[60px]",
  questionContainer: "flex justify-center items-center",
};

function LoginPage() {
  const { t } = useTranslation(["es"]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));

    if (isLoading) {
      return;
    }
  };

  return (
    <>
      <Header />

      <div className={style.signinWrapper}>
        <div className={style.signinContainer}>
          <h1 className={style.signinText}>{t("Sign In")}</h1>

          <form className={style.formContainer} onSubmit={submitHandler}>
            <div className={style.inputContainer}>
              <input
                className={style.placeholderContainer}
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder={t("Email")}
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className={style.inputContainer}>
              <input
                className={style.placeholderContainer}
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder={t("Password")}
                value={password}
                onChange={onChange}
                required
              />
            </div>

            <input type="checkbox" name="remember" value="remember" />
            <label className="ml-2 text-white text-[20px]">
              {t("Remember me")}
            </label>

            <div className={style.loginBtnContainer}>
              <button className={style.loginBtn} type="submit">
                LOGIN
              </button>
            </div>
            <div className={style.questionContainer}>
              <p className="text-white text-[20px]">
                {t("Don't have an")}{" "}
                <Link to="/signup" className="hover:text-[#2081e2]">
                  {t("account")}
                </Link>{" "}
                {t("yet?")}
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
