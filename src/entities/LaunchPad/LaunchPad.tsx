"use client"
import cls from "./LaunchPad.module.scss";
import LogoGemPad from "./LogoGempad";

import {useState} from "react";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {CountdownProgressTimer} from "@/shared/ui/CountdownTimer";
import {NumericRange} from "@/shared/types/types";

const endTime = {
    year: 2023,
    month: 11,
    day: 20,
    hour: 23,
    minutes: 45
} as const;

const LaunchPad = () => {
    const [timerIsStopped, setTimerIsStopped] = useState(false);
    const handleClick = () => {
        window.open("https://google.com", "_blank")
    }
    return (
        <div className={cls.bgWrapper}>
            <h2>Launch Pad</h2>
            <h3>For the first time, the GBR token will be offered to a wide range of investors through the Launch Pad platforms.</h3>
            <div className={cls.timeCard}>
                <LogoGemPad />
                <CountdownProgressTimer
                    year={endTime.year}
                    month={endTime.month}
                    day={endTime.day}
                    hour={endTime.hour}
                    minutes={endTime.minutes}
                    isStopped={() => setTimerIsStopped(true)}
                />
                <div className={cls.infoWrapper}>
                    <div className={cls.infoLeft}>
                        <h4>Quantity: 9B Gbr</h4>
                        <p>Start date: 12.10.2024</p>
                    </div>
                    <div className={cls.separator}></div>
                    <div className={cls.infoRight}>
                        <h4>Price: 0.00002286 <span>BNB</span></h4>
                        <p>End date: 30.10.2028</p>
                    </div>
                </div>
                <div className={cls.buttonWrapper}>
                    <Button onClick={handleClick} theme={ThemeButton.FIRE} disabled={!timerIsStopped}>
                        Join
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LaunchPad;