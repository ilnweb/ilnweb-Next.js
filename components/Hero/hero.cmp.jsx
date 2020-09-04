import { useState } from "react";
import "./hero.module.scss";
import Particles from "react-particles-js";
import Herosvg from "../Hero/hero-svg";
import { Waypoint } from "react-waypoint";
import {MdKeyboardArrowDown} from "react-icons/md";

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
    <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <div className="hero">
        {inView&&<Particles
          className="particles"
          params={{
            particles: {
              number: { value: 7, density: { enable: true, value_area: 700 } },
              color: { value: "#e6e6e6" },
              shape: {
                type: "polygon",
                stroke: { width: 0, color: "#000" },
                polygon: { nb_sides: 4 },
                image: { src: "img/github.svg", width: 100, height: 100 },
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: { enable: true, speed: 5, size_min: 30, sync: false },
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
          }}
        />}
        <div className="hero_content">
          <div className="hero_content-left">
            <h1>Web developement professional freelance services</h1>
            <p className="subtitle">
              Show your bussines sucsees with a great and modern Progressive Web
              App, Single page Application or Web Site
            </p>
            <button className="button-primary">Get a quote now!</button>
          </div>
          <div className="hero_content-right">
            {inView&&<Herosvg />}
          </div>
        </div>
      </div>
      <div className="scroll-down"><MdKeyboardArrowDown style={{marginTop:".3rem"}}/></div>
    </div>
  );
};

export default Hero;
