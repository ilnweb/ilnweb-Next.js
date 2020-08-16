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
              value: 40,
              random: false,
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
    </div>
  );
};

export default Hero;
