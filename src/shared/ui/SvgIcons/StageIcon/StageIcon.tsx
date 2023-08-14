import cls from './StageIcon.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {DoneIcon, ProgressIcon} from "./Icons";

export enum IconStatus {
    DEFAULT = "default",
    DONE = "done",
    PROGRESS = "progress"
}
interface StageIconProps {
    status?: IconStatus
}

export const StageIcon = (props:StageIconProps) => {
    const {status = IconStatus.DEFAULT} = props;
    const done = status == IconStatus.DONE;
    const progress = status == IconStatus.PROGRESS;
    return (
        <div className={classNames(cls.icon, {[cls.done]: done, [cls.progress]: progress})}>
            {done && <DoneIcon/> }
            {progress && <ProgressIcon /> }
        </div>
    );
};
