import Image from "next/image";
import logo from "../../public/images/logo.svg";
import "./header.css";
import Switchlanguage from "./switchlanguage";
// import Link from "next/link";
import Switch_section from "./switch-section";
import MyComponent from "./test";
function Header() {
  // const { t } = useTranslation();
  return (
    <div className="   my-6 mx-12 text-[24px] text-[#040404] font-bold flex justify-between">
      <div className="flex-column">
        <div className="flex flex-row  ">
          <div className="hidden sm:block mt-auto mr-[-15px]  ">
            The ultimate{" "}
          </div>
          <Image
            className="pb-3 flex flex-row "
            src={logo}
            alt=""

          />
        </div>

        <span className="hidden sm:block">freelancing marketplace.</span>
      </div>
      <div className="pb-[22px] mr-4 ">
        <Switchlanguage />
        <Switch_section />
        <MyComponent/>
      </div>
    </div>
  );
}
export default Header;
