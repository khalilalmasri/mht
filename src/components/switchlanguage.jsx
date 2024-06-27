"use client";
import { useContext } from "react";
import { TranslateContext } from "../utils/TranslateContext";
function Switchlanguage() {
  const { handleChangeLanAr, ArLang, handleChangeLanEn } = useContext(TranslateContext);

  return (
    <div className="flex justify-end mb-[30px] text-[16px] me-2 sm:me-0 ">
      <button
        onClick={() => handleChangeLanAr()}
        className="mx-1  "
        style={{ color: ArLang ? "#74f6d7" : "black" }}
      >
        AR
      </button>{" "}
      <button
        onClick={() => handleChangeLanEn()}
        
        style={{ color: ArLang ? "black" : "#74f6d7" }}
      >
        EN
      </button>
    </div>
  );
}

export default Switchlanguage;
