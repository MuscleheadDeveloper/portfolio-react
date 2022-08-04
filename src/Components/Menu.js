import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Menu() {
    useEffect(() => {
      Aos.init({
        once: true,
      });
    });

  return (
      <div className=" flex flex-col items-center justify-center w-screen sm:w-96 h-screen bg-purple-600 z-10">
        <ul className="text-3xl sm:text-5xl text-white font-normal animate-pulse ">
          <li className="lists">
            <a href="#intro">HOME</a>
          </li>
          <li className="lists">
            <a href="#portfolio">WORKINGS</a>
          </li>
          <li className="lists">
            <a href="#testimonials">VOX POPULI</a>
          </li>
          <li className="lists">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
  );
}

export default Menu;
