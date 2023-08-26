import React from 'react';
import {Slider} from "@/widgets/Slider/Slider";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Gyber | AIC',
  description: 'Large-scale AI research',
}


const AIC = () => {
    return (
        <>
            <Slider
                path={"/images/slides/aic-slide.jpg"}
                mobilePath={"/images/slides/gyber-experiment-mobile-slide.jpg"}
                title={"Large-scale AI research"}
            />
            
            
        </>
    );
};
export default AIC;
