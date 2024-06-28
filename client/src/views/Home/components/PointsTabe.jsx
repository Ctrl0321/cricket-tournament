import React, { useState, useEffect } from 'react';

const PointsTable = ({ pointsTableRef, data, title }) => {
    const sortData = (data) => {
        return data.sort((a, b) => {
            if (a.points !== b.points) {
                return b.points - a.points;
            } else if (a.NRR !== b.NRR) {
                return b.NRR - a.NRR;
            } else {
                return a.team.localeCompare(b.team);
            }
        });
    };

    const [sortedData, setSortedData] = useState([]);
    const [expandedTeam, setExpandedTeam] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            setSortedData(sortData([...data]));
        }
    }, [data]);

    const handleTeamClick = (team) => {
        setExpandedTeam(expandedTeam === team ? null : team);
    };


    return (
        <div className="points-table-container" ref={pointsTableRef}>
            {/*<p>{title}</p>*/}
            <h2>SRILANKAN PREMIER LEAGUE</h2>
            <table className="points-table">
                <thead>
                <tr>
                    <th colSpan={7}></th>
                </tr>
                <tr>
                    <th colSpan={7}>{title}</th>
                </tr>
                <tr>
                    <th>Pos</th>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>P</th>
                    <th>NRR</th>

                </tr>
                </thead>
                <tbody>
                {sortedData.length > 0 ? (
                    sortedData.map((teamData, index) => (
                        <React.Fragment key={index}>
                            <tr onClick={() => handleTeamClick(teamData.team)}>
                                <td>{index + 1}</td>
                                <td className="teamName">
                                    <img src={teamData.logo} alt={teamData.team} /> {teamData.team}
                                </td>
                                <td>{teamData.played}</td>
                                <td>{teamData.win}</td>
                                <td>{teamData.lost}</td>
                                <td>{teamData.points}</td>
                                <td>{teamData.NRR}</td>
                            </tr>
                            {expandedTeam === teamData.team && (
                                <tr>
                                    <td colSpan={6}>
                                        <div className="team-players">
                                            <h3>{teamData.team} Players</h3>
                                            <ul>
                                                {sortedData.find(team => team.team === teamData.team).players.map((player, idx) => (
                                                    <li key={idx}>{player}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6}>No data available</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default PointsTable;
