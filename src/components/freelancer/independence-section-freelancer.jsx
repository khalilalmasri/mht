"use client";
import Image from "next/image";
import preson from "../../../public/images/freelancer/preson.png";
import presonSm from "../../../public/images/freelancer/personfreesm.png";
import { useTranslation } from "react-i18next";
function IndependenceFleelancer() {
  const { t , i18n } = useTranslation("global");
  return (
    <div dir="ltr" className={` bg-[#faf6ac]  my-6 ms-4 me-4 sm:me-16 sm:ms-12 text-[24px] text-[#040404] rounded-2xl ${i18n.language === 'ar' ? 'riyadBank' : 'SamsungOne-bold' }`}>
      <div className="sm:position-relative sm:relative content flex flex-col sm:flex-row sm:justify-between  ms-6">
        <div>
          <div className=" mt-6 sm:mt-44 text-center sm:text-start ">
            <p className={`text-3xl sm:text-4xl text-[#ff8400] sm:ms-2 sm:my-1 tracking-wide `}>
              {/* Your Path to */}
              {t("slider.Your_Path_to")}
            </p>
            <h2 className={` text-6xl sm:text-7xl sm:mt-[-3px] font-extrabold text-[#040404] sm:tracking-wide ${i18n.language === 'ar' ? 'riyadBank' : 'fontAbsolute' }`}>
              {/* independence */}
              {t("slider.independence")}
            </h2>
          </div>
          <p className=" text-[12px] sm:text-[18px] mt-2 sm:mt-64 mb-4 sm:me-2 mx-12 sm:mx-auto text-center sm:text-start ">
            {/* Join Mhtaref.com and unlock a world of freelance opportunities! */}
            {t("slider.desc")}
          </p>
        </div>
        <Image className=" hidden sm:block w-4/5 mt-3   " src={preson} alt="" />
        <Image className="  sm:hidden  ms-[10px]   " src={presonSm} alt="" />
      </div>
    </div>
  );
}
export default IndependenceFleelancer;
