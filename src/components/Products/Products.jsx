import React, { useMemo } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { products } from "../../data";
import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  const { t, i18n } = useTranslation("global");
  const isRTL = i18n.language === "ar";
  const swiperKey = useMemo(() => `swiper-${i18n.language}`, [i18n.language]);

  return (
    <div className="our_products py-5 my-3" id="our_products">
      <div className="container">
        <h3 className="sub-color title text-center mt-2 mb-4">
          {t("navbar.products")} <img src="/Products/pro.gif" alt={t("navbar.products")}/>
        </h3>
        <div dir={isRTL ? "rtl" : "ltr"}>
          <Swiper
            key={swiperKey}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product_card">
                  <div className="product_overlay">
                    <div className="overlay">
                      <div className="icon">
                        <i className="bi bi-eye text-color"></i>
                      </div>
                    </div>
                    <img src={product.img} alt={t(product.labelKey)} />
                  </div>
                  <Link className="product_link" to={`/product_details/${t(product.labelKey).replace(/\s+/g, "_")}/${product.id}`}>
                    {t(product.labelKey)} <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
