import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import LoginButton from "../../pages/login/LoginButton";

import Logo from "../../images/nftHouse-brand.png";

import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { CgProfile, CgClose } from "react-icons/cg";

const style = {
  navWrapper:
    "h-full bg-[#04111d] py-[0.2rem] items-center h-[95px] sticky top-0 z-[110] transition-[top] duration-[0.5s] ease-[0s] flex md:flex shadow-lg",
  logoContainer: "md:flex items-center pl-[20px]",
  logo: "flex items-center ml-[8px]",
  logoImg: "block items-center",
  searchBar:
    "flex w-full items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] md:my-0 my-7 font-extrabold text-[20px]",
  searchIcon: "text-[#8a939b] text-3xl mx-6 items-center",
  searchInput:
    "md:flex md:items-center h-[60px] w-full border-0 bg-transparent outline-0 ring-0 text-[#e6e8eb] placeholder:text-[#8a939b]",
  headerItems:
    "md:flex items-center md:bg-[#04111d] w-full justify-between md:px-3 px-0",
  headerItem:
    "font-extrabold text-[20px] text-[#c8cacd] hover:text-white duration-500 cursor-pointer md:my-0 my-7 md:px-3 px-0 flex items-center justify-between",
  headerIconContainer: "md:flex pb-3 md:pb-0",
  headerIcon:
    "text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer md:my-0 my-7 px-0 md:px-3 flex md:flex items-center justify-between h-full",
  menuBtn:
    "text-[38px] font-extrabold text-white absolute right-8 top-7 cursor-pointer md:hidden items-center text-center",
  itemsContainer:
    "md:flex items-center absolute md:static bg-[#262626] left-0 w-full md:px-0 px-10",
};

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.navWrapper}>
      <Link to="/">
        <div className={style.logoContainer}>
          <div className={style.logo}>
            <img
              className={style.logoImg}
              src={Logo}
              width="200px"
              alt="logo"
            />
          </div>
        </div>
      </Link>

      <div onClick={() => setOpen(!open)} className={style.menuBtn}>
        {!open ? <AiOutlineMenu /> : <CgClose />}
      </div>

      <div
        className={`${style.itemsContainer} ${
          open ? "top-[95px]" : "top-[-490px]"
        }`}
      >
        <div className={style.headerItems}>
          <div className={style.searchBar}>
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>
            <input
              className={style.searchInput}
              placeholder="Search items, collections and accounts"
            />
          </div>

          <NavLink to="/assets">
            <div className={style.headerItem}>Explore</div>
          </NavLink>

          <NavLink to="/404">
            <div className={style.headerItem}>Stats</div>
          </NavLink>

          <NavLink to="/404">
            <div className={style.headerItem}>Resources</div>
          </NavLink>

          <NavLink to="/asset/create">
            <div className={style.headerItem}>Create</div>
          </NavLink>

          <div className={style.headerIconContainer}>
            <NavLink to="/account" end>
              <div className={style.headerIcon}>
                <CgProfile title="Account" />
              </div>
            </NavLink>

            <NavLink to="/login">            
                <LoginButton />                         
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
