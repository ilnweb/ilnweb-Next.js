import Layout from "../components/Layout/layout.cmp";
import "./portfolio-page.module.scss";

const Portfolio = () => {
  return (
    <Layout>
      <div className="porfolio-page">
        <div className="portfolio-hero">
          <div className="hero-backround" style={{ height: "40%" }} />
          <h1
            className="color-white"
            style={{ fontSize: "5rem", marginTop: "5rem" }}
          >
            The Portfolio
          </h1>
          {
            // <p className="color-white">Here you can go though some of my favorite project ever. I have some personal projext that I wanted to show you and some colaborattions. </p>
          }
        </div>
        <div className="porfolio-page_item">
          <div className="porfolio-page_item-left">
            <div>
              <img style={{width:"100%"}} src="https://res.cloudinary.com/ilnphotography/image/upload/v1602862319/ilnweb/Qizify-back2_k2pjfp.png" />
              <img className="desctop" src="https://res.cloudinary.com/ilnphotography/image/upload/v1602862830/ilnweb/Screenshot_221_rk9fxf.png" />
              <img className="mobile" src="https://res.cloudinary.com/ilnphotography/image/upload/v1602862830/ilnweb/Screenshot_2020-10-16_173816_weptbq.png" />
            </div>
          </div>
          <div className="porfolio-page_item-right">
            <h3 style={{ color: "grey", marginTop: "0rem" }}>Qizify</h3>
            <h2 style={{ fontSize: "2rem", marginTop: "0rem" }}>
              A Quiz game Application that aloowes you to play in 3 languages.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="button-primary">View Project</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
