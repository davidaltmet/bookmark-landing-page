import { ListNav, itemsNav } from "./ListNav";
import logoBookmarkWhite from "../assets/images/logo-bookmark-white.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <div className="w-full py-8 md:px-28 flex flex-col md:flex-row justify-between items-center bg-VeryDarkBlue">
      <div className="flex flex-col md:flex-row items-center md:space-x-10 ">
        <div>
          <img src={logoBookmarkWhite} className="pb-5 md:pb-0" />
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row uppercase   items-center md:space-x-7 text-white text-18">
            <ListNav border="transparent" />
          </ul>
        </nav>
      </div>
      <div className="flex pt-5 md:pt-0 space-x-14 md:space-x-7">
        <img src={facebook} className="cursor-pointer" />
        <img src={twitter} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
