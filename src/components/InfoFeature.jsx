function InfoFeature({
  titleFeature,
  paragraphFetature,
  valueBtn,
  openFeature,
  handleOpenFeatures,
  featureId,
}) {
  return (
    <div
      className={`cont_info_feature w-full md:w-1/2  sm:mt-5 md:mt-0 md:pr-5 xl:pr-28 px-10 md:px-0 md:pl-10 xl:pl-28 py-20 md:y-14 space-y-5  transform ${
        openFeature === featureId
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }  duration-500`}
    >
      <h2 className="text-VeryDarkBlue text-center md:text-start text-2xl md:text-3xl font-semibold">
        {titleFeature}
      </h2>
      <p className="leading-7 text-md md:text-18 text-center md:text-start text-GrayishBlue">
        {paragraphFetature}
      </p>
      <button className="bg-SoftBlue text-white py-2 px-10 rounded-md hidden md:flex">
        {valueBtn}
      </button>
    </div>
  );
}

export default InfoFeature;
