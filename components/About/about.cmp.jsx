import "./about.module.scss";

const About = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Check out some of my work </h1>
      <p className="subtitle">Here you can see some of my favorite project and explore techologies used, video preview and link to the actual project.</p>
      <div className="portfolio-content">
      <div className="portfolio_backround"></div>
        <div className="portfolio_circle-1"></div>
        <div className="portfolio_circle-2"></div>
        <div className="portfolio_circle-3"></div>
      </div>
    </div>
  );
};

export default About;