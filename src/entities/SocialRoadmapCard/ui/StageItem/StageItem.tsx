import cls from './StageItem.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
interface StageItemProps {
    className?: string;
}

export const StageItem = ({className = ''}:StageItemProps) => {
    return (
        <div className={classNames(cls.StageItem, {}, [className])}>
            Some text
        </div>
    );
};
