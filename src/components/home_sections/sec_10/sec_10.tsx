import MyButton from "@/components/global/my-button";
import Image from "next/image";
import React from "react";

const Sec_10 = () => {
  const blogBanner = [
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
    <section className="sm:py-20  py-10 md:px-20 sm:px-8 px-3 space-y-7">
      <div className="flex justify-between">
        <h2 className="text-xl sm:text-3xl font-medium text-[#655945] ">
          Our Latest <span className="font-bold"> Blog Posts </span>
        </h2>

        <MyButton
          title="View All"
          icon="mdi-light:arrow-right"
          className="w-[92px] h-[35px] text-xs lg:mx-0 mx-auto"
        />
      </div>
      <ul className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {blogBanner.map((blog, index) => (
          <li
            className=" rounded-xl shadow overflow-hidden flex flex-col "
            key={index}
          >
            <div className="relative h-[200px] w-full">
              <Image
                alt="testimonial"
                src={`/properities/sec07_01.jpg`}
                fill
                className="w-full h-full object-cover "
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className="font-bold text-[#655945] ">{blog.name}</span>
              <span className="text-xs text-[#65594599] ">{blog.subHead}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sec_10;
