import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PortfolioList from "./PortfolioList";
import {
  earlyPortfolio,
  plainReactPortfolio,
  TailwindCSSPortfolio,
  vanillaJSPortfolio,
  fullstackPortfolio,
} from "../data";

function Portfolio() {
  const [selected, setSelected] = useState("ft");
  const [data, setData] = useState([]);
  const list = [
    { id: "ea", title: "Early Works" },
    { id: "pR.js", title: "Plain react.js" },
    { id: "tCSS", title: "TailwindCSS" },
    { id: "v.js", title: "VanillaJs" },
    { id: "FS", title: "Fullstack" },
  ];

  useEffect(() => {
    Aos.init({
      once: true,
    });
    switch (selected) {
      case "ea":
        setData(earlyPortfolio);
        break;
      case "pR.js":
        setData(plainReactPortfolio);
        break;
      case "tCSS":
        setData(TailwindCSSPortfolio);
        break;
      case "v.js":
        setData(vanillaJSPortfolio);
        break;
      case "FS":
        setData(fullstackPortfolio);
        break;
      default:
        setData(TailwindCSSPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="3000"
      id="portfolio"
      className="card font-semibold w-full mt-24 flex flex-col items-center"
    >
      <h1 className="py-4 text-3xl sm:text-4xl text-purple-800 text-bold">
        WORKS AND ALL
      </h1>
      <ul className="m-2 p-0 flex text-sm">
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            setSelected={setSelected}
            active={selected === item.id}
            id={item.id}
          />
        ))}
      </ul>

      <div className=" h-full w-full sm:w-2/3 flex sm:items-center justify-center flex-wrap">
        {" "}
        {data.map((d) => (
          <div
            className="transition duration-500 ease-in hover:bg-purple-700 cursor-pointer relative text-white flex items-center justify-center 
               w-32 h-20 sm:w-56 sm:h-36 mx-2 my-2 rounded-lg border-b border-gray-300"
          >
            <a href={d.link} target="_blank">
              <img
                src={d.img}
                className="w-20 sm:w-full sm:h-full object-cover z-10 rounded-t hover:opacity-20 hover:z-0 bg-purple-700"
              />
              <h3 className="absolute text-base sm:text-xl text-white">
                {d.title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
