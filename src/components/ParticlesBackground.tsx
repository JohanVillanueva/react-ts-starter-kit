import React from 'react';
import Particles from 'react-tsparticles';

const PARTICLES_CONFIG = {
  background: {
    color: {
      value: '#00171f',
    },
  },
  fpsLimit: 30,
  particles: {
    number: {
      value: 450,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    collisions: {
      enable: true,
    },
    line_linked: {
      enable: true,
      opacity: 0.01,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      speed: 0.4,
    },
    size: {
      value: 0.8,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  retina_detect: true,
};
const ParticlesBackground: React.FC = () => {
  return <Particles id="particles-background" options={PARTICLES_CONFIG} />;
};

export default ParticlesBackground;
