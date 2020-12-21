import { useState, useEffect, createRef } from "react";
import "./portfolio.module.scss";
import { AiTwotoneStar } from "react-icons/ai";
import { IoMdSquare } from "react-icons/io";
import { CgShapeTriangle } from "react-icons/cg";
import { FaDotCircle } from "react-icons/fa";
import { BsPentagonFill } from "react-icons/bs";
import { Waypoint } from "react-waypoint";
import Link from "next/link";
import ReactPlayer from "react-player";

const Portfolio = () => {
  const [inView, setView] = useState(false);
  const videoLoop = createRef();
  const [videos, setVideos] = useState([
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1602776907/ilnweb/React_App_-_Google_Chrome_2020-10-15_15-59-53_2_pi0hkg.mp4",
      height: "500px",
      fade: false,
      radius: true,
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1602770096/ilnweb/Qizify_wabljm.mp4",
      height: "350px",
      fade: false,
      radius: false,
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1602771016/ilnweb/React_App_-_Google_Chrome_2020-10-15_15-59-53_ndvman.mp4",
      height: "350px",
      fade: false,
      radius: false,
    },
  ]);

  const handleWaypointEnter = () => {
    setView(true);
  };

  useEffect(() => {
    if (inView) {
      const videosToLoop = Array.prototype.slice.call(
        videoLoop.current.children
      );
      let current = 0;
      videosToLoop[current].classList.add("video-animation");
      videosToLoop[current].childNodes[0].childNodes[0] &&
        videosToLoop[current].childNodes[0].childNodes[0].play();
      const interval = setInterval(() => {
        // console.log(current);
        videosToLoop[current].classList.add("video-fadeout");
        videosToLoop[current].classList.remove("video-animation");
        // console.log(videosToLoop.length);

        if (current === 2) {
          current = 0;
          videosToLoop[current].classList.add("video-animation");
          videosToLoop[current].childNodes[0].childNodes[0] &&
            videosToLoop[current].childNodes[0].childNodes[0].play();
        } else {
          current++;
        }
        videosToLoop[current].classList.add("video-animation");
        videosToLoop[current].childNodes[0].childNodes[0] &&
          videosToLoop[current].childNodes[0].childNodes[0].play();
        videosToLoop[current].classList.remove("video-fadeout");
      }, 12000);
      return () => clearInterval(interval);
    }
  }, [videoLoop, inView]);

  return (
    <div className="portfolio">
      <div className="portfolio-side-effect">
        <div className="portfolio-side-effect-inner"></div>
      </div>
      <h1 id="portfolio" className="color-white">
        Check out some of my work{" "}
      </h1>
      <p className="subtitle color-white">
        Here you can see some of my favorite project and explore techologies
        used, video preview and link to the actual project.
      </p>
      <Waypoint onEnter={handleWaypointEnter} />
      <Link href="/portfolio">
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
          <div className="portfolio-videos" ref={videoLoop}>
            {videos.map((video, i) => (
              <div
                key={i}
                className={`portfolio-video ${
                  video.radius ? "portfolio-video-radius" : ""
                }`}
              >
                <ReactPlayer
                  className="video-container"
                  height={video.height}
                  muted={true}
                  playing={false}
                  url={video.url}
                >
                  Your browser does not support the video tag.
                </ReactPlayer>
              </div>
            ))}
          </div>
        </div>
      </Link>
      <Link href="/portfolio">
        <button className="button-primary" style={{ marginTop: "6rem" }}>
          View Portfolio
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
