import React from 'react';
import {Slider} from "@/widgets/Slider/Slider";
import {SPRoadmapping} from "@/widgets/SocialPlatformRoadmap/SPRoadmapping";

const SocialPlatform = () => {
    return (
        <>
            <Slider
                path={"/images/slides/gyber-social-platform-slide.jpg"}
                title={"Be a part of innovation Gyber Social Platform"}
            />
            <SPRoadmapping/>
        </>
    );
};

export default SocialPlatform;
