"use client";
import React from "react";
import Nav_NavLists from "./nav_lists";
import Image from "next/image";
import { CallSvgIcon, EmailSvgIcon } from "../global/icons";
import SideBar from "./side-bar";

const Header = () => {
  return (
    <header className=" bg-main">
      <nav className="flex items-center justify-between h-[75px] max-w-screen-2xl mx-auto 2xl:px-0 md:px-20 sm:px-10 px-4">
        {/* 1. logo starts */}
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10 relative">
            <Image fill alt="logo" src={`/logo/logo.svg`} />
          </div>
          <h1 className="text-xl font-bold text-white">Educare</h1>
        </div>

        {/* 2. navbar lists */}
       <div className="lg:block hidden">
       <Nav_NavLists />
       </div>

        {/* 2. contacts */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-white">
            <CallSvgIcon />
            <span className="text-sm">+974 55555 3456</span>
          </div>
          {/* email */}
          <div className="flex items-center gap-1 text-white">
            <EmailSvgIcon />
            <span className="text-sm">info@educare.qa</span>
          </div>
        </div>



        <button className="w-[147px] lg:block hidden h-[45px] rounded-lg bg-white text-main text-lg cursor-pointer hover:bg-white/90 duration-300 transition-all">
        Contact Us
        </button>

        <SideBar />

      </nav>
    </header>
  );
};

export default Header;
