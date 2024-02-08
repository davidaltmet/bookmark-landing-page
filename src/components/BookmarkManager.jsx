import imageHero from "../assets/images/illustration-hero.svg";
import { useState, useEffect } from "react";

const efectContsBookmark = () => {
  const [showEfect, setShowEfect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowEfect(true);
    }, 500);
  }, []);

  return { showEfect };
};

function BookmarkManager() {
  const { showEfect } = efectContsBookmark();

  return (
    <div className="w-full p-0 md:py-12 flex flex-col md:flex-row md:justify-between">
      <section
        className={`w-full  md:w-1/2 order-2 md:order-1 p-6  md:pl-12 xl:pl-28 md:pr-10 py-10 md:py-5 space-y-5 transform ${
          showEfect
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } duration-200  `}
      >
        <h1 className="text-VeryDarkBlue text-center md:text-start text-3xl md:text-4xl xl:text-5xl font-semibold">
          A Simple Bookmark Manager
        </h1>
        <p className="leading-7 text-18 text-GrayishBlue text-center md:text-start">
          A cleand and simple interface to organize your favourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free
        </p>
        <div className="w-full flex pt-4 md:pt-0  space-x-2 ">
          <button className="w-7/12 py-2  border-2 bg-SoftBlue text-white rounded-md hover:bg-white hover:text-SoftBlue border-SoftBlue transition-colors">
            Get it on Chrome
          </button>
          <button className="w-7/12 py-2  border-2 text-GrayishBlue rounded-md hover:text-GrayishBlue hover:border-GrayishBlue transition-colors ">
            Get it on Firefox
          </button>
        </div>
      </section>
      <section
        className={`relative  order-1 md:order-2 w-full  md:w-1/2 pt-32  flex flex-col justify-end items-end `}
      >
        <div className="w-5/6 h-48 sm:h-80  md:h-80 rounded-tl-full rounded-bl-full  bg-SoftBlue"></div>
        <img
          className="h-5/6 sm:w-5/6 absolute top-14 md:top-0 left-0"
          src={imageHero}
        />
      </section>
    </div>
  );
}

export default BookmarkManager;
