import React, { useEffect } from 'react';
import ThreeDSpringCarousel from '../HeroCarousel/ThreeDSpringCarousel';
import Products from '../Products/Products';
import About from '../About/About';
import { useLocation } from 'react-router-dom';
import GallerySwiper from '../Gallery/Gallery';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <ThreeDSpringCarousel />
      </section>

      <section id="our_products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <GallerySwiper />
      </section>

    </>
  );
};

export default Home;
