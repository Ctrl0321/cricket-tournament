import { useEffect, useState } from "react";
import {intervalToDuration, isBefore, format, differenceInDays} from 'date-fns';

export const useTicker = (futureDate) => {
    const [now, setNow] =  useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [futureDate]);

    const isTimeUp = isBefore(futureDate, now);

    if (isTimeUp) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, month: 0, isTimeUp };
    }

    let {  hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: futureDate
    });
    const daysLeft = differenceInDays(futureDate, now);

    // Format the month to include in the return object
    const formattedMonth = format(futureDate, 'MMMM');

    return { days:daysLeft, hours, minutes, seconds,  isTimeUp, formattedMonth };
};
