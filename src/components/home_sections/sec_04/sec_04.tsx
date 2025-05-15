import MyButton from "@/components/global/my-button";
import SlickSlider from "@/components/global/slick-slider";
import Image from "next/image";
import React from "react";

const Sec_04 = () => {
  const bannerOne = [
    {
      id: 1,
      name: "English Grammar",
      para: "Master the building blocks of writing and communication.",
      src: "/img/sec_04/bannerOne_01.png",
      btn: <MyButton title="Read More" />,
    },
    {
      id: 2,
      name: "Craft Classes",
      para: "Unleash creativity with hands-on projects and artistic fun.",
      src: "/img/sec_04/bannerOne_02.png",
      btn: <MyButton title="Read More" />,
    },
    {
      id: 3,
      name: "Art and Painting",
      para: "Master the building blocks of writing and communication.",
      src: "/img/sec_04/bannerOne_03.png",
      btn: <MyButton title="Read More" />,
    },
    {
      id: 4,
      name: "Art and Painting",
      para: "Master the building blocks of writing and communication.",
      src: "/img/sec_04/bannerOne_03.png",
      btn: <MyButton title="Read More" />,
    },
  ];

  const bannerTwo = [
    {
      id: 1,
      name: "Math",

      src: "/img/sec_04/bannerOne_01.png",
    },
    {
      id: 2,
      name: "Physics",
      src: "/img/sec_04/bannerOne_02.png",
    },
    {
      id: 3,
      name: "Chemistry",

      src: "/img/sec_04/bannerOne_03.png",
    },
    {
      id: 4,
      name: "Science",

      src: "/img/sec_04/bannerOne_03.png",
    },
  ];

  return (
    <div className="flex flex-col gap-20 md:px-20 sm:px-8 px-3">
      <SlickSlider
        slidesToShow={3}
        items={bannerOne}
        className="pr-5"
        headClassName="gap-10 "
        headerSection={
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <div className="lg:block hidden"></div>
            <div className="flex justify-center">
              <h2 className="text-xl sm:text-3xl font-medium text-[#655945]">
                Programs we offer <span className="font-bold">or Kids</span>
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
        {bannerOne.map((banner, i) => (
          <div key={i} className="sm:px-3 py-5">
            <div className="relative rounded-2xl bg-subHeader px-7 py-8 h-full overflow-hidden flex justify-between items-center">
            <div className="w-[100px] h-full absolute right-0 -top-4 bottom-0 ">
                <Image
                  src={banner.src}
                  fill
                  alt="banner image"
                  className="object-contain "
                />
              </div>
              <div className="flex flex-col gap-1 text-main w-2/3">
                <b>{banner.name}</b>
                <p>{banner.para}</p>
              </div>
              
            </div>
          </div>
        ))}
      </SlickSlider>

      {/* slider 2 */}
      <SlickSlider
        slidesToShow={6}
        items={bannerOne}
        className="pr-5 "
        headClassName="gap-10 bg-[#F9F7F4] py-6"
        headerSection={
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <div className="lg:block hidden"></div>
            <div className="flex justify-center">
              <h2 className="text-xl sm:text-3xl font-medium text-[#655945]">
                Subjects We <span className="font-bold">Teach</span>
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
        {bannerTwo.map((banner, i) => (
          <div key={i} className="sm:px-2 ">
            <div className="flex flex-col bg-subHeader items-center p-1 gap-2">
              <div className="relative h-[118px] rounded-xl w-full bg-[#8A1538]"></div>
              <span className="text-main capitalize">{banner.name}</span>
            </div>
          </div>
        ))}
      </SlickSlider>

      {/* <SnapSlider
        headClassName="gap-10"
        slidesToShow={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
        headerSection={
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <div className="lg:block hidden"></div>
            <div className="flex justify-center">
              <span className="text-xl capitalize text-[#655945]">
                Programs we offer <b>for Kids</b>
              </span>
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
        {bannerOne.map((item, i) => (
          <div
          className="bg-subHeader overflow-visible rounded-2xl px-7 py-6 h-full flex items-center justify-between relative"
            key={i}
          >
            <div className="flex flex-col gap-1 text-main w-2/3">
              <b>{item.name}</b>
              <p>{item.para}</p>
              <MyButton
              title="View All"
              icon="mdi-light:arrow-right"
              className="w-[92px] h-[35px] text-xs lg:mx-0 mx-auto"
            />
            </div>
            <div className="relative right-0 -top-6 w-[100px] h-[120px] z-10">
  <Image
    src={item.src}
    fill
    alt="image"
    className="object-contain"
  />
</div>

          </div>
        ))}
      </SnapSlider> */}
    </div>
  );
};

export default Sec_04;
