import Image from "next/image";
import React from "react";
import heroImg from "@/assets/heroImg.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center container mx-auto px-24 py-16 bg-[#131313]/5 rounded-[15px] mt-14">
      <div className="space-y-10">
        <h1 className="text-[45px] font-bold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="text-white bg-[#23BE0A] py-3 px-6 rounded-[5px] font-bold text-[13px] cursor-pointer">
          View The List
        </button>
      </div>
      <div>
        <Image src={heroImg} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
