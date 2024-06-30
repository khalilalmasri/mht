"use client";
import Image from "next/image";
import earthi from "../../../public/images/freelancer/earth.svg";
import { useTranslation } from "react-i18next";
const First_section = () => {
  const { t } = useTranslation("global");
  return (
    <div className=" sm:flex-row  flex flex-col-reverse  items-center mx-4 sm:mx-12 min-h-[360] my-20  ">
      <div className="sm:w-1/2 ">
        <h2 className=" SamsungOne-bold text-[16px] sm:text-2xl   mt-4  mb-1 text-center sm:text-start">
          {t("desc.Access_to_a_Global_Client_Base")}
        </h2>
        <p className=" text-[12px] sm:text-[18px] text-center sm:text-start mt-2 text-[#4f4f4f] sm:pe-20 ">
          {/* Enjoy the freedom of choosing when, where, and how you work.
          Mhtaref.com enables you to set your own schedule, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  */}
         {t("desc.Access_to_desc")}
        </p>
      </div>
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image
          className="w-full h-full  sm:ps-6"
          src={earthi}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default First_section;
