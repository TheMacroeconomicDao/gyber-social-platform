"use client";
import { useMediaQuery } from "@/shared/hooks/mediaQuery/useMediaQuery";
import { ItemProps } from "./types";

const NextPeriodItem = (props: ItemProps) => {
  const isLaptop = useMediaQuery("(max-width: 1280px)");
  return (
    <>
      {(!isLaptop || isLaptop === undefined) && (
        <svg
          {...props}
          width="1284"
          height="375"
          viewBox="0 0 1284 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1171.17 2.19922H1228.54L1282 57.0597V100.426V130.134L1228.54 184.995H1135.88H56.25L2 239.869V317.586L55.6667 372.168L115.167 372.199"
            stroke={props.color}
            strokeWidth="4"
          />
        </svg>
      )}
      {(isLaptop || isLaptop === undefined) && (
        <svg
          {...props}
          width="6"
          height="80"
          viewBox="0 0 6 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="0" y2="80" stroke={props.color} strokeWidth="6" />
        </svg>
      )}
    </>
  );
};
export default NextPeriodItem;
