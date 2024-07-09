import { useEffect, useState } from "react";

type TimerValues = {

    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownType = {
    timerStopped: boolean;
    timer: TimerValues;
};

const useCountdown = (targetDate: string): CountdownType => {
    const endDate = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
        const difference = endDate - new Date().getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [timerStopped, setTimerStopped] = useState(false);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                setTimerStopped(true);
                clearInterval(timerInterval);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [endDate]);

    return {
        timerStopped,
        timer: timeLeft,
    };
};

export {useCountdown}
