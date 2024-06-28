import Image from "next/image";
import logo from "../../public/images/logo.svg";
import "./header.css";
import Switchlanguage from "./switchlanguage";
import Switch_section from "./switch-section";
function Header() {
  return (
    <>
      <div className=" SamsungOne-bold mt-3 sm:my-3 mx:2 sm:mx-12 text-[7px]  sm:text-[18px] text-[#040404] sm:font-bold flex justify-between sm:tracking-tighter sm:leading-9 sm:h-[100px]">
        <div className="flex-column">
          <div className="flex flex-row  ">
            <div className="hidden sm:flex mt-auto sm:mb-[-10px]  sm:mr-[-15px] ">
              The ultimate{" "}
            </div>
            <Image
              className="pb-3 flex flex-row w-[120px] sm:w-[150px] ms-4 sm:ms-0 ms:mb-0 mb-[-10px] "
              src={logo}
              alt=""
            />
          </div>
          <span className=" sm:hidden ms-4 ">The ultimate</span>{" "}
          <span>freelancing marketplace.</span>
        </div>
        <div className="sm:pb-[22px] sm:mr-4 ">
          <Switchlanguage />
          <Switch_section />
        </div>
      </div>
    </>
  );
}
export default Header;
