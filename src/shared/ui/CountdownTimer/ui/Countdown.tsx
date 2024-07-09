'use client'
import CountdownTimer from "./Timer/CoundownTimer";
import ProgressBar from "@/shared/ui/CountdownTimer/ui/ProgressBar/ProgressBar";
import {useCountdown} from "@/shared/ui/CountdownTimer/hooks/useCountdown";
import {useEffect} from "react";
import {NumericRange, Time} from "@/shared/types/types";

interface CountdownTimerProps {
    startDate: Time,
    endDate: Time,
    isActive: boolean;
    isStopped: () => void;
    year: number;
    month: NumericRange<1, 12>;
    day: NumericRange<0, 31>;
    hour?: NumericRange<0, 23>
    minutes?: NumericRange<0, 59>;
}

const CountdownProgressTimer = (props: CountdownTimerProps) => {
    const {
        endDate,
        startDate,
        isActive,
        isStopped,
    } = props;

    const handle = (value: number) => (value < 10 ? "0" + value : value);
    const date = `${handle(endDate.year)}-${handle(endDate.month)}-${handle(endDate.day)}T${handle(endDate.hour)}:${handle(endDate.minutes)}:00`
    const {timer, timerStopped} = useCountdown(date)

    useEffect(() => {
        if (isActive || timerStopped) {
            isStopped();
        }
    }, [timerStopped, isStopped, isActive]);
    return (
        <>
            <CountdownTimer
                isActive={isActive}
                stopped={timerStopped}
                days={timer.days}
                hours={timer.hours}
                minutes={timer.minutes}
                seconds={timer.seconds} />
            <ProgressBar
                initDays={endDate.day}
                days={timer.days}
                hours={timer.hours}
                minutes={timer.minutes}
                isStopped={timerStopped} />
        </>
    )
}

export default CountdownProgressTimer