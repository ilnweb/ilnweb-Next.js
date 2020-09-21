import "./about.module.scss";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-content">
        <div className="about-content-left">
          <h1>Hi, my name is ILIYAN TSACHEV</h1>
          <p className="subtitle">
            I'm a JavaScript developer based in Warsaw, Poland. I spacialize in Front-End technologies like JavaScript, React, CSS, HTML, SASS, Single Page Aplications and Progresive Web Aplications. I have a strong knowedge in Back-End technologies and NoSQL databases.
          </p>
          
        </div>
        <div className="about-content-right">
          <div className="about-line"/>
        </div>
      </div>
    </div>
  );
};

export default About;
