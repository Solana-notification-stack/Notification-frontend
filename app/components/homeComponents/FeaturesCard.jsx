import React from 'react';
import secure from '../../../assets/secureHome.svg';
import loan from '../../../assets/digitalloanHome.svg';
import database from '../../../assets/databasehome.svg';
import mobile from '../../../assets/homeMobile2.png';
import Image from 'next/image';
const FeaturesCard = () => {
  return (
    <div className="px-8 md:my-12">
      <section className="flex justify-center lg:gap-10 ">
        <div className="inline-flex flex-2 mt-8 flex-col items-start gap-8">
          <p className=" text-[color:var(--Primary,#FFF)] [font-family:Sora] text-4xl md:text-5xl font-semibold mb-5 md:w-[70%] leading-[140%]">
            Elevating Your Notification Experience
          </p>
          <div className="flex flex-col items-start gap-2.5 border-b-[color:var(--Border,rgba(47,70,106,0.10))] pb-8 border-b border-solid">
            <div className="flex gap-4">
              <div className="flex w-[60px] h-[60px] justify-center items-center [background:var(--Gray-1,#1A1D22)] p-4 rounded-[100px]">
                <Image src={loan} />
              </div>
              <span className="">
                <p className="text-[color:var(--Primary,#FFF)] [font-family:Sora] text-[32px] font-semibold leading-[140%] ">
                  {' '}
                  Cutting Edge Technology
                </p>
                <p className=" mt-6 w-[60%] shrink-0 text-[color:var(--Text,#CDCDCD)] [font-family:Sora] text-lg font-normal leading-[160%]">
                  Id eleifend quis urna tellus tempor facilisis at semper ac.
                  Interdum tortor ut ac.
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 border-b-[color:var(--Border,rgba(47,70,106,0.10))] pb-8 border-b border-solid">
            <div className="flex gap-4">
              <div className="flex w-[60px] h-[60px] justify-center items-center [background:var(--Gray-1,#1A1D22)] p-4 rounded-[100px]">
                <Image src={secure} />
              </div>
              <span className="">
                <p className="text-[color:var(--Primary,#FFF)] [font-family:Sora] text-[32px] font-semibold leading-[140%] ">
                  {' '}
                  Cutting Edge Technology
                </p>
                <p className=" mt-6 w-[60%] shrink-0 text-[color:var(--Text,#CDCDCD)] [font-family:Sora] text-lg font-normal leading-[160%]">
                  Id eleifend quis urna tellus tempor facilisis at semper ac.
                  Interdum tortor ut ac.
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 border-b-[color:var(--Border,rgba(47,70,106,0.10))] pb-8 border-b border-solid">
            <div className="flex gap-4">
              <div className="flex w-[60px] h-[60px] justify-center items-center [background:var(--Gray-1,#1A1D22)] p-4 rounded-[100px]">
                <Image src={database} />
              </div>
              <span className="">
                <p className="text-[color:var(--Primary,#FFF)] [font-family:Sora] text-[32px] font-semibold leading-[140%] ">
                  {' '}
                  Cutting Edge Technology
                </p>
                <p className=" mt-6 w-[60%] shrink-0 text-[color:var(--Text,#CDCDCD)] [font-family:Sora] text-lg font-normal leading-[160%]">
                  Id eleifend quis urna tellus tempor facilisis at semper ac.
                  Interdum tortor ut ac.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 mb-0 hidden lg:block self-end  ">
          <Image className="  z-[1000] " height={200} width={400} src={mobile} />
        </div>
      </section>
    </div>
  );
};

export default FeaturesCard;
