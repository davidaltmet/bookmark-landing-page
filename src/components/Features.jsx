import FeatureCard from "./FeatureCard";
import InfoSection from "./InfoSection";
import InfoFeature from "./InfoFeature";
import TitleFeatures from "./TitlesFeatures";
import imgFeature1 from "../assets/images/illustration-features-tab-1.svg";
import imgFeature2 from "../assets/images/illustration-features-tab-2.svg";
import imgFeature3 from "../assets/images/illustration-features-tab-3.svg";
import { useState } from "react";

function Features() {
  const [openFeature, setOpenFeature] = useState("feature1");

  const handleOpenFeatures = (feature) => {
    setOpenFeature(openFeature === feature ? openFeature : feature);
  };

  return (
    <div
      id="features"
      className="w-full pt-16  md:pt-10 flex flex-col  md:overflow-hidden   "
    >
      <InfoSection
        title="Features"
        paragraph="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <div className="w-full  min-h-screen py-10 md:py-0 ">
        <div className="w-full  pt-5 py-2 px-10 md:px-0  flex flex-col md:flex-row justify-center   ">
          <TitleFeatures
            textbtn="Simple Bookmarking"
            numFeature="feature1"
            openFeature={openFeature}
            handleOpenFeatures={handleOpenFeatures}
          />
          <TitleFeatures
            textbtn="Speedy Searching"
            numFeature="feature2"
            openFeature={openFeature}
            handleOpenFeatures={handleOpenFeatures}
          />
          <TitleFeatures
            textbtn="Easy Sharing"
            numFeature="feature3"
            openFeature={openFeature}
            handleOpenFeatures={handleOpenFeatures}
          />
        </div>
        <div className="w-full flex flex-col  pt-14 relative  ">
          <div className="w-full flex flex-col md:flex-row absolute top-20  ">
            <FeatureCard
              imageFeature={imgFeature1}
              openFeature={openFeature}
              featureId="feature1"
            />
            <InfoFeature
              titleFeature="Bookmark in one click"
              paragraphFetature="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
              valueBtn="More info"
              openFeature={openFeature}
              featureId="feature1"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row absolute top-20">
            <FeatureCard
              imageFeature={imgFeature2}
              openFeature={openFeature}
              featureId="feature2"
            />

            <InfoFeature
              titleFeature="Intelligent search"
              paragraphFetature="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
              valueBtn="More info"
              openFeature={openFeature}
              featureId="feature2"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row absolute top-20">
            <FeatureCard
              imageFeature={imgFeature3}
              openFeature={openFeature}
              featureId="feature3"
            />
            <InfoFeature
              titleFeature="Share your bookmarkss"
              paragraphFetature="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
              valueBtn="More info"
              openFeature={openFeature}
              featureId="feature3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
