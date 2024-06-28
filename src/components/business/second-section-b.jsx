import Image from "next/image";
import budget from "../../../public/images/business/budget.svg";

const Second_section_b = () => {
  return (
    <div className="  sm:flex   items-center  sm:mx-12 min-h-[400px] my-20 ">
      <div className="sm:w-1/2 ">
        <Image className="w-full h-full sm:pe-6" src={budget} alt="" />
      </div>
      <div className="sm:w-1/2  ">
        <div className="flex">
          {" "}
          <p className=" text-3xl sm:text-5xl fontAbsolute  text-[#74f6d7] sm:ps-20 mb-1">
            Simplify{" "}
          </p>
          <p className=" SamsungOne-bold text-3xl ms-1  mt-[20px]">
            budgeting and manage{" "}
          </p>
        </div>
        <p className=" SamsungOne-bold sm:ps-20 text-3xl mt-[-10px]">
          with transparency
        </p>

        <p className="  font-large mt-2 text-[#4f4f4f] ps-20 ">
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
