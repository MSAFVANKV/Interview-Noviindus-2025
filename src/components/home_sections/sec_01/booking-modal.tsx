import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const BookingModal = ({ setOpenModal }: Props) => {
  return (
    <div
      className="fixed w-full h-full left-0 top-0 z-40 right-0 bottom-0 bg-black/30 backdrop-blur-md flex items-center justify-center"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e)=>{
            e.preventDefault()
        }}
        className="md:w-[40%] sm:w-[60%] w-full h-fit bg-white z-50 flex flex-col items-center gap-4 p-5 rounded-lg "
      >
        <div className="flex flex-col items-center">
          <h5 className="text-2xl font-bold text-[#655945]">
            Book a Free Demo Class
          </h5>
          <h6 className="text-xl text-[#969696]">Book a Free Demo Class</h6>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            className="p-3 rounded-xl w-full border"
            placeholder="name"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name">Email ID</label>
          <input
            type="text"
            id="email"
            className="p-3 rounded-xl w-full border"
            placeholder="email"
          />
        </div>

        <div className="bg-subHeader p-3 rounded-xl w-fll flex justify-between w-full text-xs text-[#655945] cursor-pointer">
          <span className="">Choose your curriculum syllabus</span>
        </div>
        <div className="bg-subHeader p-3 rounded-xl w-fll flex justify-between w-full text-xs text-[#655945] cursor-pointer">
          <span className="">Choose your class</span>
        </div>
        <div className="bg-subHeader p-3 rounded-xl w-fll flex justify-between w-full text-xs text-[#655945] cursor-pointer">
          <span className="">Choose your course</span>
        </div>
        {/* Write your Message */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name">Write your Message</label>
          <textarea
            id="email"
            className="p-3 rounded-xl w-full border resize-none h-32"
            placeholder="Write your Message ..."
          />
        </div>

        <div className="mt-auto flex w-full">
          <button
          type="submit"
          className="w-full h-[48px] bg-main text-sm rounded-xl shadow text-white hover:scale-95 duration-300 
          cursor-pointer transition-all">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingModal;
