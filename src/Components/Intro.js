import React, { useEffect, useRef } from "react";
import logo from '../assets/man.jpg';
import "../Styles/Intro.css";
import { init } from "ityped";
import Aos from "aos";
import "aos/dist/aos.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Designer", "Developer", "Creative"],
    });
      Aos.init({
        once: true,
      });
  }, []);

  return (
    <div
      id="intro"
      className="w-full card grid sm:flex"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <div className="sm:flex-1 sm:overflow-hidden">
        <div className="imgContainer grid place-items-center">
          <img src={logo} alt="" className="animate-pulse rounded-full w-2/3" />
        </div>
      </div>
      <div className="font-bold sm:flex-1 flex flex-col items-center relative text-gray-600">
        <div className=" w-full h-full p-4 pl-12 flex flex-col justify-center items-center">
          <h2 className=" text-xl sm:text-4xl">Hi There, I'm</h2>
          <h1 className=" text-xl md:6xl sm:text-4xl my-2 mx-0">
            Obinna Anthony
          </h1>
          <h3 className="text-base sm:text-3xl">
            Freelance{" "}
            <span
              ref={textRef}
              className="text-purple-800 animate-pulse"
            ></span>
          </h3>
        </div>
        <a
          href="#portfolio"
          className=" sm:absolute bottom-24 text-purple-800 left-12"
        >
          <ExpandMoreIcon
            style={{ fontSize: 70 }}
            className="w-8 animate-pulse"
          />
        </a>
      </div>
    </div>
  );
}

export default Intro;
