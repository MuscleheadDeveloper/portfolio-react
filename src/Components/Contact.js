import React, { useState , useEffect} from "react"
import logo from "../assets/shake.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
      Aos.init({
        once: true,
      });
    });
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <>
      <div
        data-aos="fade-up-left"
        data-aos-duration="3000"
        id="contact"
        className="w-full card flex sm:flex-row flex-col items-center relative"
      >
        <div className="flex-1 overflow-hidden sm:w-full w-40 h-40 sm:h-full">
          <img src={logo} alt="" className="h-full w-full" />
        </div>
        <div className="flex-2 sm:flex-1 flex flex-col items-center sm:justify-center">
          <h2 className="text-xl sm:text-3xl font-bold text-purple-800">
            Contact.
          </h2>
          <form
            className="h-3/5 w-3/4 flex flex-col items-center justify-around "
            onSubmit={handleSubmit}
          >
            <input
              className="sm:w-72 w-56 h-4 my-0 sm:my-2 sm:h-8 text-base focus:outline-white focus:shadow-outline border rounded p-2"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="w-56 h-24 sm:w-72 my-0 sm:my-2 sm:h-48 text-base focus:outline-white focus:shadow-outline border rounded p-2"
              placeholder="Message"
            ></textarea>
            <button
              className="hover:bg-purple-600 text-xs sm:text-basefocus:outline-none cursor-pointer font-bold rounded sm:rounded-xl border-none w-16 sm:w-40 h-4 sm:h-8 bg-purple-700 text-white"
              type="submit"
            >
              Send
            </button>
            {message && (
              <span className="text-green-600">Dummy message :)</span>
            )}
          </form>
        </div>
      </div>
      <div className="relative bottom-20 sm:bottom-4">
        <p className=" text-center text-base sm:text-xl text-gray-600 sm:mb-12">
          Made with 💜 by {"  "}
          <a
            href="https://www.linkedin.com/in/obinna-njoku-859582178/"
            className="headerItemContainerText text-lg sm:text-xl my-2"
          >
            muscleheadDeveloper
          </a>
        </p>
      </div>
    </>
  );
}

export default Contact;
