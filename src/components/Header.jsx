import { ListNav, itemsNav } from "./ListNav";
import logoBookmark from "../assets/images/logo-bookmark.svg";
import logoBookmarkWhite from "../assets/images/logo-bookmark-white.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    return openMenu;
  };

  return (
    <div className="p-6 md:p-0 md:py-8 md:px-10 xl:px-28 flex justify-between items-center relative">
      <div className="w-full flex justify-between items-center">
        <img src={logoBookmark} className="logo" />
        <img
          src={iconHamburger}
          className="md:hidden"
          onClick={handleOpenMenu}
        />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex justify-between items-center space-x-6 uppercase text-18">
          {ListNav(itemsNav)}
          <button className="py-2 px-10 uppercase border-2 border-transparent text-white bg-SoftRed rounded-md hover:border-SoftRed hover:bg-white hover:text-SoftRed transition-colors">
            <a href="#">Login</a>
          </button>
        </ul>
      </nav>

      {/* nav mobile */}
      <div
        className={`md:hidden absolute top-0 left-0 z-20 w-full h-screen p-6 bg-VeryDarkBlue bg-opacity-80 flex  flex-col justify-between transform ${
          openMenu ? "translate-y-0" : "-translate-y-full"
        } transition-transform`}
      >
        <div className="grid ">
          <div className="flex justify-between items-center ">
            <img src={logoBookmarkWhite} />
            <img src={iconClose} className="" onClick={handleOpenMenu} />
          </div>
          <ul className="w-full  text-white text-2xl uppercase mt-10 border-t-2  border-GrayishBlue   ">
            {ListNav(itemsNav)}
          </ul>
          <button className="mt-5 py-2 px-10 uppercase border-2 border-transparent text-white bg-SoftRed rounded-md hover:border-SoftRed hover:bg-white hover:text-SoftRed transition-colors">
            <a href="#">Login</a>
          </button>
        </div>
        <div className="w-full flex justify-center space-x-7">
          <img src={facebook} className="cursor-pointer" />
          <img src={twitter} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
