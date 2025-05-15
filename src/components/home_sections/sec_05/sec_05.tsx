import React from "react";
import Image from "next/image";

const students = [
  {
    src: "/img/sec_05/std_01.svg",
    marks: "A+",
    style: "top-[5%] left-[10%] w-20",
    width:60,
    height:60
  },
  {
    src: "/img/sec_05/std_02.svg",
    marks: "A+",
    style: "top-[20%] left-[15%] w-24",
    width:80,
    height:80
  },
  {
    src: "/img/sec_05/std_03.svg",
    marks: "A+",
    style: "top-[25%] left-[40%] w-20",
    width:60,
    height:60
  },
  {
    src: "/img/sec_05/std_04.svg",
    marks: "A+",
    style: "top-[10%] left-[60%] w-20",
    width:80,
    height:80
  },
  {
    src: "/img/sec_05/std_07.svg",
    marks: "A+",
    style: "top-[30%] left-[75%] w-20",
    width:60,
    height:60
  },
  {
    src: "/img/sec_05/std_06.svg",
    marks: "A+",
    style: "top-[60%] left-[15%] w-24",
    width:80,
    height:80
  },
  {
    src: "/img/sec_05/std_07.svg",
    marks: "A+",
    style: "top-[55%] left-[35%] w-20",
    width:60,
    height:60
  },
  {
    src: "/img/sec_05/std_08.svg",
    marks: "A+",
    style: "top-[50%] left-[60%] w-20",
    width:60,
    height:60
  },
  {
    src: "/img/sec_05/std_01.svg",
    marks: "A+",
    style: "top-[60%] left-[80%] w-24",
    width:80,
    height:80
  },
  {
    src: "/img/sec_05/std_04.svg",
    marks: "A+",
    style: "top-[35%] left-[50%] w-20",
    width:80,
    height:80
  },
  {
    src: "/img/sec_05/std_03.svg",
    marks: "A+",
    style: "top-[40%] left-[20%] w-20",
    width:60,
    height:60
  },
];

const WorldOpportunities = () => {
  return (
    <section className="relative w-full bg-white space-y-5 text-center">
      <h2 className="text-xl sm:text-3xl font-medium text-[#655945]">
        Prepare Your Child for a{" "}
        <span className="font-bold">World of Opportunities with Educare</span>
      </h2>
      <div
        className=""
        // style={{
        //   backgroundImage: `url("/img/sec_05/world-map.svg")`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="relative w-full max-w-6xl mx-auto mt-16 aspect-[2.5/1]">
          <Image
            src="/img/sec_05/world-map.svg"
            alt="World map"
            layout="fill"
            className="object-contain"
          />

          {students.map((student, idx) => (
            <div
              key={idx}
              className={`absolute group cursor-progress  ${student.style}  overflow-hidden`}
            >
              <div className="relative">
                <Image
                  src={student.src}
                  alt={`Student ${idx + 1}`}
                  width={student.width}
                  height={student.height}
                  className="rounded-full"
                />
                <div
                  className="group-hover:flex hidden w-3 h-3 absolute top-4 bg-white  items-center justify-center rounded-full 
              "
                >
                  <div className="w-2 h-2  bg-main rounded-full " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden w-full bg-subHeader">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-5 px-4">
          {[...Array(10)].map((_, idx) => (
            <React.Fragment key={idx}>
              <p className="text-sm text-main whitespace-nowrap">
                Education is the foundation of greatness; let’s build it
                together
              </p>
              <Image
                alt="calligraphy"
                width={30}
                height={30}
                src={`/img/sec_05/calligraphy_01.svg`}
                className="object-contain"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldOpportunities;
