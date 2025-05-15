import Image from "next/image";
import React from "react";



const Sec_03 = () => {
  return (
    <div className="flex lg:flex-row flex-col  h-fit md:px-20 sm:px-8 px-3 lg:h-[400px] py-6 bg-[#F9F7F4] ">
      <div className="lg:w-[40%] w-full">
        <h6 className="text-2xl text-[#655945] font-semibold mb-6">
          Our way of Teaching
        </h6>

        <ul className="text-sm text-[#655945] list-disc space-y-10">
          <li>
            Every teacher at Educare brings passion to their lessons, making
            learning enjoyable with engaging activities tailored to inspire and
            motivate each student.
          </li>
          <li>
            Every teacher at Educare brings passion to their lessons, making
            learning enjoyable with engaging activities tailored to inspire and
            motivate each student.
          </li>
          <li>
            Every teacher at Educare brings passion to their lessons, making
            learning enjoyable with engaging activities tailored to inspire and
            motivate each student.
          </li>
        </ul>
      </div>

      <div className="lg:w-[60%] w-full relative lg:h-full h-[300px]">
        <Image
          src={`/img/sec_03/sec_03.png`}
          fill
          quality={100}
          alt="article image"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Sec_03;
