/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { SlickArrowNext, SlickArrowPrev } from "./slick-arrows";

type Props = {
  children?: React.ReactNode;
  headerSection?: React.ReactNode;
  className?: string;
  headClassName?: string;
  slidesToShow: number;
  autoplay?: boolean;
  items?: any[];
  enableArrows?: boolean;
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const SlickSlider = ({
  children,
  className,
  slidesToShow = 1,
  autoplay = false,
  headerSection,
  headClassName,
  items = [],
  enableArrows = true,
}: Props) => {
  const slider = useRef<Slider>(null);
  const currentSlideRef = useRef(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    speed: 900,
    dots: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false,
    beforeChange: (_current: number, next: number) => {
      currentSlideRef.current = next; // Update ref instead of causing re-render
      setCurrentSlide(next);
    },

    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex gap-0 items-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`flex items-center rounded-full ${
          i === currentSlideRef.current
            ? "bg-main w-2 h-2"
            : "bg-[#D9D9D9] w-2 h-2"
        }`}
        onClick={() => slider.current?.slickGoTo(i)}
      />
    ),
    responsive: [
      {
        breakpoint: 1280, // screens below 1280px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // below 768px
        settings: {
          slidesToShow: 1,
          centerMode: false, // Optional: set true if you want "peek" on sides
        },
      },
    ],
  };

  useEffect(() => {
    setDisablePrev(currentSlide === 0);
    setDisableNext(currentSlide + settings.slidesToShow >= items.length);
  }, [currentSlide, settings.slidesToShow, items.length]);

  return (
    <div className={clsx("flex flex-col gap-4 relative h-fit ", headClassName)}>
      {enableArrows && (
        <div className="absolute -left-10  lg:block hidden lg:top-3/4   -translate-y-[60%] text-main z-10">
          <SlickArrowPrev slider={slider} disabled={disablePrev} />
        </div>
      )}
      {headerSection}
      <Slider ref={slider} {...settings} className={clsx("", className)}>
        {children}
      </Slider>
      {enableArrows && (
        <div className="absolute -right-10  lg:block hidden lg:top-3/4  -translate-y-[60%] text-main z-10">
          <SlickArrowNext slider={slider} disabled={disableNext} />
        </div>
      )}
    </div>
  );
};

export default SlickSlider;
