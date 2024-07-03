import Image from "next/image";
import budget from "../../../public/images/business/budget.svg";

const Second_section_b = () => {
  return (
    <div className=" text-center sm:text-start  sm:flex  items-center mx-4  sm:mx-12 min-h-[350px] my-20 ">
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image className="w-full h-full  sm:pe-6" src={budget} alt="" />
      </div>
      <div className="sm:w-1/2 rtl:hidden ">
        <div className="flex">
          <div className="w-1/6 sm:hidden"></div>{" "}
          <p className=" text-3xl sm:text-5xl fontAbsolute  text-[#74f6d7] sm:ps-20 sm:mb-1">
            Simplify{" "}
          </p>
          <p className=" text-start SamsungOne-bold  sm:text-3xl sm:ms-1 mt-[10px]  sm:mt-[20px]">
            budgeting and manage{" "}
          </p>
          <div className=" sm:hidden"></div>
        </div>
        <p className=" SamsungOne-bold sm:ps-20 sm:text-3xl sm:mt-[-10px]">
          with transparency
        </p>

        <p className=" text-[12px] sm:text-[18px] font-large mt-2 text-[#4f4f4f] sm:ps-20 ">
          Increase the cost Efficiency with our Project-Based Payments,
          Companies can hire the best freelancers on a per-project basis,
          avoiding the long-term financial commitment of a salaried employee.
        </p>
      </div>
      <div className="sm:w-1/2 ltr:hidden ">
        <div className="flex">
          <div className="w-1/6 sm:hidden"></div>{" "}
          <p className=" text-5xl sm:text-7xl d_ar ms-16 sm:ms-0 text-[#74f6d7] sm:ps-20 sm:mb-1">
            بساطة{" "}
          </p>
          <p className=" text-start  riyadBank sm:text-3xl sm:ms-1 mt-[10px]  sm:mt-[20px]">
            التخطيط المالي{" "}
          </p>
          <div className=" sm:hidden"></div>
        </div>
        <p className=" ps-15 sm:ps-20 riyadBank sm:text-3xl mt-[-10px] sm:mt-[-20px]">
          وإدارته بشفافية
        </p>

        <p className=" text-[12px] riyadBank sm:text-[18px] font-large mt-2 text-[#4f4f4f] sm:ps-20 ">
          زيادة كفاءة التكلفة مع دفعات المشاريع لدينا، يمكن للشركات توظيف أفضل
          العاملين المستقلين على أساس مشروعي، مما يجنبها التزامات مالية طويلة
          الأجل لموظف راتبي.
        </p>
      </div>
    </div>
  );
};

export default Second_section_b;
