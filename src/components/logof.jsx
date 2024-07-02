"use client";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { useTranslation } from "react-i18next";

function Logof() {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      {" "}
      <Image
        className="sm:pb-5 w-[100px] sm:w-[150px]"
        src={logo}
        alt=""
      ></Image>
      <p className="hidden ltr:sm:block">The ultimate </p>
      <p className="hidden ltr:sm:block">freelancing marketplace.</p>{" "}
      <p className="hidden rtl:sm:block riyadBank ">{t("logo.first_line")} {t("logo.second_line")}</p>{" "}
    </>
  );
}

export default Logof;
