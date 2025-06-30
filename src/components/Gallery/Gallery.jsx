import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { useTranslation } from "react-i18next";
import './Gallery.css';
const GallerySwiper = () => {
    const {t,i18n} = useTranslation('global');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const isRTL = i18n.language === "ar";
  const swiperKey = useMemo(() => `swiper-${i18n.language}`, [i18n.language]);
  const images = [
    "/Products/1.jpg",
    "/Products/2.jpg",
    "/Products/3.jpg",
    "/Products/4.jpg",
    "/Products/5.jpg",
    "/Products/6.jpg",
  ];

  return (
    <div className="container py-4">
    <h3 className="sub-color title text-center mt-2 mb-4">
          {t("navbar.gallery")} <img src="/picture.gif" alt={t("navbar.gallery")}/>
        </h3>
      {/* Main Swiper */}
      <div dir={isRTL ? "rtl" : "ltr"} id="gallery" className="gallery">
      <Swiper
        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
        key={swiperKey}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mainSwiper mb-3"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumbSwiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`thumb-${index}`}
              style={{
                height: "80px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "5px",
                cursor: "pointer",
                opacity: 0.6,
              }}
              className="img-thumbnail"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default GallerySwiper;
