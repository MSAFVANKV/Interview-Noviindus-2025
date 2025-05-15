import {
  ServiceBanner01SvgIcon,
  ServiceBanner02SvgIcon,
  ServiceBanner03SvgIcon,
  ServiceBanner04SvgIcon,
} from "@/components/global/icons";
import MyButton from "@/components/global/my-button";
import Image from "next/image";
import React, { useState } from "react";
import BookingModal from "./booking-modal";

const Sec_01 = () => {
  const [openModal, setOpenModal] = useState(false)
  const personLogos = [
    "/img/sec_01/pearson-logo 2.png",
    "/img/sec_01/pearson-logo 10.png",
    "/img/sec_01/pearson-logo 6.png",
  ];
  const serviceBanners = [
    {
      id: 1,
      name: "Personal Attention",
      src: <ServiceBanner01SvgIcon />,
    },
    {
      id: 2,
      name: "Growth Mindset",
      src: <ServiceBanner02SvgIcon />,
    },
    {
      id: 3,
      name: "Skill Development",
      src: <ServiceBanner03SvgIcon />,
    },
    {
      id: 4,
      name: "Passionate Teaching",
      src: <ServiceBanner04SvgIcon />,
    },
  ];
  return (
    <section className=" w-full flex flex-col justify-center items-center sm:py-4 py-5">
      <div className="flex flex-col w-full text-center">
        <h1 className="text-4xl text-main font-bold">
          Personalized One-to-One
        </h1>
        <h2 className="text-4xl text-main">Tutoring at Our Center</h2>
      </div>
      {/*  */}
      <div className="flex justify-between w-full h-[500px] md:flex-row flex-col gap-5">
        <div className="relative w-full h-full">
          <Image
            src={`/img/sec_01/home_01.png`}
            fill
            alt="left-home-img"
            className="w-full h-full object-contain aspect-square animate-float"
          />
        </div>
        {/* logos */}
        <div className="flex flex-col justify-around gap-5 w-full">
          {/* button */}
          <div className="flex items-center justify-center w-full">
            <MyButton 
            title="Book a Free Demo Class"
            onClick={()=>{
              setOpenModal(true)
            }}
            />
          </div>

          <div className="flex flex-col items-center  gap-4 w-full">
            <h3 className="text-lg text-main capitalize font-semibold">
              Curriculums we offer:
            </h3>
            <div className="flex gap-2 w-full justify-between">
              {personLogos.map((img, index) => (
                <div className={`relative h-16 w-[110px]`} key={index}>
                  <Image
                    src={`${img}`}
                    fill
                    alt="left-home-img"
                    className="w-full h-full object-contain aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="relative w-full h-full">
          <Image
            src={`/img/sec_01/home_02.png`}
            fill
            alt="left-home-img"
            className="w-full h-full object-contain aspect-square animate-float"
          />
        </div>
      </div>
      {/* services banner */}
      <div className="py-5 w-full grid md:grid-cols-4 grid-cols-2 bg-subHeader gap-4">
        {serviceBanners.map((banner, index) => (
          <div
            className={`${
             index  !== serviceBanners.length - 1
                ? "border-r-2 border-r-main"
                : ""
            } flex items-center justify-center gap-3`}
            key={index}
          >
           
            <div className="">
            {banner.src}
            </div>
            <span className="text-main">{banner.name}</span>
          </div>
        ))}
      </div>
        {
          openModal && (
          <BookingModal 
          setOpenModal={setOpenModal}
          />      
          )
        }
  
    </section>
  );
};

export default Sec_01;
