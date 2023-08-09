import cls from './RoadmapItem.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Status} from "@/entities/Roadmap";
import {DoneIcon, ProgressIcon} from "@/entities/Roadmap/ui/RoadmapCard/RoadmapItem/RoadmapIcons";

interface RoadmapItemProps {
    title?: string
    status?: Status
}

export const RoadmapItem = (props:RoadmapItemProps) => {
    const {
        title,
        status = Status.TO_DONE
    } = props;
    const done = status === Status.DONE;
    const progress = status === Status.IN_PROGRESS;

    return (
        <div className={cls.RoadmapItem}>
            <div className={classNames(cls.icon, {[cls.done]: done, [cls.progress]: progress})}>
                {done && <DoneIcon/> }
                {progress && <ProgressIcon /> }
            </div>
            <div>
                <h3 className={classNames(cls.title, {[cls.done]: done, [cls.progress]: progress})}>{title}</h3>
                <span className={classNames(cls.status, {[cls.done]: done, [cls.progress]: progress})}>{status}</span>
            </div>
        </div>
    );
};
