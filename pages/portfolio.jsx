import Layout from "../components/Layout/layout.cmp";
import './portfolio-page.module.scss';

const Portfolio = () => {
  return (
    <Layout>
      <div className="porfolio-page">
        <div className="portfolio-hero">
          <div className="hero-backround" style={{height:"40%"}} />
          <h1 className="color-white" style={{ fontSize: "5rem", marginTop: "5rem" }}>The Portfolio</h1>
          {
            // <p className="color-white">Here you can go though some of my favorite project ever. I have some personal projext that I wanted to show you and some colaborattions. </p>
          }
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
