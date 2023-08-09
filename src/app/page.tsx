import {Slider} from "@/widgets/Slider/Slider";
import {Substrate} from "@/shared/ui/Substrate/Substrate";
import React from "react";
import {Team} from "@/widgets/Team";
import {Section, ThemeBackgroundSection} from "@/shared/ui/Section/Section";

export default function Home() {
  return (
      <>
          <Slider
              path={"/images/slides/gybernaty-slide.jpg"}
              title={"Gybernaty Community of advanced enthusiasts and developers"}
          />
          <Substrate />
          <Team />
      </>

  )
}
