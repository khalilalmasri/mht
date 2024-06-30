"use client";
import Image from "next/image";
import br from "../../../public/images/freelancer/br.svg";
import { useTranslation } from "react-i18next";
const Forth_section = () => {
  const { t } = useTranslation("global");
  return (
    <div className="sm:flex-row  sm:flex items-center mx-4  sm:mx-12 min-h-[350px] my-20 ">
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image className="w-full h-full sm:pe-6" src={br} alt="" />
      </div>
      <div className="sm:w-1/2  ">
        <h2 className=" sm:text-2xl SamsungOne-bold text-[16px] text-center sm:text-start mt-5 sm:ps-20 mb-1">
          {/* Professional Development */}
          {t("desc.Professional_Development")}
        </h2>
        <p className="  text-[12px] sm:text-[18px] text-center sm:text-start mt-2 text-[#4f4f4f] sm:ps-20 ">
          {/* Mhtaref.com offers resources, tutorials, and expert advice to help you
          enhance your freelance skills and grow professionally. Access valuable
          insights, stay updated on industry trends, and sharpen your expertise
          to stay competitive in the ever-evolving freelance landscape. */}
          {t("desc.Professional_Development_desc")}
        </p>
      </div>
    </div>
  );
};

export default Forth_section;
