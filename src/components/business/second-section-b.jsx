import Image from "next/image";
import budget from "../../../public/images/business/budget.svg";

const Second_section_b = () => {
  return (
    <div className=" text-center sm:text-start  sm:flex  items-center mx-4  sm:mx-12 min-h-[350px] my-20 ">
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image className="w-full h-full  sm:pe-6" src={budget} alt="" />
      </div>
      <div className="sm:w-1/2  ">
        <div className="flex">
          <div className="w-1/6 sm:hidden"></div>
          {" "}
          <p className=" text-3xl sm:text-5xl fontAbsolute  text-[#74f6d7] sm:ps-20 sm:mb-1">
            Simplify{" "}
          </p>
          <p className=" text-start SamsungOne-bold  sm:text-3xl sm:ms-1 mt-[10px]  sm:mt-[20px]">
            budgeting and manage{" "}
          </p>
          <div className=" sm:hidden"></div>
        </div>
        <p className=" SamsungOne-bold sm:ps-20 sm:text-3xl sm:mt-[-10px]">
          with transparency
        </p>

        <p className=" text-[12px] sm:text-[18px] font-large mt-2 text-[#4f4f4f] sm:ps-20 ">
          Increase the cost Efficiency with our Project-Based Payments, C Enjoy
          the freedom of choosing when, where, and how you work. Mhtaref.com
          enables you to set your own schedule, determine your rates, and select
          projects that align with your skills and interests. Embrace the
          freelance lifestyle on your own terms.
        </p>
      </div>
    </div>
  );
};

export default Second_section_b;
