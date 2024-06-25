import Image from "next/image";
import build from "../../../public/images/freelancer/build.svg";

const Thierd_section = () => {
  return (
    <div className="sm:flex   items-center  sm:mx-12 min-h-[400px] my-20 ">
      <div className="sm:w-1/2  ">
        <h2 className=" sm:text-2xl mb-1">
        Ease of Starting and Operating
        </h2>
        <p className=" font-large mt-2 text-[#4f4f4f] pe-20 ">
          Enjoy the freedom of choosing when, where, and how you work.
          Mhtaref.com enables you to set your own schedule, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms.
        </p>
      </div>
      <div className="sm:w-1/2 ">
        <Image
          className="w-full h-full ps-6"
          src={build}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Thierd_section;
