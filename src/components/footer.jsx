import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import sent from "../../public/icons/sent.svg";
import face from "../../public/icons/face.svg";
import insta from "../../public/icons/insta.svg";
import linkedin from "../../public/icons/linkedin.svg";
import dadh from "../../public/icons/dadh.svg";
import Logof from "./logof";

const Footer = () => {
  return (
    <>
      <div className=" hidden sm:flex SamsungOne-bold my-6 mx-2 sm:mx-12 text-sm sm:text-[17px] text-[#040404] font-bold  justify-between sm:mb-28">
        <div className="  sm:w-1/3">
          {/* <Image
            className="sm:pb-5 w-[100px] sm:w-[150px]"
            src={logo}
            alt=""
          ></Image>
          <p  className="hidden sm:block">The ultimate </p>
          <p className="hidden sm:block">freelancing marketplace.</p> */}
          <Logof />
          <Link
            className="flex flex-row rtl:flex-row-reverse  gap-1 sm:gap-2 my-7"
            href={""}
          >
            <div className="hidden rtl:block w-full"></div>
            <Image
              className="sm:me-1 sm:my-1 w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
              src={sent}
              alt=""
            ></Image>
            <p>info@mhtaref.com</p>
          </Link>

          <p className="rtl:sm:hidden">© 2024 Mhtaref, All rights reserved.</p>
          <p className="ltr:sm:hidden riyadBank">
            © محترف 2024, جميع الحقوق محفوظة.
          </p>
        </div>
        <div className="text-[18px] w-1/3">
          <div className="h-full"></div>
          <div className="flex gap-2 absolute text-center justify-items-center mt-[-70px] ">
            <Link href={""}>
              <Image src={face} alt=""></Image>
            </Link>
            <Link href={""}>
              <Image src={insta} alt=""></Image>
            </Link>
            <Link href={""}>
              <Image src={linkedin} alt=""></Image>
            </Link>
          </div>
        </div>

        <div>
          <div className="h-full"></div>
          <div className="mt-[-80px]">
            <div className="flex">
              {" "}
              <div className="w-full"></div>
              <Link className="flex my-5 rtl:me-2  " href={""}>
                <Image src={dadh} alt=""></Image>
              </Link>
            </div>
            <div className="rtl:hidden flex mt-[-15px] ">
              <p>A Dadh </p>
              <p className="text-[8px] ">TM</p>
              <p className="w-[2px] "> </p>
              <p>Company</p>
            </div>
            <div className=" ltr:hidden flex mt-[-15px] riyadBank ">
              <p>إحدى شركات ضاد </p>
              <p className="text-[5px] ms-1 ">TM</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:hidden flex flex-col  SamsungOne-bold mt-12 mb-4 mx-4  text-[10px]  text-[#040404] ">
        <div className="flex">
          <div className="w-1/3 "></div>
          <div className=" flex flex-col  text-center   ">
            <Image className=" w-[120px] " src={logo} alt=""></Image>
            <p className="mt-3 rtl:hidden">The ultimate </p>
            <p className="rtl:hidden">freelancing marketplace.</p>
            <p className="ltr:hidden riyadBank ">موقع محترفي العمل الحر</p>
            {/* <div className="h-full"></div> */}
            <div className="flex gap-1 my-5 text-center justify-items-center ">
              <Link href={""}>
                <Image src={face} alt=""></Image>
              </Link>
              <Link href={""}>
                <Image src={insta} alt=""></Image>
              </Link>
              <Link href={""}>
                <Image src={linkedin} alt=""></Image>
              </Link>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
        <div className="flex mt-10 ">
          <div className="w-2/3 mt-[-15px]  ">
            <div className="h-1/3"></div>
            <Link className="flex  rtl:flex-row-reverse  gap-1  my-1" href={""}>
            <div className=" ltr:hidden w-full"></div>
              <Image className=" w-[15px] h-[15px] " src={sent} alt=""></Image>
              <p>info@mhtaref.com</p>
              
            </Link>

            <p className="rtl:hidden">© 2024 Mhtaref, All rights reserved.</p>
            <p className="ltr:hidden riyadBank">
              © محترف 2024, جميع الحقوق محفوظة.
            </p>
          </div>
          <div className="w-1/3 ">
            <div className="flex">
              <div className="w-full"></div>

              <Link href={""} className="rtl:me-6  ">
                <Image src={dadh} alt="" width={30} height={30}></Image>
              </Link>
            </div>
            <div className=" rtl:hidden flex mt-[3px] ">
              <div className="  w-full"></div>
              <p className="me-[1px]">A</p>
              <p>Dadh </p>
              <p className="text-[6px] me-[3px]">TM</p>
              <p>Company</p>
            </div>
            <div className=" ltr:hidden flex mt-[3px]  riyadBank  ">
              <div className=" w-1/4"></div>
              <p >إحدى شركات ضاد </p>
              <p className="text-[5px] ms-1 ">TM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
