"use client"
import cls from "./LaunchPad.module.scss";
import LogoGemPad from "./LogoGempad";

import {useState} from "react";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {CountdownProgressTimer} from "@/shared/ui/CountdownTimer";
import LogoPowerSwap from "./LogoPowerSwap";
import {Time} from "@/shared/types/types";

const TIMER_IS_ACTIVE = false;


const startDate = {
    year: 2024,
    month: 7,
    day: 5,
    hour: 0,
    minutes: 0
} as const;

const endDate = {
    year: 2024,
    month: 8,
    day: 1,
    hour: 0,
    minutes: 0
} as const;

const formatDate = (Date: Time): string => {
    const padZero = (num: number) => (num < 10 ? '0' + num : num.toString());
    const day = padZero(Date.day);
    const month = padZero(Date.month);
    const year = Date.year.toString();


    return `${day}.${month}.${year}`;
};

const formattedStartDate = formatDate(startDate);
const formattedEndDate = formatDate(endDate);



const LaunchPad = () => {
    const [timerIsStopped, setTimerIsStopped] = useState(false);
    const handleClick = () => {
        window.open("https://discord.gg/amzvJ7UTsz", "_blank")
    }
    return (
        <div className={cls.bgWrapper}>
            <h2>Launch List</h2>
            <h3>Community projects information before going public</h3>
            <div className={cls.timeCard}>
                <LogoPowerSwap/>
                <CountdownProgressTimer
                    startDate={startDate}
                    endDate={endDate}
                    isActive={TIMER_IS_ACTIVE}
                    isStopped={() => setTimerIsStopped(true)}
                />
                <div className={cls.infoWrapper}>
                    <div className={cls.infoLeft}>
                        <h4>Quantity: --.--- Gbr</h4>
                        <p>Start date: {formattedStartDate}</p>
                    </div>
                    <div className={cls.separator}></div>
                    <div className={cls.infoRight}>
                        <h4>Price: --.---- <span>BNB</span></h4>
                        <p>End date: {formattedEndDate}</p>
                    </div>
                </div>
                <div className={cls.buttonWrapper}>
                    <Button onClick={handleClick} theme={ThemeButton.FIRE} disabled={!timerIsStopped && !TIMER_IS_ACTIVE}>
                        Join
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LaunchPad;