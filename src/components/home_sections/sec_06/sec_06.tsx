// import React from "react";

// type Props = {};

// const Sec_06 = (props: Props) => {
//   return (
//     <section className="h-[70dvh] w-full overflow-hidden py-4 md:px-20 sm:px-8 px-3">
//       <iframe
//         className="w-full h-full border-0 rounded-xl"
//        src="https://www.youtube.com/embed/D0UnqGm_miA?si=_nGMQIKcoyRYVSyR&amp;controls=0"
//         title="YouTube video"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </section>
//   );
// };

// export default Sec_06;
"use client";

import React, { useState } from "react";
import Image from "next/image";

const Sec_06 = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="flex flex-col gap-5 items-center justify-center sm:py-20  py-10  md:px-20 sm:px-8 px-3">
      <h2 className="text-xl sm:text-3xl font-medium text-[#655945]">
        Learn More About
        <span className="font-bold">Our Space</span>
      </h2>
      <div className="relative w-full  h-[70dvh]  rounded-xl overflow-hidden shadow-lg">
        {!playVideo ? (
          <>
            <Image
              src="/properities/you-video.png" // ✅ Replace with your image in /public
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
            <button
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-red-500 w-24 flex items-center justify-center cursor-pointer p-4 rounded-2xl transition shadow-md">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4r-QVk5-umI?si=6Peit0DEr7CaKaWh"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Sec_06;
