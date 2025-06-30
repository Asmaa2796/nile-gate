import React, { useRef } from "react";
import "./About.css";
import HTMLFlipBook from "react-pageflip";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");
  const bookRef = useRef(); // Control flipbook manually

  return (
    <div className="about py-5" id="about">
      <div className="container">
        <h3 className="sub-color title text-center mt-2 mb-4">
          {t("about.heading")} <img src="/about.gif" alt={t("about.heading")} />
        </h3>

        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-6 col-12" data-aos="fade-up">
            <div className="book-wrapper position-relative">
              <HTMLFlipBook
                ref={bookRef}
                width={300}
                height={400}
                size="stretch"
                minWidth={200}
                maxWidth={1000}
                minHeight={300}
                maxHeight={1500}
                maxShadowOpacity={0.5}
                showCover={false}
                mobileScrollSupport={false} // Disable scroll on touch
                usePortrait={true}
                style={{ width: "100%", height: "auto" }}
              >
                <div className="page">
                  <img
                    src="/Products/1.jpg"
                    alt={t("about.heading")}
                    className="w-100 h-100 object-fit-cover rounded-3"
                  />
                </div>
                
                <div className="page">
                  <div className="about_text rounded-3">
                    <div>
                      <h5 className="text-white">{t("about.missionTitle")}</h5>
                      <p className="text-white line-height">{t("about.missionText")}</p>
                    </div>
                  </div>
                </div>

                <div className="page">
                  <img
                    src="/Products/3.jpg"
                    alt={t("about.heading")}
                    className="w-100 h-100 object-fit-cover rounded-3"
                  />
                </div>
                <div className="page">
                  <div className="about_text rounded-3">
                    <div>
                      <h5 className="text-white">{t("about.visionTitle")}</h5>
                      <p className="text-white line-height">{t("about.visionText")}</p>
                    </div>
                  </div>
                </div>

                <div className="page">
                  <img
                    src="/Products/4.jpg"
                    alt={t("about.heading")}
                    className="w-100 h-100 object-fit-cover rounded-3"
                  />
                </div>
              </HTMLFlipBook>

              {/* Tap zones for mobile click flipping */}
              <div className="tap-zone left" onClick={() => bookRef.current.pageFlip().flipPrev()} />
              <div className="tap-zone right" onClick={() => bookRef.current.pageFlip().flipNext()} />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 col-md-6 col-12" data-aos="fade-down">
            <div className="line-height">
              <h4 style={{ fontWeight: "bold" }} className="text-color">
                Nile Gate Export
              </h4>
              <p className="line-height">{t("about.paragraphText")}</p>
            </div>
            <p className="line-height">{t("about.missionText")}</p>
            <p className="line-height">{t("about.visionText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
