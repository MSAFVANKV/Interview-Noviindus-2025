import React, { useRef, useState } from "react";
import clsx from "clsx";

type SnapSliderProps = {
  children: React.ReactNode[];
  headerSection?: React.ReactNode;
  className?: string;
  headClassName?: string;
  slidesToShow?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};

const SnapSlider = ({
  children,
  headerSection,
  className,
  headClassName,
  slidesToShow = { base: 1, sm: 2, md: 3, lg: 4, xl: 5 },
}: SnapSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);
  console.log(pageIndex);
  

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.offsetWidth;
      const newScroll =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({ left: newScroll, behavior: "smooth" });

      setPageIndex((prev) =>
        direction === "left" ? Math.max(prev - 1, 0) : prev + 1
      );
    }
  };

  // Responsive width classes per slide
  const getWidthClass = (prefix: string, count?: number) => {
    if (!count || count <= 0) return "";
    return `${prefix ? `${prefix}:` : ""}w-[calc(100%/${count})]`;
  };

  return (
    <div className={clsx("flex flex-col gap-4", headClassName)}>
      {headerSection}

      <div className="relative -mx-4 md:-mx-8 px-4 md:px-8">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden md:flex"
        >
          ❮
        </button>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className={clsx(
            "flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 hide-scrollbar",
            className
          )}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={clsx(
                "snap-start shrink-0",
                getWidthClass("", slidesToShow.base),
                getWidthClass("sm", slidesToShow.sm),
                getWidthClass("md", slidesToShow.md),
                getWidthClass("lg", slidesToShow.lg),
                getWidthClass("xl", slidesToShow.xl)
              )}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden md:flex"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SnapSlider;
