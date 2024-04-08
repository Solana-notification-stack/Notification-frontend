"use client"

import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
export const TeamImage = ({name,desc,image,github,twitter}) => {
  return (
<div className="w-96 border-gray-400 border-2  rounded-[20px] flex flex-col p-10 justify-center space-y-5">
    <img src={image} className="rounded-[20px]"/>
    <div className="text-white text-xl ml-4">{name}</div>
    <div className="text-[#CDCDCD] text-md ml-4">{desc}</div>
    <div className=" ml-4 flex items-center space-x-4">
   {  github && <Link href={github}>
      <IoLogoGithub className="w-8 h-8"/>
      </Link> }
      {twitter &&<Link href={twitter}>
      <IoLogoTwitter className="w-8 h-8"/>
      </Link> }
  
       
    </div>

   

</div>
  );
};
