import "./hero.module.scss";
import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div className="hero">
      <Particles
        className="particles"
        params={{
          particles: {
            number: { value: 6, density: { enable: true, value_area: 800 } },
            color: { value: "#e6e6e6" },
            shape: {
              type: "polygon",
              stroke: { width: 0, color: "#000" },
              polygon: { nb_sides: 4 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 10,
              random: true,
              anim: { enable: true, speed: 5, size_min: 30, sync: false }
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
        }}
      />
      <div className="hero_content">
        <div className="hero_content-left">
          <h1>Web developement professional freelance services</h1>
          <p className="hero_content-left_subtitle">Show your bussines sucsees with a great and modern Progressive Web App, Single page Application or Web Site</p>
          <button className="button-primary">Get a quote now!</button>
        </div>
        <div className="hero_content-right">
          <img src="https://res.cloudinary.com/ilnphotography/image/upload/v1597671370/ilnweb%20new/hero_umal1n_1_zktabe.png" alt="" />
        </div>
       
      </div>
    </div>
  );
};

export default Hero;