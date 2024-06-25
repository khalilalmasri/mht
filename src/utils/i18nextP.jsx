"use client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import AR_LANG from "../locales/ar/common.json";
import EN_LANG from "../locales/en/common.json";

function I18nextP({ children }) {
  i18next.init({
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        global: EN_LANG,
      },
      ar: {
        global: AR_LANG,
      },
    },
    lng: "en",
  });
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default I18nextP;
