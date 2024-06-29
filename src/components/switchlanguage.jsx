"use client";
import { useContext } from "react";
import { TranslateContext } from "../utils/TranslateContext";
function Switchlanguage() {
  const { handleChangeLanAr, ArLang, handleChangeLanEn } =
    useContext(TranslateContext);

  return (
    <div className="flex justify-end space-x-3 mb-[5px] sm:mb-[30px] text-[12px] sm:text-[16px] me-2 sm:me-0 px-1 ">
      <button
        onClick={() => handleChangeLanAr()}
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
