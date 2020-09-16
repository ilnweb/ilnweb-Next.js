import { useState } from "react";
import "./skills.module.scss";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiMaterialUi,
  SiBootstrap,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { Waypoint } from "react-waypoint";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      url: FaJs,
      title: "JavaScript",
    },
    {
      url: FaReact,
      title: "React",
    },
    {
      url: SiRedux,
      title: "Redux",
    },
    {
      url: SiTypescript,
      title: "TypeScript",
    },
    {
      url: FaNodeJs,
      title: "Node JS",
    },

    {
      url: SiMongodb,
      title: "MongoDB",
    },
    {
      url: SiFirebase,
      title: "Firebase",
    },
    {
      url: FaGitAlt,
      title: "Git",
    },
    {
      url: FaHtml5,
      title: "HTML",
    },
    {
      url: FaCss3Alt,
      title: "CSS",
    },
    {
      url: FaSass,
      title: "SASS",
    },
    {
      url: SiMaterialUi,
      title: "Material UI",
    },
    {
      url: AiOutlineAntDesign,
      title: "Antd Design",
    },
    {
      url: SiBootstrap,
      title: "Bootstrap",
    },
    {
      url: FaPhp,
      title: "PHP",
    },
    {
      url: FaWordpress,
      title: "WordPress",
    },
    {
      url: SiAdobephotoshop,
      title: "Photoshop",
    },
  ]);

  const [inView, setView] = useState(false);

  const handleWaypointEnter = () => {
    setView(false);
  };

  const handleWaypointLeave = () => {
    setView(false);
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>
        Here are some of my besht skills and technologies that im user and I
        love
      </p>
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
      <div className="skills-icons">
        {inView &&
          skills.map((skill, index) => {
            let TagName = skill.url;
            return (
              <div key={index} className="skills-icon">
                <TagName className="icon-image" />
                <p>{skill.title}</p>
              </div>
            );
          })}
        {
          //  <div className="skills-icon">
          //     <svg height="1em" width="1em" viewBox="0 0 128 128" className="icon-image">
          //       <path
          //         fill="aliceblue"
          //         d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"
          //       ></path>
          //     </svg>
          //     <p>VS Code</p>
          //   </div>
        }
      </div>
    </div>
  );
};

export default Skills;
