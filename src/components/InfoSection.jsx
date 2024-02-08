import useScrollAnimation from "../components/useScrollAnimation";

function InfoSection({ title, paragraph }) {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center  xl:px-28 md:py-10 space-y-4 `}
    >
      <h2 className="text-3xl md:text-4xl text-center text-VeryDarkBlue ">
        {title}
      </h2>
      <p className=" text-center px-5 md:px-40 xl:px-80  text-GrayishBlue">
        {paragraph}
      </p>
    </div>
  );
}

export default InfoSection;
//  ref = { sectionRef };
// const { showAnimation, sectionRef } = useScrollAnimation();
// // ${
// //         showAnimation ? "traslate-y-0" : "-translate-y-full"
// //       } duration-500
