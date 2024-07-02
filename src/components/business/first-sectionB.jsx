import Image from "next/image";
import layersB from "../../../public/images/business/layersB.svg";
import btns from "../../../public/images/business/btns.svg";
import rbtn from "../../../public/images/business/rbtn.svg";
import mbtn from "../../../public/images/business/mbtn.svg";
import lbtn from "../../../public/images/business/lbtn.svg";

const First_section_B = () => {
  return (
    <div className=" text-center sm:text-start   sm:flex-row flex flex-col-reverse text-[17px]  items-center mx-4 sm:mx-12 min-h-[360] my-20 ">
      <div className="sm:w-1/2">
        <div className="text-center sm:text-start">
          <div className="flex ">
            <div className="w-1/5 sm:hidden"></div>
            <p className=" rtl:hidden SamsungOne-bold sm:text-2xl">
              Find the best
            </p>
            <p className=" ltr:hidden riyadBank text-sm sm:text-2xl">
              العثور على أفضل خدمات
            </p>
            <p className=" rtl:hidden text-3xl sm:text-5xl fontAbsolute  text-[#74f6d7] ps-2 ">
              freelance
            </p>{" "}
            <p className=" ltr:hidden text-base sm:text-5xl riyadBank  text-[#74f6d7] ps-2 ">
              العمل الحر
            </p>{" "}
            <div className="w-1/6 sm:hidden"></div>
          </div>
          <p className=" rtl:hidden riyadBank  sm:text-2xl mt-[-10px]">services for your business</p>
          <p className=" ltr:hidden riyadBank text-sm sm:text-2xl sm:mt-[-10px]">لشركتك</p>
        </div>
        <div className="p-1 sm:p-0">
          <div className=" w-1/3 sm:w-full flex gap-1 my-1  ">
            <Image src={rbtn} alt=""></Image>
            <Image src={mbtn} alt=""></Image>
            <Image src={lbtn} alt=""></Image>
          </div>

          <Image className=" w-full  " src={btns} alt="" />
        </div>
        <p className=" rtl:hidden text-[12px] sm:text-[18px] text-center sm:text-start   mt-2 text-[#4f4f4f] sm:pe-20 ">
          Find the best talent and experience to grow your project
          professionally and efficiently. Whenever you need without any
          obligations. Tap into a vast pool of freelancers with diverse
          experiences and specialized skills. Whether you need expertise for
          short-term projects or niche tasks, Mhtaref connects you with the
          right talent to get the job done.
        </p>
        <p className=" ltr:hidden text-[12px] riyadBank sm:text-[18px] text-center sm:text-start   mt-2 text-[#4f4f4f] sm:pe-20 ">
          ابحث عن أفضل المواهب والخبرات لتطوير مشروعك بشكل احترافي وفعال. في أي
          وقت تحتاج، دون أية التزامات. استفد من مجموعة واسعة من أصحاب الخبرات
          والمهارات المتخصصة. سواء كنت بحاجة إلى خبرة لمشاريع قصيرة الأمد أو
          مهام متخصصة، يقوم محترف بربطك بأفضل الكفاءات لإنجاز المهمة.
        </p>
      </div>
      <div className="sm:w-1/2 mx-6 sm:mx-auto ">
        <Image className="w-full h-full sm:ps-6" src={layersB} alt="" />
      </div>
    </div>
  );
};

export default First_section_B;
