import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { IoMdWallet } from "react-icons/io";

import { logout, reset } from "../../features/user/userSlice";

const style = {
  loginButton:
    "text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer md:my-0 my-7 px-0 md:px-3 flex md:flex items-center justify-between",
  loginText: "flex font-extrabold text-[20px] pl-3 text-center",
};

function LoginButton() {
  const { t } = useTranslation(["es"]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      {user ? (
        <button
          className={style.loginButton}
          onClick={onLogout}
          title={t("Logout")}
        >
          <IoMdWallet />
          <span className={style.loginText}>{t("Logout")}</span>
        </button>
      ) : (
        <button className={style.loginButton} title={t("Login")}>
          <IoMdWallet />
          <span className={style.loginText}>{t("Login")}</span>
        </button>
      )}
    </>
  );
}

export default LoginButton;
