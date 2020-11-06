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
          src={item.desctop}
        />
        <img
          className="mobile"
          src={item.mobile}
        />
      </div>
    </div>
    <div className="portfolio-page_item-right">
      <h2 style={{ color: "#00dcc0", marginBootom: "20px" }}>{item.title}</h2>
      <h1>
       {item.subTitle}
      </h1>
      <p>
        {item.description}
        </p>
      <button className="button-secondary">View Project</button>
    </div>
  </div>
);

export default ItemPortfolio;
