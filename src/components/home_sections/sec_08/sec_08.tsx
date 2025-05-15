import MyButton from "@/components/global/my-button";
import SlickSlider from "@/components/global/slick-slider";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const Sec_08 = () => {
  const testimonial = [
    {
      id: 1,
      name: "Math",
      quote: `"Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!”`,
      stars: 5,
      role: "-  Accountant",
      src: "/img/sec_04/bannerOne_01.png",
    },
    {
      id: 2,
      name: "Math",
      quote: `"Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!”`,
      stars: 5,
      role: "-  Accountant",
      src: "/img/sec_04/bannerOne_01.png",
    },
    {
      id: 3,
      name: "Math",
      quote: `"Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!”`,
      stars: 4,
      role: "-  Accountant",
      src: "/img/sec_04/bannerOne_01.png",
    },
    {
      id: 4,
      name: "Math",
      quote: `"Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!”`,
      stars: 5,
      role: "-  Accountant",
      src: "/img/sec_04/bannerOne_01.png",
    },
  ];
  return (
    <div>
      <SlickSlider
        slidesToShow={3}
        items={testimonial}
        className="pr-5 "
        headClassName="gap-10 bg-white sm:py-20  py-10 md:px-20 sm:px-8 px-3"
        headerSection={
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <div className="lg:block hidden"></div>
            <div className="flex justify-center">
              <h2 className="text-xl sm:text-3xl font-medium text-[#655945]">
                Subjects We
                <span className="font-bold">Teach</span>
              </h2>
            </div>
            <div className="flex justify-end w-full">
              <MyButton
                title="View All"
                icon="mdi-light:arrow-right"
                className="w-[92px] h-[35px] text-xs lg:mx-0 mx-auto"
              />
            </div>
          </div>
        }
      >
        {testimonial.map((banner, i) => (
          <div key={i} className="sm:px-2 py-5">
            <div className="flex flex-col relative bg-white items-center py-14 px-5 gap-5  h-fit border rounded-lg">
              {/* images starts ==== */}

              <div className="absolute left-0 -top-4 flex justify-between w-full px-10">
                <div className="relative bg-white  w-14 h-14 border rounded-full ">
                  <Image
                    alt="testimonial"
                    src={`${banner.src}`}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* quote */}
                <div className="relative  w-10 h-10  ">
                  <Image
                    alt="testimonial"
                    src={`/icons/quote.png`}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* images ends */}

              <div className="">
                <p className="text-black text-sm leading-6 capitalize ">
                  {banner.quote}
                </p>
              </div>

              {/* last footer */}
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Icon
                      key={num}
                      icon="material-symbols:star"
                      className={`text-lg ${
                        num <= banner.stars
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <b className="text-sm text-main">{banner.name}</b>
                  <span className="text-xs">{banner.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Sec_08;
