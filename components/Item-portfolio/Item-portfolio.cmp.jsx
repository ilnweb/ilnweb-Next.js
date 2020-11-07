import { useState } from "react";
import "./Item-portfolio.module.scss";
import { Waypoint } from "react-waypoint";

const ItemPortfolio = ({ item }) => {
  const [inView, setView] = useState(false);
  const handleWaypointEnter = () => {
    setView(true);
  };
  const handleWaypointLeave = () => {
    setView(false);
  };
  return (
    <div className="portfolio-page_item">
    <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />
    <div className="portfolio-page_item-left">
      <div>
        {
          <img
            className="portfolio-page_item-left_backround"
            src={item.background}
          />
        }
        <img
          className={`${item.mobileOnly ? "mobileOnly":"desctop"} ${inView ? item.mobile?"mobileOnlyInview": "opacity desctopInview ":""}`}
          src={item.desctop}
        />
        <img
          className={`mobile ${inView ? "opacity mobileInview opacity":""}`}
          src={item.mobile}
        />
      </div>
    </div>
    <div className="portfolio-page_item-right">
      <h2 >{item.title}</h2>
      <h1>
        {item.subTitle}
      </h1>
      <p>
        {item.description}
      </p>
      <button className="button-secondary">View Project</button>
    </div>
    </div>
  )
};

export default ItemPortfolio;
