import { useState } from "react";
import "./about.module.scss";
import { AiTwotoneStar } from "react-icons/ai";
import { IoMdSquare } from "react-icons/io";
import { CgShapeTriangle } from "react-icons/cg";
import { FaDotCircle } from "react-icons/fa";
import { BsPentagonFill } from "react-icons/bs";
import { Waypoint } from "react-waypoint";
import ReactPlayer from "react-player";

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
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      {inView && (
        <div className="portfolio-content">
          <div className="portfolio_backround"/>
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

          <div className={`video-1 ${inView ? "video-animation" : ""}`}>
            <ReactPlayer
              height="400px"
              muted={true}
              playing={inView}
              url="https://res.cloudinary.com/ilnphotography/video/upload/v1598539103/ilnweb/Together_-_Google_Chrome_2020-08-27_16-09-19_1_cjiujt.mp4"
            >
              Your browser does not support the video tag.
            </ReactPlayer>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
