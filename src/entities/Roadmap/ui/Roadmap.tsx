import cls from './Roadmap.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {RoadmapCard} from "@/entities/Roadmap/ui/RoadmapCard/RoadmapCard";
import NextYearItem from "./RoadmapCard/lineItems/NextYearItem";
import NextPeriodItem from "./RoadmapCard/lineItems/NextPeriodItem";
import StartItem from "./RoadmapCard/lineItems/StartItem";

interface RoadmapProps {
    className?: string;
}

export const Roadmap = ({className = ""}: RoadmapProps) => {
    const data = [
        {
            year: 2023,
            periods: [
                {
                    id: 1,
                    period: "Q1",
                    color: "#71B7FF",
                },
                {
                    id: 2,
                    period: "Q2",
                    color: "#71B7FF",
                },
                {
                    id: 3,
                    period: "Q3",
                    color: "#71B7FF",
                },
                {
                    id: 4,
                    period: "Q4",
                    color: "#71B7FF",
                },
            ]
        },
        {
            year: 2024,
            periods: [
                {
                    id: 1,
                    period: "Q1",
                    color: "#D49D32",
                },
                {
                    id: 2,
                    period: "Q2",
                    color: "#D49D32",
                },
                {
                    id: 3,
                    period: "Q3",
                    color: "#D49D32",
                },
                {
                    id: 4,
                    period: "Q4",
                    color: "#D49D32",
                },
            ]
        },
    ]
    return (
        <div className={classNames(cls.Roadmap, {}, [className])}>

            {data[0].periods.map(p => (
                <RoadmapCard key={p.id} period={p.period} id={p.id} color={p.color}/>
            ))}
            {data[1].periods.map(p => (
                <RoadmapCard key={p.id} period={p.period} id={p.id} color={p.color}/>
            ))}

        </div>
    );
};

// #71B7FF
// #D49D32
