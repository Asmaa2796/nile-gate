import React from 'react';
import './RequestQuote.css';
import Banner from '../Banner/Banner';
import { useTranslation } from 'react-i18next';

const RequestQuote = () => {
  const { t } = useTranslation("global");

  return (
    <div className="request_quote_section">
      <Banner
        currentPage={t("requestquote.title")}
        bg={`url(../../meteor.svg)`}
      />
      <div className='container'>
        <form>
          <label>{t("requestquote.name")}</label>
          <input name='name' placeholder={t("requestquote.name")} />

          <label>{t("requestquote.whatsapp")}</label>
          <input name='whatsapp' placeholder={t("requestquote.whatsapp")} />

          <label>{t("requestquote.email")}</label>
          <input name='email' placeholder={t("requestquote.email")} />

          <label>{t("requestquote.country")}</label>
          <input name='country' placeholder={t("requestquote.country")} />

          <label>{t("requestquote.port")}</label>
          <input name='port' placeholder={t("requestquote.port")} />

          <label>{t("requestquote.products")}</label>
          <textarea name='interestedProducts' placeholder={t("requestquote.products")}></textarea>

          <label>{t("requestquote.packaging")}</label>
          <textarea name='packaging' placeholder={t("requestquote.packaging")}></textarea>

          <label>{t("requestquote.otherNotes")}</label>
          <textarea name='otherNotes' placeholder={t("requestquote.otherNotes")}></textarea>

          <label>{t("requestquote.payment")}</label>
          <select name='paymentMethod' defaultValue={t("requestquote.choosePayment")}>
            <option value={t("requestquote.choosePayment")} disabled>{t("requestquote.choosePayment")}</option>
            <option value="cod">{t("requestquote.cod")}</option>
            <option value="visa">{t("requestquote.visa")}</option>
          </select>

          <div className='text-center'>
            <button type='submit'>{t("requestquote.submit")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
