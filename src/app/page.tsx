"use client";
import Footer from "@/components/footer/footer";
import Sec_01 from "@/components/home_sections/sec_01/sec_01";
import Sec_02 from "@/components/home_sections/sec_02/Sec_02";
import Sec_03 from "@/components/home_sections/sec_03/sec_03";
import Sec_04 from "@/components/home_sections/sec_04/sec_04";
import Sec_05 from "@/components/home_sections/sec_05/sec_05";
import Sec_06 from "@/components/home_sections/sec_06/sec_06";
import Sec_07 from "@/components/home_sections/Sec_07/Sec_07";
import Sec_08 from "@/components/home_sections/sec_08/sec_08";
import Sec_09 from "@/components/home_sections/sec_09/sec_09";
import Sec_10 from "@/components/home_sections/sec_10/sec_10";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-0 md:px-20 space-y-10 px-4 ">

      <div className="fixed animation-pulse2 right-4 top-32 z-50 h-10 w-10 rounded-full text-white bg-[#2FAF60] flex items-center justify-center">
        <Icon icon={`ic:round-whatsapp`} className="text-xl" />
      </div>

      <div className="fixed  right-0 top-[40%] z-[10001] h-[200px] w-10 rounded-sm bg-main flex items-center justify-center">
  <span className="text-white text-sm rotate-90 whitespace-nowrap">
    Book a Free Demo Class
  </span>
</div>


      <Sec_01 />

      <Sec_02 />

      <Sec_03 />

      <Sec_04 />

      <Sec_05 />

      <Sec_06 />

      <Sec_07 />

      <Sec_08 />

      <Sec_09 />

      <Sec_10 />

      {/* footer section */}
      <Footer />


    </div>
  );
}
