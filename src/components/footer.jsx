import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import sent from "../../public/icons/sent.svg";
import face from "../../public/icons/face.svg";
import insta from "../../public/icons/insta.svg";
import linkedin from "../../public/icons/linkedin.svg";
import dadh from "../../public/icons/dadh.svg";

const Footer = () => {
  return (
    <div className=" my-6 mx-2 sm:mx-12 text-sm sm:text-[24px] text-[#040404] font-bold flex justify-between">
      <div className="text-[18px] w-1/3">
        <Image
          className="sm:pb-5"
          src={logo}
          alt=""
          width={150}
          height={150}
        ></Image>
        <p>The ultimate </p>
        <p>freelancing marketplace.</p>

        <Link
          className="flex flex-row gap-2 my-7  hover:animate-pulse hover:duration-500"
          href={""}
        >
          <Image
            className="mr-1 my-1"
            src={sent}
            alt=""
            width={20}
            height={20}
          ></Image>
          <p>info @ mhtaref.com</p>
        </Link>

        <p>© 2024 Mhtaref, All rights reserved.</p>
      </div>
      <div className="text-[18px] w-1/3">
        <div className="h-full"></div>
        <div className="flex gap-2 absolute text-center justify-items-center mt-[-70px] ">
          <Link className="hover:mt-[-30px]  hover:duration-1000" href={""}>
            <Image src={face} alt="" height={40} width={40}></Image>
          </Link>
          <Link className="hover:mt-[-30px]  hover:duration-1000" href={""}>
            <Image src={insta} alt="" height={40} width={40}></Image>
          </Link>
          <Link
            className="hover:mt-[-30px]  hover:duration-1000
          "
            href={""}
          >
            <Image src={linkedin} alt="" height={40} width={40}></Image>
          </Link>
        </div>
      </div>

      <div className="text-[18px] ">
        <div className="h-full"></div>
        <div className="mt-[-80px]">
          <div className="flex">
            {" "}
            <div className="w-full"></div>
            <Link
              className="mr-1  flex flex-row gap-2 my-5  hover:animate-pulse hover:duration-500"
              href={""}
            >
              <Image src={dadh} alt=""></Image>
            </Link>
          </div>
          <div className="flex mt-[-20px]">
            <p>A Dadh </p>
            <p className="text-[10px] ">TM</p>
            <p>Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
