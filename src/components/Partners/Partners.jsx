import React from "react";
import "./Partners.css";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const {t,i18n} = useTranslation('global');
  return (
    <div className="partners py-5">
      <div className="container">
        <h3 className="sub-color title text-center mt-2 mb-4">{t('navbar.partners')} <img src="/deal.gif" alt={t("navbar.partners")}/></h3>
        <div className="row justify-content-center">
          <div className="col-xl-2 col-lg-2 col-md-4 col-12">
            <div className="partner">
              <img
                src="/logo-placeholder.jpg"
                className="rounded-3"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-12">
            <div className="partner">
              <img
                src="/logo-placeholder.jpg"
                className="rounded-3"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-12">
            <div className="partner">
              <img
                src="/logo-placeholder.jpg"
                className="rounded-3"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-12">
            <div className="partner">
              <img
                src="/logo-placeholder.jpg"
                className="rounded-3"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-12">
            <div className="partner">
              <img
                src="/logo-placeholder.jpg"
                className="rounded-3"
                alt="partner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
