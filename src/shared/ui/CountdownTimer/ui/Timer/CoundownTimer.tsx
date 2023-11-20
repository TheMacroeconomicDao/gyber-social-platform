"use client"
import cls from "./CountDownTimer.module.scss"
import TimerUnit from "@/shared/ui/CountdownTimer/ui/Timer/TimerUnit";
import {classNames} from "@/shared/lib/classNames/classNames";

interface CountdownTimerProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    stopped?: boolean;
}

const CountdownTimer = ({days, hours, minutes, seconds, stopped=true}: CountdownTimerProps) => {

    return (
        <div className={classNames(cls.timerContainer, {[cls.stopped]: stopped }, [])}>
            <TimerUnit
                value={days > 0 ? days : 0}
                label={"D"}/>
            :
            <TimerUnit
                value={hours > 0 ? hours : 0}
                label={"H"}/>
            :
            <TimerUnit
                value={minutes > 0 ? minutes : 0}
                label={"M"}/>
            :
            <TimerUnit
                value={seconds > 0 ? seconds : 0}
                label={"S"}/>
        </div>
    )
}

export default CountdownTimer;
