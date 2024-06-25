"use client";
import { useState } from "react";
import Image from "next/image";
import traingle from "../../public/icons/traingle.svg";
import Link from "next/link";

function Switch_section() {
  const [isFreelancer, setIsFreelancer] = useState(false);
  console.log("isFreelancer", isFreelancer);
  return (
    <div className=" flex items-center justify-between   ">
      <Image className="px-1 " src={traingle} alt="" width={20} height={20} />
      <Link
        onClick={() => setIsFreelancer(true)}
        href=""
        style={{
          background: isFreelancer ? "#74f6d7" : "white",
          color: isFreelancer ? "white" : "black",
          height: isFreelancer ? "30px" : "auto",
        }}
      >
        for Freelancers
      </Link>

      <Image className="px-1 " src={traingle} alt="" width={20} height={20} />

      <Link
        onClick={() => setIsFreelancer(false)}
        href=""
        style={{
          background: !isFreelancer ? "#74f6d7" : "white",
          color: !isFreelancer ? "white" : "black",
          height: !isFreelancer ? "30px" : "auto",
        }}
      >
        for Business
      </Link>
    </div>
  );
}

export default Switch_section;
