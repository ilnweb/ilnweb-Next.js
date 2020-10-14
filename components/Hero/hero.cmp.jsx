import { useState } from "react";
import "./hero.module.scss";
import Herosvg from "../Hero/hero-svg";
import { Waypoint } from "react-waypoint";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  const [inView, setView] = useState(false);

  const handleWaypointEnter = () => {
    setView(true);
  };
  const handleWaypointLeave = () => {
    setView(false);
  };
  return (
    <div className="hero-wrap">
      <div className="hero">
        <div className="hero-backround"/>
        <div className="hero_content">
        
          <div className="hero_content-left">
            <h1 className="color-white">I make your websites too much good!</h1>
            <p className="subtitle color-white">
              Show your bussines sucsees with a great and modern Progressive Web
              App, Single page Application or Web Site
            </p>
            <button className="button-primary">Get a quote now!</button>
          </div>
          <div className="hero_content-right">{inView && <Herosvg />}</div>
        </div>
      </div>
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <div className="scroll-down">
        <MdKeyboardArrowDown style={{ marginTop: ".3rem" }} />
      </div>
    </div>
  );
};

export default Hero;
