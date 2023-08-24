import cls from "./Roadmap.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { RoadmapCard } from "@/entities/Roadmap/ui/RoadmapCard/RoadmapCard";
import { IconStatus } from "@/shared/ui/SvgIcons";

interface RoadmapProps {
  className?: string;
}

export const Roadmap = ({ className = "" }: RoadmapProps) => {
  return (
    <div className={classNames(cls.Roadmap, {}, [className])}>
      {data.map((items) =>
        items.periods.map((p) => (
          <RoadmapCard
            key={p.id}
            id={p.id}
            year={items.year}
            period={p.period}
            items={p.items}
          />
        ))
      )}
    </div>
  );
};
const data = [
  {
    year: 2023,
    periods: [
      {
        id: 1,
        period: "Q1",
        items: [
          {
            title: "Gyber Social Platform prototype development",
            status: IconStatus.DONE,
          },
          {
            title:
              "Development of smart contracts ERC20, ERC721, The Macroeconomic DAO",
            status: IconStatus.PROGRESS,
          },
          {
            title: "Development Dapp The Macroeconomic DAO",
            status: IconStatus.DEFAULT,
          },
        ],
      },
      {
        id: 2,
        period: "Q2",
        items: [
          {
            title: "Seed investment round",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Opening Social Bounty and Secure Bounty programs",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Testing the main platform code",
            status: IconStatus.DEFAULT,
          },
        ],
      },
      {
        id: 3,
        period: "Q3",
        items: [
          {
            title: "PreSale",
            status: IconStatus.DEFAULT,
          },
          {
            title:
              "Development of a prototype of a decentralized, multi-platform, computing cluster",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Blockchain GyberNet Prototype Development",
            status: IconStatus.DEFAULT,
          },
        ],
      },
      {
        id: 4,
        period: "Q4",
        items: [
          {
            title: "Work on the projects of the participants of the experiment",
            status: IconStatus.DEFAULT,
          },
          {
            title:
              "Test implementations of projects of participants in the experiment",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Gyber Social Platform Release",
            status: IconStatus.DEFAULT,
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    periods: [
      {
        id: 1,
        period: "Q1",
        items: [
          {
            title: "Testing Gyber Social Platform with real users",
            status: IconStatus.DEFAULT,
          },
          {
            title:
              "Launch of the cyber-social mechanism. The Macroeconomic DAO",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Initial Liquidity Offering",
            status: IconStatus.DEFAULT,
          },
        ],
      },
      {
        id: 2,
        period: "Q2",
        items: [
          {
            title:
              "Testing a prototype of a decentralized, multi-platform, computing cluster",
            status: IconStatus.DEFAULT,
          },
          {
            title: "GyberNet Blockchain Prototype Testing",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Launching the GyberNetTest0 Testnet",
            status: IconStatus.DEFAULT,
          },
        ],
      },
      {
        id: 3,
        period: "Q3",
        items: [
          {
            title:
              "Development of a decentralized, multi-platform, computing clust",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Launching the GyberNetTest1 Testnet",
            status: IconStatus.DEFAULT,
          },
          {
            title: "Development of additional platform modules",
            status: IconStatus.DEFAULT,
          },
        ],
      },
      {
        id: 4,
        period: "Q4",
        items: [
          {
            title: "Publication of the Proof of lucky consensus algorithm",
            status: IconStatus.DEFAULT,
          },
          {
            title:
              "Development of a distributed Linux virtual machine under blockchain control",
            status: IconStatus.DEFAULT,
          },
        ],
      },
    ],
  },
];
