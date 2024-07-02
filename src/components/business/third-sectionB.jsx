import Image from "next/image";
import budget from "../../../public/images/business/budget.svg";

const Third_section_B = () => {
  return (
    <div className=" text-center sm:text-start sm:flex sm:flex-row flex flex-col-reverse  items-center mx-4 sm:mx-12 min-h-[350px] my-20 ">
      <div className="sm:w-1/2 rtl:hidden ">
        <div className="flex">
          <div className="w-1/12 sm:hidden"></div>
          <p className=" text-4xl sm:text-6xl fontAbsolute  text-[#74f6d7]  ">
            Increase
          </p>
          <p className=" SamsungOne-bold sm:text-2xl mt-3 sm:mt-5 ps-1">
            Productivity & Scalability for{" "}
          </p>
        </div>
        <p className="  SamsungOne-bold sm:text-2xl mt-[-15px]">
          outstsnding growth
        </p>
        <p className=" text-[12px] sm:text-[18px]  mt-2 text-[#4f4f4f] sm:pe-20 ">
          Quickly scale your workforce up or down with Mhtaref. With Mhtaref,
          you can quickly find the right talent ready to hit the ground running.
          <br />
          Freelancers on Mhtaref specialize in specific tasks or projects,
          ensuring high-quality, efficient work thanks to their concentrated
          expertise and experience.
          <br /> Mhtaref provides the flexibility you need to manage workloads
          and meet deadlines efficiently.
        </p>
      </div>
      <div className="sm:w-1/2 ltr:hidden riyadBank   ">
        <div className="flex">
          <div className="w-1/12 sm:hidden"></div>
          <p className=" text-4xl sm:text-6xl   text-[#74f6d7]  ">زيادة</p>
          <p className="  sm:text-2xl mt-3 sm:mt-5 ps-1">الإنتاجية والتوسع </p>
        </div>
        <p className="   sm:text-2xl sm:ms-28 mt-[-15px]">لنمو متميز.</p>
        <p className=" text-[12px] sm:text-[18px]  mt-2 text-[#4f4f4f] sm:pe-20 ">
          قم بتوسيع قوى العمل الخاصة بك بسرعة مع محترف. من خلال محترف، يمكنك
          العثور بسرعة على المواهب المناسبة جاهزة للانطلاق بالعمل.
          <br />
          يتخصص أصحاب العمل الحر على محترف في مهام أو مشاريع محددة، مما يضمن عمل
          ذو جودة عالية وكفاءة بفضل خبراتهم.
          <br /> يوفر محترف المرونة التي تحتاجها لإدارة الأعباء العملية والوفاء
          بالمواعيد النهائية.
        </p>
      </div>
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image
          className="w-full h-full sm:ps-6"
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
