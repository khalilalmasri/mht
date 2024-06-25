import Image from "next/image";
import layersB from "../../../public/images/business/layersB.svg";
import btns from "../../../public/images/business/btns.svg";
import rbtn from "../../../public/images/business/rbtn.svg";
import mbtn from "../../../public/images/business/mbtn.svg";
import lbtn from "../../../public/images/business/lbtn.svg";

const First_section_B = () => {
  return (
    <div className="sm:flex   items-center  sm:mx-12 min-h-[400px] my-20 ">
      <div className="sm:w-1/2  ">
        <div className="flex">
          <p className=" sm:text-2xl">Find the best</p>
          <p className="  text-4xl fontAbsolute    text-[#74f6d7] ps-2 ">
            freelance
          </p>
        </div>
        <p className=" sm:text-2xl mt-[-15px]">services for your business</p>
        <div className="flex gap-2 mb-1">
          <Image src={rbtn} alt=""></Image>
          <Image src={mbtn} alt=""></Image>
          <Image src={lbtn} alt=""></Image>
        </div>
        <Image className="w-full h-full" src={btns} alt="" />
        <p className="   mt-2 text-[#4f4f4f] pe-20 ">
          Find the best talent and experience to grow your project profes,
          determine your rates, and select projects that align with your skills
          and interests. Embrace the freelance lifestyle on your own terms.
        </p>
      </div>
      <div className="sm:w-1/2 ">
        <Image
          className="w-full h-full ps-6"
          src={layersB}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default First_section_B;
