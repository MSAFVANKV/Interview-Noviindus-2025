/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";

type Props = {
  slider: any;
  disabled: boolean;
};

export function SlickArrowPrev({ slider, disabled }: Props) {
  return (
    <button
      onClick={() => slider?.current?.slickPrev()}
      disabled={disabled}
      className={` transition-all duration-300 ${
        disabled
          ? "text-gray-300 cursor-not-allowed"
          : "text-black "
      }`}
    >
      <Icon icon="iconamoon:arrow-right-2-thin" className={`${disabled?"":"text-main"} rotate-180`} fontSize={40} />
    </button>
  );
}

export function SlickArrowNext({ slider, disabled }: Props) {
  return (
    <button
      onClick={() => slider?.current?.slickNext()}
      disabled={disabled}
      className={` transition-all duration-300 ${
        disabled
          ? "text-gray-300 cursor-not-allowed"
          : "text-black  "
      }`}
    >
      <Icon icon="iconamoon:arrow-right-2-thin" className={`${disabled?"":"text-main"}`} fontSize={40}/>
    </button>
  );
}
