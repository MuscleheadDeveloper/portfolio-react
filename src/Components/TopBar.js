import React, { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Menu from "./Menu";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function TopBar() {
  const handleClick = () => {
    const menu = document.querySelector(".menu");
    const sidemenu = document.querySelector(".sidemenu");
    const close = document.querySelector(".close");
    const navbar = document.querySelector(".navbar");
    const burger = document.querySelector(".burger");

    sidemenu.classList.contains("hidden")
      ? sidemenu.classList.remove("hidden")
      : sidemenu.classList.add("hidden");



  if (burger.classList.contains("active")) {
    menu.classList.add("hidden");
    navbar.style.backgroundColor = "#6D28D9";
    navbar.style.color = "#fff";
    burger.classList.remove("active");
    close.classList.remove("hidden");
    
  } else {
    navbar.style.backgroundColor = "#fff";
    navbar.style.color = "#6D28D9";
    close.classList.add("hidden");
    menu.classList.remove("hidden");
    burger.classList.add("active");
  }
  };

  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <>
      <div className="z-20 text-purple-700 w-full px-2 bg-white h-h70 fixed top-0 navbar transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center px-7 py-2 ">
          <div className="sm:flex mr-4 sm:items-center sm:justify-between">
            <a href="#intro" className="sm:mr-10 text-3xl sm:text-4xl font-bold">
              theWALL.
            </a>
            <div className="hidden mr-4 sm:text- sm:block sm:headerItemContainer">
              <PersonIcon className="headerItemContainerIcon" />
              <span className="headerItemContainerText ">
                +234 810 159 2754
              </span>
            </div>
            <div className="hidden sm:text-xl sm:block sm:headerItemContainer">
              <MailIcon className="headerItemContainerIcon" />
              <span className="headerItemContainerText">
                njokua04@gmail.com
              </span>
            </div>
          </div>

          <div className="burger active z-10 mr-0" onClick={handleClick}>
            <div className="menu cursor-pointer">
              <MenuIcon fontSize="large" />
            </div>
            <div className="close hidden cursor-pointer">
              <CloseIcon fontSize="large" />
            </div>
          </div>
        </div>
        <div
          className="hidden sidemenu fixed top-0 right-0"
          onClick={handleClick}
        >
          <Menu />
        </div>
      </div>
    </>
  );
}

export default TopBar;
