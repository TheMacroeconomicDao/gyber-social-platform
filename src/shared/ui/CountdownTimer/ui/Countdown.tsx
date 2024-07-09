'use client'
import CountdownTimer from "./Timer/CoundownTimer";
import ProgressBar from "@/shared/ui/CountdownTimer/ui/ProgressBar/ProgressBar";
import {useCountdown} from "@/shared/ui/CountdownTimer/hooks/useCountdown";
import {useEffect} from "react";
import {NumericRange, Time, TimerValues} from "@/shared/types/types";

interface CountdownTimerProps {
    timer: TimerValues,
    startDate: Time,
    endDate: Time,
    isActive: boolean;
    isStopped: () => void;

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
                timer={timer}
            />
            <ProgressBar
                startDate={startDate}
                endDate={endDate}
                timer={timer}
                isStopped={timerStopped} />
        </>
    )
}

export default CountdownProgressTimer