import Image from "next/image";
import br from "../../../public/images/freelancer/br.svg";

const Forth_section = () => {
  return (
    <div className="sm:flex  items-center mx-4  sm:mx-12 min-h-[400px] my-20 ">
      <div className="sm:w-1/2 ">
        <Image className="w-full h-full sm:pe-6" src={br} alt="" />
      </div>
      <div className="sm:w-1/2  ">
        <h2 className=" sm:text-2xl mt-5 sm:ps-20 mb-1">Professional Development</h2>
        <p className="  font-large mt-2 text-[#4f4f4f] sm:ps-20 ">
          Mhtaref.com offers resources, tutorials, and expert advice to help you
          enhance your freelance skills and grow professionally. Access valuable
          insights, stay updated on industry trends, and sharpen your expertise
          to stay competitive in the ever-evolving freelance landscape.
        </p>
      </div>
    </div>
  );
};

export default Forth_section;
