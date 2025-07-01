import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HeroCarousel.css";

const FullWidth3DCarousel = () => {
  const { t, i18n } = useTranslation("global");

  const slides = t("carousel.slides", { returnObjects: true }) || [];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [total]);

  if (!Array.isArray(slides) || slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <div className="carousel3d-wrapper position-relative">
      <div
        className="carousel3d-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((_, i) => (
          <div className="carousel3d-slide" key={i}>
            <img src={`/Hero/s${i + 1}.jpg`} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      <div key={index} className="carousel-caption" data-aos="fade-up">
        <h2 data-aos="flip-left" data-aos-duration="2000">
          {slides[index].title}
        </h2>
        <p data-aos="flip-right" data-aos-duration="2000">
          {slides[index].desc}
        </p>
        <Link
          to="/"
          className="btn btn-light mt-2 view_more"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          {t("carousel.viewMore")}
        </Link>
      </div>

      <button className="carousel3d-button prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel3d-button next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default FullWidth3DCarousel;
