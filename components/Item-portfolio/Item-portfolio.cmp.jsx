import "./Item-portfolio.module.scss";

const ItemPortfolio = ({item}) => (
  <div className="portfolio-page_item">
    <div className="portfolio-page_item-left">
      <div>
        {
          <img
        className="portfolio-page_item-left_backround"
          src={item.background}
          />
        }
        <img
          className="desctop"
          style={{ border: "3px solid white" }}
          src="https://res.cloudinary.com/ilnphotography/image/upload/v1602862830/ilnweb/Screenshot_221_rk9fxf.png"
        />
        <img
          className="mobile"
          style={{ border: "3px solid white" }}
          src="https://res.cloudinary.com/ilnphotography/image/upload/v1602862830/ilnweb/Screenshot_2020-10-16_173816_weptbq.png"
        />
      </div>
    </div>
    <div className="portfolio-page_item-right">
      <h3 style={{ color: "grey", marginTop: "0rem" }}>{item.title}</h3>
      <h2 style={{ fontSize: "2rem", marginTop: "0rem" }}>
       {item.subTitle}
      </h2>
      <p>
        {item.description}
        </p>
      <div style={{ color: "#644596" }}>View Project</div>
    </div>
  </div>
);

export default ItemPortfolio;
