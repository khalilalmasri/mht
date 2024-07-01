"use client";
import { useTranslation } from "react-i18next";

const Hrc = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div
      className={` m-3 sm:my-12 sm:me-16 sm:ms-12 text-2xl  text-[#040404] flex ${
        i18n.language === "ar"
          ? "riyadBank sm:text-6xl"
          : "SamsungOne-bold sm:text-5xl"
      }`}
    >
      <h1 className=" w-1/2 sm:w-1/3">
        {/* The ultimate freelancing marketplace. */}
        {t("slider.The_ultimate")}
      </h1>
      <div className="w-full ms-[-20px] sm:ms-4  sm:my-4 ">
        {" "}
        <div className="h-full "></div>
        <hr className=" border-[1px] sm:border-2 ms-10 sm:ms-0 mt-[-10px] sm:mt-1 border-[#040404]" />
      </div>
    </div>
  );
};

export default Hrc;
