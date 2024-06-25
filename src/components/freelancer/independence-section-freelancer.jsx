import Image from "next/image";
import preson from "../../../public/images/freelancer/preson.png";
function IndependenceFleelancer() {
  // const { t } = useTranslation();
  return (
    <div className="bg-[#faf6ac] my-6 me-16 ms-12 text-[24px] text-[#040404]  ">
      {/* next div */}
      <div className="position-relative relative content flex justify-between  ms-6">
        <div>
          <div className=" mt-44">
            <p className=" sm:text-4xl text-[#ff8400] ms-2 my-1 ">
              Your Path to
            </p>
            <h2 className="fontAbsolute sm:text-7xl mt-[-3px]  font-extrabold text-[#040404]">
              independence
            </h2>
          </div>
          <p className=" sm:text-[24px] mt-60 mb-4 me-2 ">
            Join Mhtaref.com and unlock a world of freelance opportunities!
          </p>
        </div>
        <Image
          className="me-[-50px] mt-3"
          src={preson}
          alt=""
          width={850}
          height={500}
        />
      </div>
    </div>
  );
}
export default IndependenceFleelancer;
