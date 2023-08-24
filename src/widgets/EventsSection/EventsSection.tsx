import { EventCard } from "@/entities/EventCard/EventCard";
import cls from "./EventsSection.module.scss";

export const EventsSection = () => {
  return (
    <div className={cls.EventsSection}>
      <h2>Events</h2>
      <div className={cls.Wrapper}>
        {data.map((e) => (
          <EventCard
            key={e.id}
            imageSrc={e.imageSrc}
            date={e.date}
            title={e.title}
            description={e.description}
            link={e.link}
          />
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    imageSrc: "/images/events/163.png",
    date: "20 june 2023",
    title: "Invest Event",
    description:
      "AiC is an open community that unites people interested in the development and use of artificial intelligence models in the blockchain environment. Using DAO contracts, we ensure transparency, security and openness of the process of developing and using AI models. In AiC, you can share knowledge, experience and create models with minimal costs.",
    link: "/",
  },
  {
    id: 2,
    imageSrc: "/images/events/164.png",
    date: "",
    title: "Invest Event",
    description:
      "AiC is an open community that unites people interested in the development and use of artificial intelligence models in the blockchain environment. Using DAO contracts, we ensure transparency, security and openness of the process of developing and using AI models. In AiC, you can share knowledge, experience and create models with minimal costs.",
    link: "/",
  },
  {
    id: 3,
    imageSrc: "/images/events/165.png",
    date: "20 june 2023",
    title: "Invest Event",
    description:
      "AiC is an open community that unites people interested in the development and use of artificial intelligence models in the blockchain environment. Using DAO contracts, we ensure transparency, security and openness of the process of developing and using AI models. In AiC, you can share knowledge, experience and create models with minimal costs.",
    link: "/",
  },
  {
    id: 4,
    imageSrc: "/images/events/166.png",
    date: "20 june 2023",
    title: "Invest Event",
    description:
      "AiC is an open community that unites people interested in the development and use of artificial intelligence models in the blockchain environment. Using DAO contracts, we ensure transparency, security and openness of the process of developing and using AI models. In AiC, you can share knowledge, experience and create models with minimal costs.",
    link: "/",
  },
];
