"use client";
import Image from "next/image";
import build from "../../../public/images/freelancer/build.svg";
import { useTranslation } from "react-i18next";
const Thierd_section = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div className=" sm:flex-row  flex flex-col-reverse  items-center mx-4 sm:mx-12 min-h-[350px] my-10  sm:my-20 ">
      <div className="sm:w-1/2  ">
        <h2
          className={` text-[16px] sm:text-2xl   mt-4  mb-1 text-center sm:text-start ${
            i18n.language === "ar" ? "riyadBank" : "SamsungOne-bold"
          }`}
        >
          {/* Ease of Starting and Operating */}
          {t("desc.Ease_of_Starting")}
        </h2>
        <p
          className={` text-[12px] sm:text-[18px] text-center sm:text-start mt-2 text-[#4f4f4f] sm:pe-20 ${
            i18n.language === "ar" ? "riyadBank" : " "
          }`}
        >
          {/* Enjoy the freedom of choosing when, where, and how you work.
          Mhtaref.com enables you to set your own schedule, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms. */}
          {t("desc.Ease_of_desc")}
        </p>
      </div>
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image className="w-full h-full sm:ps-6" src={build} alt="" />
      </div>
    </div>
  );
};

export default Thierd_section;
