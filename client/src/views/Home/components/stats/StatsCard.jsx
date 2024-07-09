import React from 'react';

const StatsCard = ({ heading, players, type }) => {
    return (
        <div className="top-run-scorer">
            <div className="header-part">
                <h2>{heading}</h2>
            </div>
            <div className="body-part">
                {players.map((player, index) => (
                    <div key={index} className="player-container">
                        <div className="details-container">
                            <h3>{player.name}</h3>
                            <p>{player.team}</p>
                        </div>
                        {type === 'batting' ? (
                            <div className="score-status-container">
                                <p>{player.runs}</p>
                                <div className="score-more-details">
                                    <p>AVG: {player.average}</p>
                                    <p>SR: {player.strikeRate}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="score-status-container">
                                <p>{player.wickets}</p>
                                <div className="score-more-details">
                                    <p>AVG: {player.average}</p>
                                    <p>Eco: {player.economy}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsCard;
