import Image from "next/image";
import layersB from "../../../public/images/business/layersB.svg";
import btns from "../../../public/images/business/btns.svg";
import rbtn from "../../../public/images/business/rbtn.svg";
import mbtn from "../../../public/images/business/mbtn.svg";
import lbtn from "../../../public/images/business/lbtn.svg";

const First_section_B = () => {
  return (
    <div className="  sm:flex-row flex flex-col-reverse text-[20px]   items-center mx-4 sm:mx-12 min-h-[350] my-20 ">
      <div className="sm:w-1/2  ">
        <div className="flex">
          <p className=" SamsungOne-bold sm:text-2xl">Find the best</p>
          <p className="  text-5xl fontAbsolute    text-[#74f6d7] ps-2 ">
            freelance
          </p>
        </div>
        <p className=" SamsungOne-bold sm:text-2xl mt-[-10px]">
          services for your business
        </p>
        <div className=" w-1/3 sm:w-full flex gap-1 my-1  ">
          <Image src={rbtn} alt=""></Image>
          <Image src={mbtn} alt=""></Image>
          <Image src={lbtn} alt=""></Image>
        </div>

        <Image className=" w-1/3 sm:w-full h-full " src={btns} alt="" />
        <p className="  text-[12px] sm:text-[18px] text-center sm:text-start   mt-2 text-[#4f4f4f] sm:pe-20 ">
          Find the best talent and experience to grow your project profes,
          determine your rates, and select projects that align with your skills
          and interests. Embrace the freelance lifestyle on your own terms.
        </p>
      </div>
      <div className="sm:w-1/2 ">
        <Image className="w-full h-full sm:ps-6" src={layersB} alt="" />
      </div>
    </div>
  );
};

export default First_section_B;
