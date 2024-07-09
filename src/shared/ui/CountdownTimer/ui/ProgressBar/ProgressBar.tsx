'use client';
import cls from './ProgressBar.module.scss';
import { useEffect, useState } from "react";
import {Time, TimerValues} from "@/shared/types/types";

interface ProgressTimerProps {
    startDate: Time;
    endDate: Time;
    timer: TimerValues;
    days: number;
    hours: number;
    minutes: number;
    isStopped: boolean;
}

const ProgressBar = ({ startDate, endDate, timer, isStopped }: ProgressTimerProps) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const calcWidth = () => {
            const start = new Date(startDate.year, startDate.month - 1, startDate.day, startDate.hour, startDate.minutes).getTime();
            const end = new Date(endDate.year, endDate.month - 1, endDate.day, endDate.hour, endDate.minutes).getTime();
            const totalDuration = end - start;

            const remainingDuration = (timer.days * 24 * 60 * 60 * 1000) + (timer.hours * 60 * 60 * 1000) + (timer.minutes * 60 * 1000);
            const elapsedDuration = totalDuration - remainingDuration;

            const startPercent = 30; // Начальный процент
            const fastProgressEnd = 90; // Процент завершения для быстрой фазы
            const fastDuration = totalDuration * 0.7; // 70% от общего времени

            let percentage;
            if (elapsedDuration <= fastDuration) {
                // Фаза быстрой прогрессии (от 10% до 90%)
                percentage = startPercent + (elapsedDuration / fastDuration) * (fastProgressEnd - startPercent);
            } else {
                // Фаза медленной прогрессии (от 90% до 100%)
                const remainingFastDuration = elapsedDuration - fastDuration;
                const slowDuration = totalDuration - fastDuration;
                percentage = fastProgressEnd + (remainingFastDuration / slowDuration) * (100 - fastProgressEnd);
            }

            setWidth(isStopped ? 100 : Math.min(100, percentage));
        };

        calcWidth();
    }, [startDate, endDate, timer, isStopped]);

    return (
        <div className={cls.container}>
            <div className={cls.progress} style={{ width: `${width}%` }} />
        </div>
    );
};

export default ProgressBar;
