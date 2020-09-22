import { useState, useEffect, createRef } from "react";
import "./about.module.scss";
import { Waypoint } from "react-waypoint";

const About = () => {
  const [inView, setView] = useState(false);

  const handleWaypointEnter = () => {
    setView(true);
  };

  const handleWaypointLeave = () => {
    setView(false);
  };

  return (
    <div className="about">
      <h1>About</h1>
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <div className="about-content">
        <div className="about-content-left">
          <h1>Hi, my name is ILIYAN TSACHEV</h1>
          <p className="subtitle">
            I'm a JavaScript developer based in Warsaw, Poland. I spacialize in
            Front-End technologies like JavaScript, React, CSS, HTML, SASS,
            Single Page Aplications and Progresive Web Aplications. I have a
            strong knowedge in Back-End technologies and NoSQL databases.
          </p>
        </div>
        <div className="about-content-right">
          <div className={`"about-line" ${inView ? "about-line-animation" : ""}`}/>
          <img
            className={`img ${inView ? "image-show" : ""}`}
            style={{ width: "90%" }}
            src="https://res.cloudinary.com/ilnphotography/image/upload/v1600702880/ilnweb/shadow_zsw6h2_royosx.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
