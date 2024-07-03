const HrB = () => {
  return (
    <div className=" SamsungOne-bold m-3 sm:my-12 sm:me-16 sm:ms-12  sm:text-4xl text-[#040404] flex">
      <div className="w-full  rtl:sm:w-1/3 sm:w-1/2">
        <h1 className="rtl:hidden mb-2">
          Your development, expansion and success partner.{" "}
        </h1>
        <h1 className=" ltr:hidden mb-2 riyadBank text-2xl ">
          شريكك في التطوير،{" "}
        </h1>
        <h1 className=" ltr:hidden mb-2 riyadBank text-2xl ">
           التوسع والنجاح .{" "}
        </h1>
        {/* <h1 className="my-2"> expansion and </h1> */}
        {/* <h1 className="my-2"> success partner. </h1> */}
      </div>
      <div className="w-full  sm:ms-5 sm:my-4 ">
        {" "}
        <div className="h-full "> </div>
        <hr className="border-[1px] sm:border-2 mt-[-15px] sm:mt-0  sm:ms-[-20px] border-[#040404] " />
      </div>
    </div>
  );
};

export default HrB;
