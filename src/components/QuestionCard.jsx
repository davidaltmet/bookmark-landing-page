import iconArrow from "../assets/images/icon-arrow.svg";

import { useState } from "react";

export const questionItems = [
  {
    pregunta: "What is Bookmark?",
    respuesta:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    flecha: iconArrow,
  },
  {
    pregunta: "How can I request a new browser?",
    respuesta:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    flecha: iconArrow,
  },
  {
    pregunta: "Is there a mobile app?",
    respuesta:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    flecha: iconArrow,
  },
  {
    pregunta: "What about other Chromium browsers?",
    respuesta:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    flecha: iconArrow,
  },
];

export function QuestionCard() {
  const [selectQuestion, setSelectQuestion] = useState(null);

  const handleSelectQuestion = (element) => {
    setSelectQuestion(selectQuestion === element ? null : element);
  };

  return questionItems.map((item, index) => (
    <div
      key={index}
      className="p-4 border-b"
      onClick={() => {
        handleSelectQuestion(item.pregunta);
      }}
    >
      <div className="w-full flex justify-between items-center cursor-pointer">
        <h3 className="text-lg md:text-xl text-VeryDarkBlue hover:text-SoftRed transition-colors ">
          {item.pregunta}
        </h3>
        <img
          src={item.flecha}
          className={`transform ${
            selectQuestion === item.pregunta ? "rotate-180" : "rotate-0"
          } transition-transform`}
        ></img>
      </div>
      <div
        className={`pt-6  ${
          selectQuestion === item.pregunta ? "flex" : "hidden"
        }`}
      >
        <span className=" text-md text-GrayishBlue leading-7 ">
          {item.respuesta}
        </span>
      </div>
    </div>
  ));
}
