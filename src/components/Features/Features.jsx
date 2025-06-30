import React from 'react';
import './Features.css';
import { FaGlobe, FaBoxOpen, FaShieldAlt, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t,i18n } = useTranslation('global');

  return (
    <div className='features py-5' id='features'>
      <div className='container'>
        <h3 className="sub-color title text-center mt-2 mb-4">{t('navbar.features')} <img src="/feature.gif" alt={t("navbar.features")}/></h3>
        <div className="row justify-content-center">
          {/* Global Reach */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4' data-aos="fade-up">
            <div className='feature_card text-center p-3'>
              <FaGlobe size={30} className="text-primary mb-3" />
              <h5>{t("features.globalTitle")}</h5>
              <p>{t("features.globalDesc")}</p>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4' data-aos="fade-down">
            <div className='feature_card text-center p-3'>
              <FaShieldAlt size={30} className="text-primary mb-3" />
              <h5>{t("features.qualityTitle")}</h5>
              <p>{t("features.qualityDesc")}</p>
            </div>
          </div>

          {/* Custom Packaging */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4' data-aos="fade-up">
            <div className='feature_card text-center p-3'>
              <FaBoxOpen size={30} className="text-primary mb-3" />
              <h5>{t("features.packagingTitle")}</h5>
              <p>{t("features.packagingDesc")}</p>
            </div>
          </div>

          {/* Timely Delivery */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4' data-aos="fade-down">
            <div className='feature_card text-center p-3'>
              <FaClock size={30} className="text-primary mb-3" />
              <h5>{t("features.deliveryTitle")}</h5>
              <p>{t("features.deliveryDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
