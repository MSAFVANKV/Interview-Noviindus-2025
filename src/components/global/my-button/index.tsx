import React from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";
type Props = {
  onClick?: () => void;
  title: string;
  className?: string;
  IClassName?: string;
  icon?: string;
};

const MyButton = ({ onClick, title, className, icon, IClassName }: Props) => {
  return (
    <div
    className={clsx("relative  group", className || "w-[200px] h-[55px]")}
      onClick={onClick}
    >
      <button className="bg-[#EBC48B] w-full h-full absolute top-0 left-0  rounded-lg shadow-md cursor-pointer">
        {title}
      </button>
      <button className="bg-main flex items-center justify-center gap-2 w-full h-full absolute top-0 left-0 rounded-lg -rotate-4 cursor-pointer group-hover:rotate-0 duration-300 transition-all text-white">
        {title}{" "}
        {icon && (
          <Icon
            icon={icon}
            className={clsx(
              "transform -rotate-45 group-hover:rotate-0 duration-300 transition-transform",
              IClassName
            )}
          />
        )}
      </button>
    </div>
  );
};

export default MyButton;
