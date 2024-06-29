import Image from "next/image";
import build from "../../../public/images/freelancer/build.svg";

const Thierd_section = () => {
  return (
    <div className=" sm:flex-row  flex flex-col-reverse  items-center mx-4 sm:mx-12 min-h-[350px] my-0  sm:my-20 ">
      <div className="sm:w-1/2  ">
        <h2 className=" SamsungOne-bold text-[16px] sm:text-2xl   mt-4  mb-1 text-center sm:text-start">
        Ease of Starting and Operating
        </h2>
        <p className=" text-[12px] sm:text-[18px] text-center sm:text-start mt-2 text-[#4f4f4f] sm:pe-20 ">
          Enjoy the freedom of choosing when, where, and how you work.
          Mhtaref.com enables you to set your own schedule, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms.
        </p>
      </div>
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image
          className="w-full h-full sm:ps-6"
          src={build}
          alt=""
        />
      </div>
    </div>
  );
};

export default Thierd_section;
