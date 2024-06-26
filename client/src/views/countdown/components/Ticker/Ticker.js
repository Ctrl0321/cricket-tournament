import { TickerCell } from '../TickerCell';
import { TickerSeparator } from '../TickerSeparator';
import { useTicker } from '../../hooks';

import style from './Ticker.module.scss';

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className={ style.timeIsUp }>Happening Now!!!</div>
    ) : (
        <>
            {/*<TickerCell value={months} label="Months" />*/}
            <TickerCell value={days} label="Days" />
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" />
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" />
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (
        <div className={ style.tickerShell }>
            { tickerContents }           
        </div>              
    );
}