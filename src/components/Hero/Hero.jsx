import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";
import './Hero.css';

const Hero = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);
  const { t,i18n } = useTranslation('global');

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        t("home.typed1"),
        t("home.typed2")
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, [t]);

  return (
    <div className="hero_section">
      <video autoPlay loop muted playsInline>
        <source src="/Hero/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero_overlay">
        <h1 className="mb-5"><span ref={typedElement} /></h1>
        <p className="line-height text-center" data-aos="fade-up">
          {t("home.heroDesc")}
        </p>
        <Link to="/request_quote" className="request_quote" data-aos="fade-up">
          {t("home.requestQuote")} <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
