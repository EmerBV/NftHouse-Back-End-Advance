import { Link } from "react-router-dom";

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
  return (
    <>
      <Header />

      <div className={style.signinWrapper}>
        <div className={style.signinContainer}>
          <h1 className={style.signinText}>Sign In</h1>

          <form className={style.formContainer}>
            <div className={style.inputContainer}>
              <input
                className={style.placeholderContainer}
                type="text"
                name="email"
                autoComplete="off"
                placeholder="Email"
                required
              />
            </div>
            <div className={style.inputContainer}>
              <input
                className={style.placeholderContainer}
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                required
              />
            </div>

            <input type="checkbox" name="remember" value="remember" />
            <label className="ml-2 text-white">Remember me</label>

            <div className={style.loginBtnContainer}>
              <button className={style.loginBtn} type="submit" disabled>
                LOGIN
              </button>
            </div>
            <div className={style.questionContainer}>
              <p className="text-white">
                Don't have an{" "}
                <Link to="/signup" className="hover:text-[#2081e2]">
                  account
                </Link>{" "}
                yet?
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
