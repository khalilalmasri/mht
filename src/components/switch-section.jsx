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
    <div className=" flex items-center justify-between   ">
      <Image
        className="px-1 mx-1 "
        src={traingle}
        alt=""
        width={20}
        height={20}
      />
      <Link
        onClick={() => setIsFreelancer(true)}
        href="/freelancer"
        style={{
          background: isFreelancer ? "#74f6d7" : "white",
          color: isFreelancer ? "white" : "black",
          lineHeight: isFreelancer ? "22px" : "auto",
        }}
      >
        {t("freelancers")}
      </Link>

      <Image
        className="px-1 mx-1 "
        src={traingle}
        alt=""
        width={20}
        height={20}
      />

      <Link
        onClick={() => setIsFreelancer(false)}
        href="/business"
        style={{
          background: !isFreelancer ? "#3fd6f6" : "white",
          color: !isFreelancer ? "white" : "black",
          lineHeight: !isFreelancer ? "22px" : "auto",
        }}
      >
        {t("business")}
      </Link>
    </div>
  );
}

export default Switch_section;
