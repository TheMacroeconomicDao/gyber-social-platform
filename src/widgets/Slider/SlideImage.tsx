"use client";
import Image from "next/image";
import { useMediaQuery } from "@/shared/hooks/mediaQuery/useMediaQuery";

interface SlideImageProps {
  path: string;
  mobilePath: string;
  title?: string;
}

const SlideImage = ({ path, mobilePath, title }: SlideImageProps) => {
  const isMobile = useMediaQuery("(max-width: 760px)");
  return (
    <>
      {(!isMobile || isMobile === undefined) && (
        <Image
          fill={true}
          src={path}
          alt={title || "slide"}
          style={{
            objectFit: "cover",
            objectPosition: "24% 50%",
          }}
          quality={70}
          priority
        />
      )}

      {(isMobile || isMobile === undefined) && (
        <Image
          fill={true}
          src={mobilePath}
          alt={title || "slide"}
          style={{
            objectFit: "cover",
            objectPosition: "center 26%",
          }}
          priority
        />
      )}
    </>
  );
};

export default SlideImage;
