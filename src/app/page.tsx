import {Slider} from "@/widgets/Slider/Slider";
import {Substrate} from "@/shared/ui/Substrate/Substrate";
import React from "react";
import {Team} from "@/widgets/Team";
import {JoinSection} from "@/widgets/JoinSection/JoinSection";
import {PartnerSection} from "@/widgets/PartnerSection/PartnerSection";


import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Gyber | Gybernaty Community',
  description: 'Gybernaty Community of advanced enthusiasts and developers',
}


export default function Home() {
  return (
      <>
          <Slider
              path={"/images/slides/gybernaty-slide.jpg"}
              title={"Gybernaty Community of advanced enthusiasts and developers"}
          />
          <Substrate {...data} />
          <Team />
          <JoinSection/>
          <PartnerSection>
          Our projects realize a potential opportunity for partners and investors. 
          We invite you to take advantage of our initiative and participate in the development of technologies 
          important to society in the fields of discovery, social networks, distributed computing and artificial 
          intelligence. Your participation in our community contributes to the development of 
          innovative technologies that are used in various areas of life - from economics 
          and finance to medicine and education. Together we can make a significant impact 
          on the future of humanity and create a world where technology is used to achieve 
          optimal results in all areas.
          </PartnerSection>
      </>

  )
}
const data = {
    title: "Welcome to future",
    subtitle: "Revolution in corporate development",
    text: `An open community where ideas become reality. Here you will find like-minded people who can help you realize your projects and unlock your potential. This is an association of people who are passionate about technology and striving for new discoveries! We create large-scale open source projects, research current technologies and help each other realize their ideas. Here you can find a platform for research, development and exchange of experience in completely different areas of the IT industry. Join us to become a part of the movement. Here you will find not only a team that will help you in the implementation of projects, but also real friends with whom you can share your ideas and successes.

    An open community where ideas become reality. Here you will find like-minded people who can help you realize your projects and unlock your potential. This is an association of people who are passionate about technology and striving for new discoveries! We create large-scale open source projects, research current technologies and help each other realize their ideas. Here you can find a platform for research, development and exchange of experience in completely different areas of the IT industry. Join us to become a part of the movement. Here you will find not only a team that will help you in the implementation of projects, but also real friends with whom you can share your ideas and successes.
    
    The Gyber Experiment is an initiative that combines cryptography, computer science, sociology, and economics to create a cyber-social corporation. It aims to establish a mechanism for direct socio-economic interaction among participants, allowing the concentration of public and financial resources to realize ambitious global projects and manage them effectively. The experiment revolves around the Gyber Social Platform, which is a social network owned and managed by the users themselves through a decentralized autonomous organization (DAO).
    
    The Gyber Social Platform provides basic social networking functionalities such as text and voice chats, file sharing, and video hosting. The platform emphasizes data security and offers multiple levels of data protection, including encryption options on the client side or server-side encryption using the client's public key. The platform stores voluminous data on the IPFS network, with additional content pinning provided by nodes deployed within the experiment.
    
    The architecture of the platform is designed to be open and scalable, with various input and output points for data and multiple cores. Each user can contribute their own code module or feature, which can be included in a node and distributed among interested parties. The platform encourages community scalability, allowing anyone to add to it and enabling the community to support and distribute specific add-on modules.
    
    The platform operates on a stack level, with a multilingual cross-platform pipeline cluster managed by the experiment participants. Different cores are responsible for specific layers of processes, and the development of these cores is carried out in various programming languages such as Java, Dart, Go, and C++. The platform undergoes parallel development of modules and cores to determine the most effective stack for different tasks and ensure flexibility in long-term architecture development.
    
    To govern the experiment, secure smart contracts based on Solidity language and the OpenZeppelin library are implemented. These contracts include management tokens and utility tokens for decision-making and platform interaction. The contracts' source code is available on GitHub, and important decisions within the experiment are made through proposal and voting mechanisms of the DAO contract. Transparency and security are ensured through blockchain technology.
    
    Tokenomics play a crucial role in the Gyber Experiment. Two types of tokens are utilized: Gyber Token, a utility token required for platform interaction, and Gyber Community Token, a governance token used for managing the experiment and making collective decisions. The distribution of tokens is allocated among different categories of holders, including developers, experiment participants, large investors and funds, and the public market. A reserve fund is also created to optimize the deployment processes of the experiment.
    
    The experiment follows a set of project phases, starting with idea proposal and discussion, moving to accumulation of funds, project implementation, and finally functioning. Projects can have external clients who use fiat currency, special clients who enjoy discounts with Gyber tokens, and super clients who receive even greater discounts with specific project's internal tokens. Staking Gyber tokens or internal project tokens allows participants to earn reputation and passive income within the experiment.
    
    The internal organization of the community is based on personal and public interests of the participants. Implementers are responsible for project management and ensuring its functioning, and decisions are made through voting by implementers. Implementers have personal and community responsibilities, and unethical behavior may lead to exclusion from the experiment. Interaction among participants occurs through discussion and private groups, with each project having its dedicated group. The experiment also incorporates different types of DAOs, including social DAOs, code DAOs, commercial DAOs, and economic DAOs, to facilitate decision-making and project implementation.
    
    Overall, the Gyber Experiment aims to create a decentralized and community-driven platform that enables effective socio-economic interaction, project implementation, and decision-making. It leverages cryptography, computer science, and blockchain technology to ensure data security, transparency, and scalability.
    `
}