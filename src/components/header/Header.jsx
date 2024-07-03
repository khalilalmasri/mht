import "./../header.css";
import Switchlanguage from "./switchlanguage";
import Switch_section from "./switch-section";
import Logoh from "./logoh";
function Header() {
  return (
    <>
      <div className=" SamsungOne-bold mt-4 sm:my-3 mx:2 sm:mx-12 text-[7px]  sm:text-[18px] text-[#040404] sm:font-bold flex justify-between sm:tracking-tighter sm:leading-9 sm:h-[100px]">
        <Logoh />
        <div className="sm:pb-[22px] sm:mr-4 rtl:ml-2 rtl:sm:ml-0">
          <Switchlanguage />
          <Switch_section />
        </div>
      </div>
    </>
  );
}
export default Header;
