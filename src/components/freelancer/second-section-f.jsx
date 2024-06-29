import Image from "next/image";
import layersf from "../../../public/images/freelancer/layersf.svg";

const Second_section_f = () => {
  return (
    <div className="  sm:flex-row  sm:flex items-center mx-4  sm:mx-12 min-h-[350px] my-10 sm:my-20 ">
      <div className="sm:w-1/2 mx-6 sm:mx-auto">
        <Image className="w-full h-full sm:pe-6" src={layersf} alt="" />
      </div>
      <div className="sm:w-1/2  ">
        <h2 className=" sm:text-2xl SamsungOne-bold text-[16px] text-center sm:text-start mt-5 sm:ps-20 mb-1">
          Flexibility & Independence
        </h2>
        <p className="  text-[12px] sm:text-[18px] text-center sm:text-start mt-2 text-[#4f4f4f] sm:ps-20 ">
          Enjoy the freedom of choosing when, where, and how you work.
          Mhtaref.com enables you to set your own schedule, determine your
          rates, and select projects that align with your skills and interests.
          Embrace the freelance lifestyle on your own terms.
        </p>
      </div>
    </div>
  );
};

export default Second_section_f;
