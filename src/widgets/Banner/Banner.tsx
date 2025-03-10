import Image from "next/image";

import cls from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={cls.Banner}>
      <Image
        src={"/images/slides/test-banner2.png"}
        width={1600}
        height={500}
        alt="banner"
        className={cls.BannerImage}
      />
    </div>
  );
};
