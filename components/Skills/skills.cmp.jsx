import { useState } from "react";
import "./skills.module.scss";

const Skills = () => {
  const skills = useState([
    {
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178103/ilnweb/techIcons/js_kluhnf.png",
      title:"JavaScript"
    },
    {
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/redux-283024_x4ss7v.webp",
      title:"Redux"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/typescript-1174965_hwqz0t.webp",
      title:"TypeScript"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },{
      url: "https://res.cloudinary.com/ilnphotography/image/upload/v1600178104/ilnweb/techIcons/react_b7o2ai.png",
      title:"React"
    },
  ]);
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>
        Here are some of my besht skills and technologies that im user and I
        love
      </p>
    </div>
  );
};

export default Skills;
