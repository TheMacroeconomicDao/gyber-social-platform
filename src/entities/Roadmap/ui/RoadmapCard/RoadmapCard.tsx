import cls from './RoadmapCard.module.scss';
import StartItem from "@/entities/Roadmap/ui/RoadmapCard/lineItems/StartItem";
import NextPeriodItem from "@/entities/Roadmap/ui/RoadmapCard/lineItems/NextPeriodItem";
import NextYearItem from "@/entities/Roadmap/ui/RoadmapCard/lineItems/NextYearItem";
import {RoadmapItem} from "./RoadmapItem/RoadmapItem";
import {Status} from "@/entities/Roadmap";

interface RoadmapCardProps {
    period: string;
    id: number;
    color: string;
}
// #71B7FF
// #D49D32
export const RoadmapCard = ({period, id, color}:RoadmapCardProps) => {
    const data = [
        {
            title: "",
            status: Status.TO_DONE,
        }
    ]

    switch (id) {
        case 1: {
            return (
                <div className={cls.RoadmapCard}>
                    {color === "#71B7FF" && <StartItem className={cls.svgItem} style={{top: "-80px"}} color={color}/>}
                    {color === "#D49D32" && <NextYearItem className={cls.svgItem} style={{top: "-260px"}} color={color}/>}
                    <NextPeriodItem className={cls.svgItem} style={{top: "113px"}} color={color}/>
                    <h3 className={cls.title}>2023</h3>
                    <span className={cls.period}>{period}</span>
                    <div className={cls.stages}>
                        <RoadmapItem status={Status.DONE} title={"Разработка прототипа Gyber Social Platform"}/>
                        <RoadmapItem status={Status.IN_PROGRESS} title={"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO"}/>
                        <RoadmapItem status={Status.TO_DONE} title={"Разработка прототипа Gyber Social Platform"}/>
                    </div>
                </div>
            )
        }
        case 4: {
            return (
                <div className={cls.RoadmapCard}>
                    <span className={cls.period}>{period}</span>
                    <div className={cls.stages}>
                        <RoadmapItem status={Status.DONE} title={"Разработка прототипа Gyber Social Platform"}/>
                        <RoadmapItem status={Status.IN_PROGRESS} title={"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO"}/>
                        <RoadmapItem status={Status.TO_DONE} title={"Разработка прототипа Gyber Social Platform"}/>
                    </div>
                </div>
            )
        }
        default: {
            return (
                <div className={cls.RoadmapCard}>
                    <NextPeriodItem className={cls.svgItem} style={{top: "113px"}} color={color}/>
                    <span className={cls.period}>{period}</span>
                    <div className={cls.stages}>
                        <RoadmapItem status={Status.DONE} title={"Разработка прототипа Gyber Social Platform"}/>
                        <RoadmapItem status={Status.IN_PROGRESS} title={"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO"}/>
                        <RoadmapItem status={Status.TO_DONE} title={"Разработка прототипа Gyber Social Platform"}/>
                    </div>
                </div>
            )
        }
    }
};
