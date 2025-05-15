import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";



const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="lg:hidden block text-white cursor-pointer z-50 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon icon="pajamas:hamburger" fontSize={28} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-main z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setOpen(false)}
        >
          <Icon icon="mdi:close" fontSize={24} />
        </button>

        {/* Sidebar Content */}
        <nav className="p-6 space-y-4">
            {/* 1. logo starts */}
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10 relative">
            <Image fill alt="logo" src={`/logo/logo.svg`} />
          </div>
          <h1 className="text-xl font-bold text-white">Educare</h1>
        </div>
          <ul className="flex flex-col gap-3 text-white">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Curriculum</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
