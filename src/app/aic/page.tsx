import React from 'react'
import { Slider } from '@/widgets/Slider/Slider'
import { Substrate } from '@/shared/ui/Substrate/Substrate'
import { PartnerSection } from '@/widgets/PartnerSection/PartnerSection'
import { TechnicalRoadmapSection } from '@/widgets/TechnicalRoadmapSection/TechnicalRoadmapSection'
// import { Products } from '@/widgets/Products/Products';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to Future | AIC',
  description: 'Large-scale AI research',
}

const AIC = () => {
  return (
    <>
      <Slider
        path={'/images/slides/aic-slide-2.jpg'}
        mobilePath={'/images/slides/aic-mobile-slide-2.jpg'}
        title={'Large-scale AI research'}
      />
      <Substrate {...data} />
      {/* <Products /> */}
      <TechnicalRoadmapSection />
      <PartnerSection>
        Our projects realize a potential opportunity for partners and investors.
        We invite you to take advantage of our initiative and participate in the
        development of technologies important to society in the fields of
        discovery, social networks, distributed computing and artificial
        intelligence. Your participation in our community contributes to the
        development of innovative technologies that are used in various areas of
        life - from economics and finance to medicine and education. Together we
        can make a significant impact on the future of humanity and create a
        world where technology is used to achieve optimal results in all areas.
      </PartnerSection>
    </>
  )
}
const data = {
  title: `The future of artificial intelligence: a study that opens up new horizons`,
  text: `AiC (Artificial Intelligence and Blockchain Community) is a project whose goal is to create an open community that will develop and use artificial intelligence models in the blockchain environment. AiC plans to use DAO contracts to regulate the operation of the models and ensure transparency and openness in the development and use of the AI models we create.

            The problem that AiC solves is that the development and use of artificial intelligence models can be costly and complex, requiring significant resources and expertise. In addition, the use of models in different fields can raise concerns about privacy and security.

            AiC proposes a solution to this problem by creating an open community where participants can collaboratively develop and use artificial intelligence models in the blockchain environment. The use of DAO contracts allows for transparency and openness in the process, as well as regulation of the operation of the artificial intelligence models.
            The advantages of AiC lie in the fact that this open community allows participants to exchange knowledge and experience, as well as create and use artificial intelligence models in the blockchain environment with minimal costs. Additionally, the use of DAO contracts enables security and transparency in the process.
            AiC can be used for both commercial and non-commercial purposes, such as creating artificial intelligence models in the fields of medicine, finance, transportation, and others.

            We are building a platform where participants can jointly create and use artificial intelligence models in the blockchain environment, which will help improve the efficiency of using these technologies and make them accessible to a wider audience.
            `,
  buttonText: `Join`,
  buttonLink: `https://t.me/+ahBl6aq1PGtmMTFi`,
}
export default AIC
