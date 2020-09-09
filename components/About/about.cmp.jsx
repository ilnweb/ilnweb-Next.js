import { useState, useEffect, createRef } from "react";
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
  const videoLoop = createRef();
  const [videos, setVideos] = useState([
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1598539103/ilnweb/Together_-_Google_Chrome_2020-08-27_16-09-19_1_cjiujt.mp4",
      height: "400px",
      fade: false,
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1598457283/ilnweb/Qizify_vaqgnv.mp4",
      height: "280px",
      fade: false,
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/video/upload/v1598457283/ilnweb/Qizify_vaqgnv.mp4",
      height: "280px",
      fade: false,
    },
  ]);

  const handleWaypointEnter = () => {
    setView(true);
  };
  const handleWaypointLeave = () => {
    // const videosToLoop1 = Array.prototype.slice.call(
    //   videoLoop.current.children
    // );
    // videosToLoop1.map((video) => {
    //   video.classList.remove("video-animation");
    //   video.classList.remove("video-fadeout");
    //   // video.childNodes[0].childNodes[0].stop();
    // });
    // setView(false);
  };

  // const startLoop = (clear) => {

  //   const videosToLoop = Array.prototype.slice.call(videoLoop.current.children);
  //   let current = 0;
  //   videosToLoop[current].classList.add("video-animation");
  //   videosToLoop[current].childNodes[0].childNodes[0].play();
  //   const interval = setInterval(() => {
  //     // console.log(current);
  //     videosToLoop[current].classList.add("video-fadeout");
  //     videosToLoop[current].classList.remove("video-animation");
  //     // console.log(videosToLoop.length);

  //     if (current === 2) {
  //       current = 0;
  //       videosToLoop[current].classList.add("video-animation");
  //       videosToLoop[current].childNodes[0].childNodes[0].play();
  //     } else {
  //       current++;
  //     }
  //     videosToLoop[current].classList.add("video-animation");
  //     videosToLoop[current].childNodes[0].childNodes[0].play();
  //     videosToLoop[current].classList.remove("video-fadeout");
  //   }, 4800);

  // };

  // console.log(videoLoop);

  useEffect(() => {
    const videosToLoop = Array.prototype.slice.call(videoLoop.current.children);
    let current = 0;
    videosToLoop[current].classList.add("video-animation");
    console.log(videosToLoop[current].childNodes[0].childNodes[0]);
    videosToLoop[current].childNodes[0].childNodes[0] && videosToLoop[current].childNodes[0].childNodes[0].play();
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
      videosToLoop[current].childNodes[0].childNodes[0] && videosToLoop[current].childNodes[0].childNodes[0].play();
      videosToLoop[current].classList.remove("video-fadeout");
    }, 4800);

    return () => clearInterval(interval);
  }, [videoLoop]);

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Check out some of my work </h1>
      <p className="subtitle">
        Here you can see some of my favorite project and explore techologies
        used, video preview and link to the actual project.
      </p>

      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />

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
            <div key={i} className="portfolio-video">
              <ReactPlayer
                style={{ borderRadius: "5px", overflow: "hidden" }}
                height={video.height}
                width={"auto"}
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
    </div>
  );
};

export default About;
