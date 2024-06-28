import Image from "next/image";
import preson from "../../../public/images/freelancer/preson.png";
function IndependenceFleelancer() {
  // const { t } = useTranslation();
  return (
    <div className="bg-[#faf6ac]  my-6 ms-4 me-4 sm:me-16 sm:ms-12 text-[24px] text-[#040404] sm:rounded-2xl  ">
      <div className="sm:position-relative sm:relative content flex flex-col sm:flex-row sm:justify-between  ms-6">
        <div>
          <div className=" mt-6 sm:mt-44 text-center sm:text-start ">
            <p className=" SamsungOne-bold text-3xl sm:text-4xl text-[#ff8400] sm:ms-2 sm:my-1 tracking-wide ">
              Your Path to
            </p>
            <h2 className="fontAbsolute text-6xl sm:text-7xl sm:mt-[-3px] font-extrabold text-[#040404] sm:tracking-wide">
              independence
            </h2>
          </div>
          <p className=" SamsungOne-bold text-[12px] sm:text-[18px] mt-2 sm:mt-64 mb-4 sm:me-2 mx-12 sm:mx-auto text-center sm:text-start ">
            Join Mhtaref.com and unlock a world of freelance opportunities!
          </p>
        </div>
        <Image
          className=" sm:w-4/5 sm:mt-3 ms-[10px] sm:ms-0  "
          src={preson}
          alt=""
        />
      </div>
    </div>
  );
}
export default IndependenceFleelancer;
