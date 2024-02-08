function FeatureCard({ imageFeature, openFeature, featureId }) {
  return (
    <div
      className={`relative w-full  md:w-1/2 pt-20 md:pt-32  flex flex-col justify-start items-start transform ${
        openFeature === featureId
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }  duration-500`}
    >
      <div className="w-5/6 h-40 sm:w-5/6  sm:h-80 md:h-52 xl:h-80 rounded-tr-full rounded-br-full  bg-SoftBlue"></div>
      <img
        className="w-5/6 sm:w-2/3 md:w-5/6 absolute top-0 left-8 sm:left-52 md:left-20 xl:left-40"
        src={imageFeature}
      />
    </div>
  );
}

export default FeatureCard;
