import React from 'react';
import StatsCard from "./stats/StatsCard";

export const Stats = ({ battingStats, bowlingStats }) => {
    return (
        <div className="stats-full-container">
            <StatsCard players={battingStats} heading="MOST RUNS" type="batting" />
            <StatsCard players={bowlingStats} heading="MOST WICKETS" type="bowling" />
        </div>
    );
};
