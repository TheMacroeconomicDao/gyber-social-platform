import cls from './Substrate.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
interface SubstrateProps {
    className?: string;
    scrollable?: boolean;
    title?: string;
    subtitle?: string;
    text?: string;
}

export const Substrate = (props:SubstrateProps) => {
    const {className = "", title, subtitle, text, scrollable = true} = props;
    return (
        <div className={classNames(cls.Substrate, {}, [className])}>
            <h2>{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <div className={classNames(cls.text_box, {[cls.scroll]: scrollable})}>
                {text}
            </div>
        </div>
    );
};
