import React from 'react';
import StatsCard from "./stats/StatsCard";

export const Stats = ({ battingStats, bowlingStats }) => {
    return (
        <div className="stats-full-container">
            <h1>STATS</h1>

            <div className="stats-container">
                <StatsCard players={battingStats} heading="MOST RUNS" type="batting"/>
                <StatsCard players={bowlingStats} heading="MOST WICKETS" type="bowling"/>
            </div>
        </div>
    );
};
