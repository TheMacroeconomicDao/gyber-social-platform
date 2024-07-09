"use client"
import cls from "./CountDownTimer.module.scss"
import TimerUnit from "@/shared/ui/CountdownTimer/ui/Timer/TimerUnit";
import {classNames} from "@/shared/lib/classNames/classNames";
import { TimerValues} from "@/shared/types/types";


interface CountdownTimerProps {
    timer: TimerValues;
    stopped?: boolean;
    isActive: boolean;
}

const CountdownTimer = ({timer, stopped=true, isActive}: CountdownTimerProps) => {

    return (
        <div className={classNames(cls.timerContainer, {[cls.stopped]: stopped || !isActive }, [])}>
            <TimerUnit
                value={timer.days > 0 ? timer.days : 0}
                label={"D"}/>
            :
            <TimerUnit
                value={timer.hours > 0 ? timer.hours : 0}
                label={"H"}/>
            :
            <TimerUnit
                value={timer.minutes > 0 ? timer.minutes : 0}
                label={"M"}/>
            :
            <TimerUnit
                value={timer.seconds > 0 ? timer.seconds : 0}
                label={"S"}/>
        </div>
    )
}

export default CountdownTimer;
