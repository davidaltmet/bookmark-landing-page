import useScrollAnimation from "./useScrollAnimation";

function ExtensionCard({
  imgExtension,
  titleExten,
  paragraphExten,
  marginTop,
}) {
  const { showAnimation, sectionRef } = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className={`p-4 shadow-xl flex flex-col justify-center items-center  ${marginTop}   ${
        showAnimation ? "translate-y-0" : "-translate-y-full"
      } duration-500`}
    >
      <img className="pb-8" src={imgExtension} />
      <div className="flex flex-col justify-center items-center space-y-1  ">
        <span className="text-xl">{titleExten}</span>
        <p className="text-sm">{paragraphExten}</p>
      </div>
      <button className="mt-12 md:mt-6 py-2 px-4 bg-SoftBlue rounded-sm text-white border-2 border-transparent hover:bg-white hover:border-SoftBlue hover:text-SoftBlue transition-colors">
        <a href="#">Add & Install Extension</a>
      </button>
    </div>
  );
}

export default ExtensionCard;
