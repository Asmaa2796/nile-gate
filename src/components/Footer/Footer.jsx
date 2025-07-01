import React from "react";
import "./Footer.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
  return (
    <footer className="footer py-5 text-white" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4">
            <Link to="/">
              <img
                className="footer_logo"
                src="/nile-white.png"
                alt={t("navbar.home")}
              />
            </Link>
            <p className="line-height text-center">{t("footer.description")}</p>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4">
            <h5>{t("footer.quickLinks")}</h5>
            <ul className="list-unstyled quick_links">
              <li>
                <Link to="/" className="footer-link">
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-link"
                  onClick={() => scrollToSection("about")}
                >
                  {t("navbar.about")}
                </a>
              </li>
              <li>
                <a
                  href="#our_products"
                  className="footer-link"
                  onClick={() => scrollToSection("our_products")}
                >
                  {t("navbar.products")}
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="footer-link"
                  onClick={() => scrollToSection("footer")}
                >
                  {t("navbar.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4">
            <h5>{t("footer.contactUs")}</h5>
            <p>
              <FaMapMarkerAlt className="me-2" /> {t("footer.address")}
            </p>
            <p>
              <TbBrandWhatsappFilled className="me-2" />
              <a
                href="https://wa.me/201017037507"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  direction: "ltr",
                  color: "var(--basic-color) !important",
                }}
                className="d-inline-block"
              >
                +2 010 170 375 07
              </a>
            </p>

            <p>
              <TbBrandWhatsappFilled className="me-2" />
              <a
                href="https://wa.me/14379915123"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  direction: "ltr",
                  color: "var(--basic-color) !important",
                }}
                className="d-inline-block"
              >
                +1 437 991 5123
              </a>
            </p>

            <p className="custom-font">
              <FaEnvelope className="me-2" />{" "}
              <a
                href="mailto:info@nilegateegypt.com"
                style={{ color: "var(--basic-color) !important" }}
              >
                info@nilegateegypt.com
              </a>{" "}
            </p>
          </div>
        </div>

        <div className="text-center mt-4 border-top pt-3">
          <small>
            © {new Date().getFullYear()} Nile Gate Export. {t("footer.rights")}
            <a
              style={{ color: "var(--sub-color) !important" }}
              href="https://brmja.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {t("footer.brmjaTech")}
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
