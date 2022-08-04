import TopBar from "./Components/TopBar";
import Intro from "./Components/Intro";
import "./Styles/index.css";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import Contact from "./Components/Contact";

function App() {
 
  return (
    <>
      <div className="h-screen app relative">
        <TopBar />
        <div className=" snap snap-y snap-mandatory w-full overflow-x-hidden sm:overflow-x-visible h-sections top-20 relative snap-start">
          <Intro />
          <Portfolio />

          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
