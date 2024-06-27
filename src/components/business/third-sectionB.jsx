import Image from "next/image";
import budget from "../../../public/images/business/budget.svg";

const Third_section_B = () => {
  return (
    <div className="sm:flex sm:flex-row flex flex-col-reverse  items-center  sm:mx-12 min-h-[400px] my-20 ">
      <div className="sm:w-1/2  ">
        <div className="flex">
          <p className="  text-6xl fontAbsolute    text-[#74f6d7]  ">
            Increase
          </p>
          <p className=" sm:text-2xl mt-5 ps-1">
            Productivity & Scalability for{" "}
          </p>
        </div>
        <p className=" sm:text-2xl mt-[-15px]">outstsnding growth</p>
        <p className="   mt-2 text-[#4f4f4f] pe-20 ">
          Quickly scale your workforce up or down with Mhtaref. With Mhtaref,
          you can scale your workforce up or down with Mhtaref. Find the best
        </p>
        <p className="   mt-2 text-[#4f4f4f] pe-20 ">
          talent and experience to grow your project profes, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms.
        </p>
        <p className="   mt-2 text-[#4f4f4f] pe-20 ">
          {" "}
          and select projects that align with your skills and interests. Embrace
          the freelance lifestyle on your own terms.
        </p>
      </div>
      <div className="sm:w-1/2 ">
        <Image
          className="w-full h-full ps-6"
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
