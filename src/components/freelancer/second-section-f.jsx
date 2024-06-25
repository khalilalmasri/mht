import Image from "next/image";
import layersf from "../../../public/images/freelancer/layersf.svg";

const Second_section_f = () => {
  return (
    <div className="sm:flex   items-center  sm:mx-12 min-h-[400px] my-20 ">
      <div className="sm:w-1/2 ">
        <Image className="w-full h-full pe-6" src={layersf} alt="" />
      </div>
      <div className="sm:w-1/2  ">
        <h2 className=" sm:text-2xl  ps-20 mb-1">Flexibility & Independence</h2>
        <p className="  font-large mt-2 text-[#4f4f4f] ps-20 ">
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
