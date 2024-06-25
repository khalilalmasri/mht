"use client";
import { useState } from "react";
import { useContext } from "react";
import { TranslateContext } from "../utils/TranslateContext";
import { useTranslation } from "react-i18next";

function Switchlanguage() {
  // const [isAr, setIsAr] = useState(false);
  const { handleChangeLan, ArLang } = useContext(TranslateContext);
  const { t } = useTranslation("global");

  const clickAr = () => {
    handleChangeLan("ar");
    // setIsAr(true);
    // console.log(i18next.language);
  };
  const clickEn = () => {
    handleChangeLan("en");
    // setIsAr(false);
  };
  return (
    <div className="flex justify-end mb-[30px] text-[18px] ">
      <button
        // onClick={() => handleChangeLan("ar") && setIsAr(true)}
        onClick={() => handleChangeLan("ar")}
        className="mr-1 text-[#74f6d7] "
        style={{ color: ArLang ? "#74f6d7" : "black" }}
      >
        AR
      </button>{" "}
      <button
        // onClick={() => handleChangeLan("en") && setIsAr(false)}
        onClick={() => handleChangeLan("en")}
        className="ml-1"
        style={{ color: ArLang ? "black" : "#74f6d7" }}
      >
        EN
      </button>
    </div>
  );
}

export default Switchlanguage;
