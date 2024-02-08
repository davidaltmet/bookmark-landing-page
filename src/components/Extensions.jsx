import ExtensionCard from "./ExtensionCard";
import InfoSection from "./InfoSection";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";

function Extensions() {
  return (
    <div
      id="pricing"
      className="cont_extensions pt-96 sm:pt-80 md:pt-32 flex flex-col justify-center items-center md:block  "
    >
      <InfoSection
        title="Download the extensions"
        paragraph="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      />
      <div className="w-full hidden  md:flex justify-center items-center  md:space-x-16 ">
        <ExtensionCard
          imgExtension={chrome}
          titleExten="Add to Chrome"
          paragraphExten="Minimum version 62"
        />
        <ExtensionCard
          imgExtension={firefox}
          titleExten="Add to Firefox"
          paragraphExten="Minimum version 55"
          marginTop="mt-20"
        />
        <ExtensionCard
          imgExtension={opera}
          titleExten="Add to Opera"
          paragraphExten="Minimum version 46"
          marginTop="mt-32"
        />
      </div>

      {/* extensions cards mobile */}
      <div className="w-5/6 md:hidden  mt-10  grid  gap-16 ">
        <ExtensionCard
          imgExtension={chrome}
          titleExten="Add to Chrome"
          paragraphExten="Minimum version 62"
        />
        <ExtensionCard
          imgExtension={firefox}
          titleExten="Add to Firefox"
          paragraphExten="Minimum version 55"
        />
        <ExtensionCard
          imgExtension={opera}
          titleExten="Add to Opera"
          paragraphExten="Minimum version 46"
        />
      </div>
    </div>
  );
}

export default Extensions;
