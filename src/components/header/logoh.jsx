"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { useTranslation } from "react-i18next";

function Logoh() {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="  tracking-tight flex-column">
      <div className="flex flex-row  ">
        <div className=" hidden rtl:hidden sm:flex mt-auto sm:mb-[-10px]  sm:mr-[-15px] ">
          The ultimate
        </div>
        <Image
          className="pb-3 flex flex-row w-[120px] sm:w-[150px] ms-4 sm:ms-0 ms:mb-0 mb-[-10px] "
          src={logo}
          alt=""
        />
      </div>
      <span
        className={`ltr:sm:hidden ltr:ms-4 rtl:ms-3 rtl:sm:ms-0 sm:ms-0 ${
          i18n.language === "ar" ? "riyadBank " : ""
        }`}
      >
        {/* The ultimate */}
        {t("logo.first_line")}
      </span>{" "}
      <span
        className={`
${i18n.language === "ar" ? "riyadBank" : ""}`}
      >
        {" "}
        {t("logo.second_line")}
        {/* freelancing marketplace. */}
      </span>
    </div>
  );
}

export default Logoh;
