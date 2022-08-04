import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Styles/testimonials.css'
import logo from "../assets/man.jpg";
import logo2 from "../assets/linkedin.png";
import logo3 from '../assets/man2.JPG';
import logo4 from '../assets/man3.JPG';
import logo5 from "../assets/right-arrow.png";
import logo6 from "../assets/twitter.png";
import logo7 from "../assets/youtube.png";


function Testimonials() {
    useEffect(() => {
      Aos.init({
        once: true,
      });
    });
  const data = [
    {
      id: 1,
      name: "Lonny Breaux",
      title: "White Ferrari",
      img: logo,
      icon: logo6,
      desc: "Badluck to talk, on these rides. Mind on the road,your dilated eyes watched the clouds float, white ferrari",
    },
    {
      id: 2,
      name: "Mr. Ocean",
      title: "Founder of blonded",
      img: logo3,
      icon: logo7,
      desc: "When we were kids, we hand-painted strawberries on a swing Every moment was too precious. Then,",
      featured: true,
    },
    {
      id: 3,
      name: "Christopher 'Frank'",
      title: "CEO of BoyzDontCry",
      img: logo4,
      icon: logo2,
      desc: "Cry Cry Cry, even though that wont change a thing",
    },
  ];
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration="2000"
      id="testimonials"
      className="py-8 relative card cardMobile flex flex-col items-center sm:justify-center"
    >
      <h1 className="mt-4 text-3xl text-purple-800 sm:text-5xl mb-4 sm:mb-10">
        Testimonials
      </h1>
      <div className=" w-full h-h4 sm:h-3/4 sm:flex-row flex-col flex items-center sm:justify-around">
        {data.map((d) => (
          <div className="transition transform hover:scale-110 w-50 h-h4 sm:w-64 sm:h-5/6 rounded-2xl shadow-lg flex flex-col justify-around p-5">
            <div className="flex items-center justify-center">
              <img src={logo5} alt="" className="h-3 sm:h-6 " />
              <img
                src={d.img}
                className=" h-8 w-8 sm:h-16 sm:w-16 rounded-lg sm:rounded-3xl object-cover mx-7 "
              />
              <img src={d.icon} alt="" className="h-3 sm:h-6" />
            </div>
            <div className="p-1 sm:p-2.5 m-2 sm:m-4 w-40 h-32 sm:h-auto sm:w-auto bg-purple-500 rounded-lg text-sm sm:text-base">
              {d.desc}
            </div>
            <div className="flex flex-col justify-center items-center p-2 ">
              <h3 className="h-4 sm:h-6 my-2">{d.name}</h3>
              <h4 className="text-gray-400 h-4 sm:h-6">{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
