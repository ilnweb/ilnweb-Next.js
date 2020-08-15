import "./hero.module.scss";
import Particles from 'react-particles-js';

const Hero = () => {
  return (
    <div className="hero">
      <Particles
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 5
            }
          }
        }
      }}/>
    </div>
  );
};

export default Hero;