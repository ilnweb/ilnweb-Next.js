import "./homepage.module.scss";
import Hero from "../Hero/hero.cmp";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <h1>Next section</h1>
    </div>
  );
};

export default HomePage;