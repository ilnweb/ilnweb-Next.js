import { useState, useEffect } from "react";
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
  const [current, setCurrent] = useState(0);
  const [videos, setVideos] = useState([
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1598539103/ilnweb/Together_-_Google_Chrome_2020-08-27_16-09-19_1_cjiujt.mp4",
      play: false,
      fade: false,
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1598457283/ilnweb/Qizify_vaqgnv.mp4",
      play: false,
      fade: false,
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1598457283/ilnweb/Qizify_vaqgnv.mp4",
      play: false,
      fade: false,
    },
  ]);

  const handleWaypointEnter = () => {
    setView(true);
  };
  const handleWaypointLeave = () => {
    setView(false);
  };

  useEffect(() => {
    videos[0].play = true;
    setTimeout(() => {
      if (current < videos.length) {
        let newVideos = [...videos];
        newVideos[current].fade = true;
        setVideos(newVideos);
        setCurrent(current + 1);
        console.log(current)
        let newVideos2 = [...videos];
        newVideos2[current].play = true;
        setVideos(newVideos2);
      } else {
        setCurrent(0);
      }
    }, 4000);

    return () => clearInterval();
  },[current,videos]);

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
          <div className="portfolio_backround" />
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
          {videos.map((video, i) => (
            <div
              key={i}
              className={`video-1 ${video.play ? "video-animation" : ""} ${
                video.fade ? "video-fadeout" : ""
              }`}
            >
              <ReactPlayer
                height="400px"
                muted={true}
                playing={video.play}
                url={video.url}
              >
                Your browser does not support the video tag.
              </ReactPlayer>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
