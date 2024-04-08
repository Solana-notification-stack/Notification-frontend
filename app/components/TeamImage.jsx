"use client"

import React from "react";
export const TeamImage = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[24px] relative">
      <div className="relative w-[364px] h-[393px] rounded-[30px] overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(131.26,172.08,240.11,0.2)_0.27%,rgba(131,172,240,0)_100%)] bg-[url(/image.png)] bg-cover bg-[50%_50%]">
        <div className="relative w-[701px] h-[467px] top-[-18px] left-[-72px] bg-gray-1">
          <div className="relative w-[450px] h-[412px] top-[9px] left-[29px] [background:linear-gradient(180deg,rgba(5,5,5,0)_0%,rgb(5,5,5)_100%)]" />
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-primary text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] whitespace-nowrap [font-style:var(--heading-4-font-style)]">
          Ronak Gupta
        </div>
        {/* <img className="relative w-[364px] h-px object-cover" alt="Line" src="line-1.svg" /> */}
        <div style={{background:" w-[364px] h-[1px] linear-gradient(90deg, rgba(47, 70, 106, 0.10) -2.94%, #2F466A 49.17%, rgba(47, 70, 106, 0.10) 102.37%);"}}></div>
        <div className="relative w-fit font-body-1 font-[number:var(--body-1-font-weight)] text-text text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
          Developer
        </div>
      </div>
    </div>
  );
};
