import Image from "next/image";
import budget from "../../../public/images/business/budget.svg";

const Third_section_B = () => {
  return (
    <div className=" text-center sm:text-start sm:flex sm:flex-row flex flex-col-reverse  items-center mx-4 sm:mx-12 min-h-[350px] my-20 ">
      <div className="sm:w-1/2  ">
        <div className="flex">
          <div className="w-1/12 sm:hidden"></div>
          <p className=" text-4xl sm:text-6xl fontAbsolute  text-[#74f6d7]  ">
            Increase
          </p>
          <p className=" SamsungOne-bold sm:text-2xl mt-3 sm:mt-5 ps-1">
            Productivity & Scalability for{" "}
          </p>
        </div>
        <p className="  SamsungOne-bold sm:text-2xl mt-[-15px]">outstsnding growth</p>
        <p className=" text-[12px] sm:text-[18px]  mt-2 text-[#4f4f4f] sm:pe-20 ">
          Quickly scale your workforce up or down with Mhtaref. With Mhtaref,
          you can scale your workforce up or down with Mhtaref. Find the best
        </p>
        <p className="  text-[12px] sm:text-[18px]  text-[#4f4f4f] sm:pe-20 ">
          talent and experience to grow your project profes, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms.
        </p>
        <p className="  text-[12px] sm:text-[18px]  text-[#4f4f4f] sm:pe-20 ">
          {" "}
          and select projects that align with your skills and interests. Embrace
          the freelance lifestyle on your own terms.
        </p>
      </div>
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image
          className="w-full h-full sm:ps-6"
          src={budget}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Third_section_B;
