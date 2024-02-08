function TitlesFeatures({
  textbtn,
  openFeature,
  handleOpenFeatures,
  numFeature,
}) {
  return (
    <button
      className={`py-4 px-10  border-b-2 text-18 ${
        openFeature === numFeature ? "border-b-SoftRed" : ""
      } transition-colors hover:text-SoftRed`}
      onClick={() => handleOpenFeatures(numFeature)}
    >
      {textbtn}
    </button>
  );
}

export default TitlesFeatures;
