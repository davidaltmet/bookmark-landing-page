import { QuestionCard, questionItems } from "./QuestionCard";

import InfoSection from "./InfoSection";

function Questions() {
  return (
    <div className="w-full flex flex-col justify-center items-center  py-28  md:py-20 ">
      <InfoSection
        title="Frequently Asked Questions"
        paragraph="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />
      <div className="w-full p-6 md:p-0 md:w-5/6 xl:w-5/12 md:border-t">
        {QuestionCard(questionItems)}
      </div>
      <button className="bg-SoftBlue text-white py-3 px-6 rounded-md md:hidden  ">
        More info
      </button>
    </div>
  );
}

export default Questions;
