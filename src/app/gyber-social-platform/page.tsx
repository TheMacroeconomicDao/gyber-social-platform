import React from 'react';
import { Slider } from "@/widgets/Slider/Slider";
import { SPRoadmapping } from "@/widgets/SocialPlatformRoadmap/SPRoadmapping";
import { Substrate } from '@/shared/ui/Substrate/Substrate';
import { PartnerSection } from '@/widgets/PartnerSection/PartnerSection';


import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Gyber | Social Platform',
  description: 'Be a part of innovation Gyber Social Platform',
}

const SocialPlatform = () => {
    return (
        <>
            <Slider
                path={"/images/slides/gyber-social-platform-slide.jpg"}
                mobilePath={"/images/slides/gyber-social-platform-mobile-slide.jpg"}
                title={"Be a part of innovation Gyber Social Platform"}
            />
            <Substrate {...data} scrollable={false}/>
            <SPRoadmapping />

            <PartnerSection>
            Our project has a huge potential for investors, and we invite you to join 
            our team and contribute to the development of open technologies 
            and artificial intelligence. Investing in 
            GyberExperimant provides a unique opportunity to get high profits 
            in the long term.
          </PartnerSection>
        </>
    );
};

const data = {
    title: `Decentralized social network 
            Created by users`,
    subtitle: "Build the future together",
    text: `A distributed social media platform managed by the community through blockchain. users can fully control their data and communications without worrying about the intervention of centralized corporations. All users are equal and can vote for changes to the platform and participate in the creation of new modules and extensions. An innovative tool for social interaction that allows participants to create projects, communicate and solve problems together using community resources and advanced technologies.
    `
}


export default SocialPlatform;

