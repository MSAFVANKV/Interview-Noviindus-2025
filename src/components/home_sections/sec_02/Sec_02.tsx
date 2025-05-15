/* eslint-disable react/no-unescaped-entities */
import MyButton from "@/components/global/my-button";
import Image from "next/image";
import React from "react";

const Sec_02 = () => {
  return (
    <section className="flex flex-col lg:gap-16 sm:gap-10 gap-14 md:px-20 sm:px-8 px-3">
      <div className="flex lg:flex-row flex-col lg:gap-2 gap-5">
        <div className="lg:w-[60%] w-full flex flex-col gap-5">
          <span className="text-[#655945] text-2xl">
            The Story of <b>Educare</b>
          </span>
          <article className="text-base leading-relaxed text-gray-700 space-y-4">
            <p>
              At Educare Education Center, we believe that every student
              deserves personalized, focused attention to reach their fullest
              potential. Our mission is to empower students through one-on-one
              tutoring, creating customized learning plans tailored to each
              individual's unique needs, strengths, and learning styles.
            </p>

            <p>
              Founded on a passion for education and a commitment to excellence,
              Educare Education Center was established to provide a supportive
              and engaging learning environment. Our team of experienced tutors
              is dedicated to helping students excel academically while also
              building confidence, independence, and a lifelong love of
              learning.
            </p>

            <p>
              We specialize in a wide range of subjects across all grade levels,
              including math, science, English, and test preparation. Whether
              your child needs help catching up, getting ahead, or preparing for
              a specific exam, we are here to support their journey every step
              of the way.
            </p>
          </article>
        
        </div>

        {/* right portion == starts == */}
        <div className="lg:w-[40%] w-[300px] lg:h-auto h-[300px] mx-auto relative">
          <Image
            src={`/img/sec_02/sec_02_img.png`}
            fill
            alt="article image"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <MyButton
            title="Read more "
            icon="mdi-light:arrow-right"
            className="w-[142px] h-[45px] lg:mx-0 mx-auto"
            IClassName=""
          />

      {/* 2. blog cards  */}
      <ul className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6">
      <li className="p-5 rounded-xl flex flex-col gap-4 bg-subHeader relative hover:shadow-[3px_3px_0px_1px_#8A1538] shadow duration-300 transition-all">
          <b className="text-main">Mission</b>
          <div className="flex gap-2 w-3/4">
            <p className="text-main">
              To help students succeed with personalized, <b>one-to-one</b>{" "}
              tutoring that builds confidence, skills, and a love for learning.
            </p>
            
          </div>
         <div className="absolute right-0 -top-10">
         <Image
              src={`/img/sec_02/thought-01.png`}
              width={100}
              height={100}
              alt="article image"
              className="object-contain"
            />
         </div>
        </li>
        {/* 2 */}
        <li className="p-5 rounded-xl flex flex-col gap-4 bg-subHeader relative shadow-[3px_3px_0px_1px_#8A1538] hover:shadow duration-300 transition-all">
          <b className="text-main">Mission</b>
          <div className="flex gap-2 w-3/4">
            <p className="text-main">
              To help students succeed with personalized, <b>one-to-one</b>{" "}
              tutoring that builds confidence, skills, and a love for learning.
            </p>
            
          </div>
         <div className="absolute right-0 -top-10 ">
         <Image
              src={`/img/sec_02/thought-02.png`}
              width={100}
              height={100}
              alt="article image"
              className="object-contain"
            />
         </div>
        </li>
        <li className=" jec items-start pl-16 xl:flex hidden">
        <Image
              src={`/img/sec_02/thought-03.png`}
              width={100}
              height={100}
              alt="article image"
              className="object-contain w-40"
            />
        </li>
      </ul>
    </section>
  );
};

export default Sec_02;
