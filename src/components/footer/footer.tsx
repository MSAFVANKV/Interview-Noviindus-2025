import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-main   space-y-7 ">
     <div className="grid md:grid-cols-6 sm:grid-cols-3 md:px-20 sm:px-8 px-3  py-10">
       {/* 1. logo */}
       <div className="flex items-center gap-2 md:col-span-2 ">
        <div className="w-10 h-10 relative">
          <Image
            src="/logo/logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-xl font-bold text-white">Educare</h1>
      </div>

      {/* 2 */}
      <ul className=" w-full flex flex-col gap-1  text-white">
        {[
          "Navigation",
          "Home",
          "About",
          "Curriculum",
          "Career",
          "Blogs",
          "Contact us",
        ].map((item, index) => (
          <li
            className={`${
              index === 0 ? "font-bold mb-4" : ""
            } cursor-pointer hover:underline underline-offset-4`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* 3 */}
      <ul className=" w-full flex flex-col gap-1  text-white">
        {[
          "Contact info",
          "educare@gmail.com",
          "info@educare.com",
          "+974 4412 3456",
          "+974 5534 7890",
        ].map((item, index) => (
          <li
            className={`${
              index === 0 ? "font-bold mb-4" : ""
            } cursor-pointer hover:underline underline-offset-4`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* 4 */}
      <div className="h-full w-full relative">
        <Image
          src="/properities/footer-map.svg"
          alt="article image"
          fill
          className="object-contain w-40"
        />
      </div>

      {/* 5 */}
      <ul className=" w-full flex flex-col gap-1  text-white">
        {[
          "Office Address ",
          "EducareEducation CenterBuilding 45, Al Sadd Street,Doha, Qatar",
        ].map((item, index) => (
          <li
            className={`${
              index === 0 ? "font-bold mb-4" : ""
            } cursor-pointer hover:underline underline-offset-4`}
            key={index}
          >
            {item}
          </li>
        ))}
        <span className="text-xs underline mt-3">
        View on Map
        </span>
      </ul>
     </div>

      <div className="border-t flex justify-between sm:flex-row flex-col items-center p-5 text-xs w-full">
        <span className="text-white">
        © 2024 educare
        </span>
        <span className="flex items-center gap-1 text-white">
        Designed By <p className="text-[#DCC196]">Noviindus Technologies</p>
        </span>
        <span className="text-[#DCC196]">
        Terms & Conditions Privacy Policy
        </span>

      </div>
    </footer>
  );
};

export default Footer;
