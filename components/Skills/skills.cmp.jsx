import { useState } from "react";
import "./skills.module.scss";

const Skills = () => {
  const skills = useState([
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/js_kluhnf.png",
      title: "JavaScript",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title: "React",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/redux-283024_x4ss7v.webp",
      title: "Redux",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/typescript-1174965_hwqz0t.webp",
      title: "TypeScript",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/nodejs_lvrnqm.png",
      title: "Node JS",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/express-js-png-5_radzso.png",
      title: "Express",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/MongoDB_logo_01_mqvryq.png",
      title: "MongoDB",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/firebase_urz2rv.png",
      title: "Firebase",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/git_ivatpe.png",
      title: "Git",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/HTML_y9lg3d.png",
      title: "HTML",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/CSS_uxjzef.png",
      title: "CSS",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/sass_q1pdpi.png",
      title: "SASS",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178436/ilnweb/techIcons/logo_glbyxj.png",
      title: "Material UI",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178441/ilnweb/techIcons/KDpgvguMpGfqaHPjicRK_i1rowd.svg",
      title: "Antd Design",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/bootstrap_quszip.jpg",
      title: "Bootstrap",
    }
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/vscode_jzijvz.png",
      title: "VS Code",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178251/ilnweb/techIcons/WordPress_f18gxo.png",
      title: "WordPress",
    },
    {
      url:
        "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/Photoshop_CC_icon_wysoyq.png",
      title: "Photoshop",
    },
  ]);
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>
        Here are some of my besht skills and technologies that im user and I
        love
      </p>
      <div className="skills-icons">
        {skills.map(skill => (
          <div className="skills-icon">
            <img src={skill.url} alt={skill.title} />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
