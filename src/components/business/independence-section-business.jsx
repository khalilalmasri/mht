"use client";
import Image from "next/image";
import personb from "../../../public/images/business/personB.png";
import MyComponent from "../test";


function IndependenceBusiness() {
 
  return (
    <div className="bg-[#c9feff] my-6 me-16 ms-12 text-[24px] rounded-2xl text-[#040404]  ">
      <div className="position-relative relative content flex justify-between  ms-6">
        <Image
          className="ms-[-50px] mt-3"
          src={personb}
          alt=""
        />
        <div className=" mt-28 ms-[-300px]">
          <h2 className="fontAbsolute sm:text-7xl   font-extrabold text-[#49daf9]">
            hire
          </h2>
          <p className=" sm:text-3xl text-[#0404040] mx-4 mb-1 ">
            the best freelance talent in the MENA region
          </p>
          <p className=" fontAbsolute sm:text-5xl text-[#49daf9] mb-4 me-2 ">
            To grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}
export default IndependenceBusiness;
