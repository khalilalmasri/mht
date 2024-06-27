import Image from "next/image";
import logo_m from "../../public/images/logo_m.svg";
import Formr from "./form";

const Form_box = () => {
  return (
    <div className=" mx-4 sm:mx-12 mt-20 sm:mt-40">
      <div className="flex justify-between">
        <div></div>
        <Image
          className="w-1/2 mb-[-50px] sm:me-16"
          src={logo_m}
          alt=""
        ></Image>
      </div>
      <div className="w-full h-[50px] bg-[#0e9c95] rounded-t-2xl p-2">
        <p className=" fontAbsolute text-white text-xl sm:text-5xl  sm:ms-16 tracking-[0.1em] ">
          Is coming soon
        </p>
        <div></div>
      </div>
      <div className="w-full h-auto  bg-[#7cfcf6] flex  p-2 text-center justify-center">
        <div className=" sm:w-1/2 flex-col">
          <p className="m-4 sm:mt-28 sm:text-3xl tracking-tighter   ">
            Join the waiting list, seize the opportunity and be one of the first
            to experience Mhtaref
          </p>
          <p className=" text-white sm:mt-14 text-2xl sm:text-5xl  fontAbsolute  tracking-[0.1em] ">
            Join the waiting list
          </p>
          <Formr />
        </div>
      </div>
    </div>
  );
};

export default Form_box;
