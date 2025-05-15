import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";


const Sec_09 = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(
    null
  );

  const accordionList: {
    id: number;
    title: string;
    details: string;
  }[] = [
    {
      id: 1,
      title: "What subjects do you offer tutoring in?",
      details:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
      id: 2,
      title: "What ages or grade levels do you tutor?",
      details:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
      id: 3,
      title: "Is tutoring one-on-one or in groups?",
      details:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
      id: 4,
      title: " Can sessions take place at our home?",
      details:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
      id: 5,
      title: "What is the duration and frequency of each tutoring session?",
      details:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setSelectedAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="sm:py-20  py-10 md:px-20 sm:px-8 px-3 bg-[#F9F7F4] space-y-7">
      <h2 className="text-xl sm:text-3xl font-medium text-[#655945] text-center">
        Frequently asked
        <span className="font-bold">Questions</span>
      </h2>
      <ul className="flex flex-col gap-5">
        {accordionList.map((list, index) => (
          <li className="p-4 shadow bg-white flex justify-between cursor-pointer" key={index}
          onClick={() => toggleAccordion(list.id)}
          >
            <div className="flex flex-col gap-5">
              <button
               
                className="text-sm text-left text-[#333]"
              >
                {list.title}
              </button>
              {selectedAccordion === list.id && (
                <p className="text-xs text-[#555]">{list.details}</p>
              )}
            </div>

            

            <Icon icon="formkit:down" fontSize={10} className={`${selectedAccordion === list.id?"rotate-180":""} duration-300 transition-all`} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sec_09;
