import cls from './RoadmapCard.module.scss';
import StartItem from "@/entities/Roadmap/ui/RoadmapCard/lineItems/StartItem";
import NextPeriodItem from "@/entities/Roadmap/ui/RoadmapCard/lineItems/NextPeriodItem";
import NextYearItem from "@/entities/Roadmap/ui/RoadmapCard/lineItems/NextYearItem";
import {RoadmapItem, RoadmapItemProps} from "./RoadmapItem/RoadmapItem";
import { classNames } from '@/shared/lib/classNames/classNames';

enum ItemColor {
    BLUE = "#71B7FF",
    YELLOW = "#D49D32"
}

interface RoadmapCardProps {
    id: number;
    year: number;
    period: string;
    items: RoadmapItemProps[];
}

function isCurrentYear(year:number):boolean {
    return year > new Date().getFullYear();
}

export const RoadmapCard = ({id, year, period, items}:RoadmapCardProps) => {
    const isCurrent = isCurrentYear(year);
    switch (id) {
        case 1: {
            return (
                <div className={cls.RoadmapCard}>
                    {!isCurrent && <StartItem className={classNames(cls.svgItem, {})} style={{top: "-80px"}} color={ItemColor.BLUE}/>}
                    {isCurrent && <NextYearItem className={cls.svgItem} style={{top: "-260px"}} color={ItemColor.YELLOW}/>}
                    {!isCurrent && <NextPeriodItem className={cls.svgItem} style={{top: "113px"}} color={ItemColor.BLUE}/>}
                    {isCurrent && <NextPeriodItem className={cls.svgItem} style={{top: "113px"}} color={ItemColor.YELLOW}/>}
                    <h3 className={classNames(cls.title,  {[cls.yellow]: isCurrent})}>{year}</h3>
                    <span className={classNames(cls.period, {[cls.yellow]: isCurrent})}>{period}</span>
                    <div className={cls.stages}>
                        {items.map(item => (<RoadmapItem status={item.status} title={item.title}/>))}
                    </div>
                </div>
            )
        }
        case 4: {
            return (
                <div className={cls.RoadmapCard}>
                    <span className={classNames(cls.period, {[cls.yellow]: isCurrent})}>{period}</span>
                    <div className={cls.stages}>
                         {items.map(item => (<RoadmapItem status={item.status} title={item.title}/>))}
                    </div>
                </div>
            )
        }
        default: {
            return (
                <div className={cls.RoadmapCard}>
                    {!isCurrent && <NextPeriodItem className={cls.svgItem} style={{top: "113px"}} color={ItemColor.BLUE}/>}
                    {isCurrent && <NextPeriodItem className={cls.svgItem} style={{top: "113px"}} color={ItemColor.YELLOW}/>}
                    <span className={classNames(cls.period, {[cls.yellow]: isCurrent})}>{period}</span>
                    <div className={cls.stages}>
                        {items.map(item => (<RoadmapItem status={item.status} title={item.title}/>))}
                    </div>
                </div>
            )
        }
    }
};
