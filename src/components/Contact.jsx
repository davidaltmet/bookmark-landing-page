import iconError from "../assets/images/icon-error.svg";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [email, setEmail] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setErrorMensaje("field is empty");
      setErrorVisible(true);
    } else if (!validateEmail(email)) {
      setErrorMensaje("Whoops, make sure it's an email");
      setErrorVisible(true);
    } else {
      setEmail("");
      setErrorVisible(false);
      setErrorMensaje("");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "your email was sent successfully",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center space-y-5 mt-20 p-6 pt-10  md:p-12
     bg-SoftBlue"
    >
      <span className="text-md text-white tracking-widest uppercase">
        35,000+ already joined
      </span>
      <h2 className="w-full md:w-2/3 xl:w-2/5 text-2xl md:text-4xl text-white text-center font-medium">
        Stay up-to-date with what we’re doing
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-5/6 xl:w-2/5 p-3 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
      >
        <div
          className={`w-full md:3/4 xl:w-2/3  text-VeryDarkBlue text-18 bg-SoftRed rounded-md ${
            errorVisible ? "bg-SoftRed" : "bg-transparent"
          } transition-colors`}
        >
          <div className="w-full relative md:w-full">
            <input
              className="w-full p-2 md:w-full  rounded-md outline-none "
              type="text"
              name="txtemail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <img
              className={` absolute top-3 right-4 transform ${
                errorVisible ? "scale-full" : "scale-0"
              } transition-transform `}
              src={iconError}
            />
          </div>
          <span
            className={`p-2 text-white text-sm ${
              errorVisible ? "flex" : "hidden"
            }`}
          >
            {errorMensaje}
          </span>
        </div>
        <div className="w-full md:w-1/4 ">
          <button className=" w-full py-2 pb-3 px-2 bg-SoftRed rounded-md text-white  ">
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
