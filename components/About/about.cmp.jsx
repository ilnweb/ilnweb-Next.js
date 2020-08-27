import { useState } from "react";
import "./about.module.scss";
import { AiTwotoneStar } from "react-icons/ai";
import { IoMdSquare } from "react-icons/io";
import { CgShapeTriangle } from "react-icons/cg";
import { FaDotCircle } from "react-icons/fa";
import { BsPentagonFill } from "react-icons/bs";
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
    <div className="portfolio">
      <h1 className="portfolio-title">Check out some of my work </h1>
      <p className="subtitle">
        Here you can see some of my favorite project and explore techologies
        used, video preview and link to the actual project.
      </p>
      
      <div className="portfolio-content">
        <div className="portfolio_backround"></div>
        <div className="portfolio_circle-1">
          <AiTwotoneStar className="circle-icon circle-icon-1" />
          <FaDotCircle className="circle-icon circle-icon-4" />
          <BsPentagonFill className="circle-icon circle-icon-5" />
          <div className="portfolio_circle-2">
            <IoMdSquare className="circle-icon circle-icon-2" />
            <div className="portfolio_circle-3">
              <CgShapeTriangle className="circle-icon circle-icon-3" />
            </div>
          </div>
        </div>
        <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
        <video
          className={`${inView ? "video-1" : ""}`}
          width="400"
          height="260"
          muted
          autoPlay={inView}
          
        >
          <source
            src="https://res.cloudinary.com/ilnphotography/video/upload/v1598457283/ilnweb/Qizify_vaqgnv.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default About;
