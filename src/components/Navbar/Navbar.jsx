import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();

 const scrollToSection = (id) => {
  const closeNavbar = () => {
    const collapse = document.getElementById("navbarSupportedContent");
    const toggler = document.querySelector(".navbar-toggler");
    if (collapse?.classList.contains("show")) {
      collapse.classList.remove("show");
      toggler?.setAttribute("aria-expanded", "false");
    }
  };

  if (location.pathname === "/") {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeNavbar();
  } else {
    navigate("/", { state: { scrollTo: id } });

    // Delay closing navbar after navigation (give React Router time to load Home)
    setTimeout(() => {
      closeNavbar();
    }, 500); // Adjust delay as needed
  }
};

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        nav.classList.add("fixed-top");
      } else {
        nav.classList.remove("fixed-top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <img src="/nile-color.png" alt={t('navbar.home')}/>
        </Link>
        <button
          className="navbar-toggler border-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto p-0">
            <li className="nav-item active">
              <a className="nav-link text-white" onClick={() => scrollToSection("home")}>
                {t("navbar.home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" onClick={() => scrollToSection("about")}>
                {t("navbar.about")}
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" onClick={() => scrollToSection("features")}>
                {t("navbar.features")}
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link text-white" onClick={() => scrollToSection("our_products")}>
                {t("navbar.products")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" onClick={() => scrollToSection("gallery")}>
                {t("navbar.gallery")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" onClick={() => scrollToSection("footer")}>
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-color"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {i18n.language === "fr" ? "French" : "English"}
            </button>
            <div className="dropdown-menu lang" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item text-dark" onClick={() => i18n.changeLanguage("fr")}>
                French
              </button>
              <button className="dropdown-item text-dark" onClick={() => i18n.changeLanguage("en")}>
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
