import Image from "next/image";
import preson from "../../../public/images/freelancer/preson.png";
function IndependenceFleelancer() {
  // const { t } = useTranslation();
  return (
    <div className="bg-[#faf6ac] my-6 ms-3 me-6 sm:me-16 sm:ms-12 text-[24px] text-[#040404] rounded-2xl  ">
      <div className="sm:position-relative sm:relative content flex sm:justify-between  ms-6">
        <div>
          <div className=" mt-16 sm:mt-44">
            <p className=" text-[15px] sm:text-4xl text-[#ff8400] sm:ms-2 my-1 tracking-wide ">
              Your Path to
            </p>
            <h2 className="fontAbsolute text-2xl sm:text-7xl sm:mt-[-3px] font-extrabold text-[#040404] tracking-wide">
              independence
            </h2>
          </div>
          <p className="hidden sm:block text-sm sm:text-[18px] mt-28 sm:mt-60 mb-4 me-2 ">
            Join Mhtaref.com and unlock a world of freelance opportunities!
          </p>
        </div>
        <Image className=" ms-[-20px]  sm:me-[-50px]  mt-3 w-4/5  "  src={preson} alt="" />
      </div>
    </div>
  );
}
export default IndependenceFleelancer;
