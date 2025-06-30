import React from 'react';
import Banner from '../Banner/Banner';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { products } from '../../data';

const ProductDetails = () => {
  const { t } = useTranslation('global');
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product_details">
      <Banner
        currentPage={t(product?.labelKey || "products.productDetails")}
        bg={`url(../../Products/details.jpg)`}
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          {product?.subs?.length > 0 ? (
            product.subs.map((subKey, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
                <div className="sub_item_card my-2 text-center rounded-2 border p-3 shadow-sm">
                  <img
                    src={subKey.img}
                    alt={t(subKey.labelKey)}
                    className="img-fluid mb-2 w-100 rounded-3"
                    style={{ maxHeight: "170px", objectFit: "cover" }}
                  />
                  <h5 className="my-2 sub-color">{t(subKey.labelKey)}</h5>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              <img
                src="/remove.gif"
                className="mx-auto"
                style={{ width: "auto", maxHeight: "60px" }}
                alt={t("products.noSubItems")}
              />
              <p className="my-2 text-lg">{t("products.noSubItems")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
