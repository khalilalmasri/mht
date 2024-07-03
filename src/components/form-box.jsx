"use client";
import Image from "next/image";
import logo_m from "../../public/images/logo_m.svg";
import Formr from "./form";
import { useTranslation } from "react-i18next";

const Form_box = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div dir="ltr" className="  mx-4 sm:mx-12 mt-20 sm:mt-40">
      <div className="flex justify-between">
        <div></div>
        <Image
          className="w-1/2 mb-[-30px] sm:mb-[-50px] sm:me-16"
          src={logo_m}
          alt=""
        ></Image>
      </div>
      <div className="w-full h-[30px] sm:h-[50px] bg-[#0e9c95] rounded-t-2xl p-2">
        <p
          className={` text-white    sm:ms-16  ${
            i18n.language === "ar" ? "d_ar sm:text-7xl " : "fontAbsolute tracking-[0.1em] sm:text-5xl "
          }`}
        >
          {/* Is coming soon */}
          {t("form.Is_coming_soon")}
        </p>
        <div></div>
      </div>
      <div className="w-full h-auto  bg-[#7cfcf6] flex  p-2 rounded-b-2xl text-center justify-center">
        <div className=" sm:w-1/2 flex-col">
          <p
            className={`  text-center mx-6 sm:m-4 mt-16 sm:mt-28 text-[12px] sm:text-xl ${
              i18n.language === "ar" ? "riyadBank " : "SamsungOne-bold"
            }`}
          >
            {/* Join the waiting list, seize the opportunity and be one of the first
            to be notified of a Mhtaref Launch. */}
            {t("form.desc")}
          </p>
          <p
            className={` text-white mt-10 sm:mt-14 text-4xl sm:text-5xl  ${
              i18n.language === "ar" ? "d_ar " : "fontAbsolute tracking-[0.1em]"
            }`}
          >
            {/* Join the waiting list */}
            {t("form.Join_the_waiting_list")}
          </p>
          <Formr />
        </div>
      </div>
    </div>
  );
};

export default Form_box;
