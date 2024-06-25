"use client";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const TranslateContext = createContext();
function TranslateProvider({ children }) {
  const [ArLang, setArLang] = useState(false);
  const { i18n } = useTranslation("global");

  function handleChangeLanAr() {
    setArLang(true);
    i18n.changeLanguage("ar");
    localStorage.setItem("lang", "ar");
  }
  function handleChangeLanEn() {
    setArLang(false);
    i18n.changeLanguage("en");
    localStorage.setItem("lang", "en");
  }
  useEffect(() => {
    if (localStorage.getItem("lang").includes("ar")) {
      setArLang(true);
    } else {
      setArLang(false);
    }
    i18n.changeLanguage(localStorage.getItem("lang"));
  }, []);
  return (
    <TranslateContext.Provider
      value={{ handleChangeLanEn, handleChangeLanAr, setArLang, ArLang }}
    >
      <div dir={ArLang ? "rtl" : "ltr"}> {children}</div>
    </TranslateContext.Provider>
  );
}

export { TranslateContext, TranslateProvider };
