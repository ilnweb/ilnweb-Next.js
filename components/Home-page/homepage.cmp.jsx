import "./homepage.module.scss";
import Hero from "../Hero/hero.cmp";
import Portfolio from "../Portfolio/portfolio.cmp";
import About from "../About/about.cmp";
import Skills from "../Skills/skills.cmp";
import {MdKeyboardArrowDown} from "react-icons/md";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      {
        //<Portfolio />
      }
      <About />
      <Skills />
    </div>
  );
};

export default HomePage;
