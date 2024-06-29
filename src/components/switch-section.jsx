"use client";
import { useState } from "react";
import Image from "next/image";
import traingle from "../../public/icons/traingle.svg";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Switch_section() {
  const [isFreelancer, setIsFreelancer] = useState(true);
  const { t } = useTranslation("global");
  return (
    <div className="tracking-tight flex items-center sm:justify-between me-2 sm:me-0 mt-[30px] sm:mt-[-10px] text-[14px] sm:text-[18px]   ">
      <Image className="px-1 sm:mx-2 w-[15px]  " src={traingle} alt="" />
      <Link
        onClick={() => setIsFreelancer(true)}
        href="/freelancer"
        className="px-1 leading-none "
        style={{
          background: isFreelancer ? "#3fd6f6" : "white",
          color: isFreelancer ? "white" : "black",
          // lineHeight: isFreelancer ? "22px" : "auto",
        }}
      >
        {t("freelancers")}
      </Link>

      <Image className="px-1 sm:mx-2 w-[15px]    " src={traingle} alt="" />

      <Link
        onClick={() => setIsFreelancer(false)}
        href="/business"
        className="px-1 leading-none"
        style={{
          background: !isFreelancer ? "#3fd6f6" : "white",
          color: !isFreelancer ? "white" : "black",
          // lineHeight: !isFreelancer ? "22px" : "auto",
        }}
      >
        {t("business")}
      </Link>
    </div>
  );
}

export default Switch_section;
