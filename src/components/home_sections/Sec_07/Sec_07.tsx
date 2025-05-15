import MyButton from "@/components/global/my-button";
import SlickSlider from "@/components/global/slick-slider";
import Image from "next/image";
import React from "react";

const Sec_07 = () => {
  const examBanner = [
    {
      id: 1,
      name: "IELTS Preparation ",
      subHead:
        "Focus on all four sections: Listening, Reading, Writing, and Speaking.",

      src: "/img/sec_04/bannerOne_01.png",
    },
    {
      id: 2,
      name: "TOEFL Mastery",
      subHead:
        "Comprehensive coverage of Reading, Listening, Speaking, and Writing sections.",
      src: "/img/sec_04/bannerOne_02.png",
    },
    {
      id: 3,
      name: "PTE Academic Course",
      subHead:
        "Time-saving strategies and practice tests with instant feedback.",

      src: "/img/sec_04/bannerOne_03.png",
    },
    {
      id: 4,
      name: "Cambridge English (CAE)",
      subHead:
        "Preparation for high-level English skills in Listening, Speaking, Reading, and Writing.",

      src: "/img/sec_04/bannerOne_03.png",
    },
  ];
  return (
    <section className="">
      <SlickSlider
        slidesToShow={4}
        items={examBanner}
        className="pr-5 "
        headClassName="gap-10 bg-[#F9F7F4] sm:py-20  py-10 md:px-20 sm:px-8 px-3"
        headerSection={
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <div className="lg:block hidden"></div>
            <div className="flex ">
              <h2 className="text-xl sm:text-3xl font-medium text-[#655945] flex ">
                Master in <span className="font-bold">IELTS, TOEFL Exams</span>
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
        {examBanner.map((banner, i) => (
          <div key={i} className="sm:px-2 py-5">
            <div className="flex flex-col relative bg-subHeader cursor-pointer group py-3 px-3 gap-5  h-fit border rounded-lg">
              {/* images starts ==== */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-main -z-40 rounded-lg rotate-3 group-hover:rotate-0 duration-300 transition-all"/>

              {/* images ends */}
              <div className="relative w-full h-[180px] overflow-hidden rounded-xl">
                <Image
                  alt="testimonial"
                  src={`/properities/sec07_01.jpg`}
                  fill
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="flex flex-col">
                <p className=" text-lg text-main leading-6 capitalize ">
                  {banner.name}
                </p>
                <p className=" text-xs  leading-4 capitalize ">
                  {banner.subHead}
                </p>
              </div>

              {/* last footer */}
            </div>
          </div>
        ))}
      </SlickSlider>
    </section>
  );
};

export default Sec_07;
