import "./homepage.module.scss";
import Hero from "../Hero/hero.cmp";
import About from "../About/about.cmp";
import {MdKeyboardArrowDown} from "react-icons/md";

const HomePage = () => {
  return (
    <div className="home-page">
      
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
