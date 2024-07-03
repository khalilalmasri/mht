"use client";
import Image from "next/image";
import personb from "../../../public/images/business/personB.png";
import { useTranslation } from "react-i18next";

function IndependenceBusiness() {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <div
        dir="ltr"
        className=" hidden sm:block bg-[#c9feff] my-6 ms-3 me-3 sm:me-16 sm:ms-12 text-[24px] rounded-2xl text-[#040404]  "
      >
        <div className="sm:position-relative sm:relative content flex sm:justify-between  ms-6">
          <Image
            className=" ms-[-30px] sm:ms-[-50px] mt-3 w-4/5 "
            src={personb}
            alt=""
          />
          <div className="  mt-9 sm:mt-28 ml-[-125px]">
            <div className={`${i18n.language === "ar" ? "pr-8 " : ""} `}>
              <h2
                className={`text-3xl  sm:text-7xl  text-[#49daf9] ${
                  i18n.language === "ar" ? "d_ar text-end  " : "fontAbsolute"
                }`}
              >
                {" "}
                {t("slider.hire")}
              </h2>
              <p
                className={`text-[#0404040]   mb-1 ${
                  i18n.language === "ar"
                    ? "riyadBank text-end text-2xl  "
                    : "SamsungOne-bold text-3xl me-4 "
                }`}
              >
                {/* the best freelance talent in the MENA region */}
                {t("slider.the_best")}
              </p>
              <p
                className={`text-5xl text-[#49daf9] mb-4 me-2 ${
                  i18n.language === "ar" ? "d_ar pl-6" : "fontAbsolute"
                }`}
              >
                {/* To grow your business. */}
                {t("slider.To_grow_your_business.")}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col sm:hidden  bg-[#c9feff] my-6 ms-3 me-3  text-[24px] rounded-2xl text-[#040404]">
        <div className=" text-center ms-6 mt-8 ">
          <div className=" rtl:hidden">
            <h2 className="  d_ar  text-4xl font-extrabold text-[#49daf9]">
              hire
            </h2>
            <p className=" SamsungOne-bold  text-[17px]  text-[#0404040] me-4  mb-1 ">
              the best freelance talent
            </p>
            <p className=" SamsungOne-bold  text-[17px]  text-[#0404040] me-4  mb-1 ">
              in the MENA region
            </p>
            <p className=" fontAbsolute text-3xl  text-[#49daf9] mb-4  ">
              To grow your business.
            </p>
          </div>

          <div className=" ltr:hidden">
            <h2 className=" text-5xl d_ar font-extrabold text-[#49daf9]">
              وَظِّف
            </h2>
            <p className="   text-[17px]  text-[#0404040] me-4  mb-1 ">
              أفضل المواهب الحرة
            </p>
            <p className="   text-[17px]  text-[#0404040] me-4  mb-1 ">
              في منطقة الشرق الأوسط وشمال أفريقيا
            </p>
            <p className="  text-5xl d_ar text-[#49daf9] mb-4  ">لتنمية عملك</p>
          </div>
        </div>
        <Image className=" mt-5 ms-[-5px]" src={personb} alt="" />
      </div>
    </>
  );
}
export default IndependenceBusiness;
