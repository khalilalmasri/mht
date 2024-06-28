"use client";
import Image from "next/image";
import personb from "../../../public/images/business/personB.png";
import MyComponent from "../test";

function IndependenceBusiness() {
  return (
    <div className="bg-[#c9feff] my-6 ms-3 me-3 sm:me-16 sm:ms-12 text-[24px] rounded-2xl text-[#040404]  ">
      <div className="sm:position-relative sm:relative content flex sm:justify-between  ms-6">
        <Image
          className=" ms-[-30px] sm:ms-[-50px] mt-3 w-4/5  "
          src={personb}
          alt=""
        />
        <div className=" mt-9 sm:mt-28 ms-[-100px] sm:ms-[-125px]">
          <h2 className=" fontAbsolute  text-3xl sm:text-7xl   font-extrabold text-[#49daf9]">
            hire
          </h2>
          <p className=" SamsungOne-bold sm:text-3xl text-[12px]  text-[#0404040] me-4  mb-1 ">
            the best freelance talent in the MENA region
          </p>
          <p className=" fontAbsolute text-xl sm:text-5xl text-[#49daf9] mb-28 sm:mb-4 sm:me-2 ">
            To grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}
export default IndependenceBusiness;
