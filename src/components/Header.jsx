import Image from "next/image";
import logo from "../../public/images/logo.svg";
import "./header.css";
import Switchlanguage from "./switchlanguage";
import Switch_section from "./switch-section";
function Header() {
  return (
    <div className=" my-3  sm:my-6 mx:2 sm:mx-12 text-[14px]  sm:text-[20px] text-[#040404] sm:font-bold flex justify-between sm:tracking-tighter sm:leading-9">
      <div className="flex-column">
        <div className="flex flex-row  ">
          <div className="hidden sm:block mt-auto sm:mr-[-15px]   ">
            The ultimate{" "}
          </div>
          <Image className="pb-3 flex flex-row w-[100px] sm:w-[150px] ms-3 sm:ms-0 " src={logo} alt="" />
        </div>

        <span className="hidden sm:block">freelancing marketplace.</span>
      </div>
      <div className="sm:pb-[22px] sm:mr-4 ">
        <Switchlanguage />
        <Switch_section />
      </div>
    </div>
  );
}
export default Header;
