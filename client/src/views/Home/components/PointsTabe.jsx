import React, { useState, useEffect } from 'react';

const PointsTable = ({ pointsTableRef, data, title }) => {

    const sortData = (data) => {
        return data.sort((a, b) => {
            if (a.points !== b.points) {
                return b.points - a.points;
            } else {
                return a.team.localeCompare(b.team);
            }
        });
    };

    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setSortedData(sortData([...data]));
        }
    }, [data]);

    return (
        <div className="points-table-container" ref={pointsTableRef}>
            <p>{title}</p>
            <h2>SRILANKAN PREMIER LEAGUE</h2>
            <table className="points-table">
                <thead>
                <tr>
                    <th colSpan={6}></th>
                </tr>
                <tr>
                    <th colSpan={6}>SRILANKAN PREMIER LEAGUE 2024</th>
                </tr>
                <tr>
                    <th>Pos</th>
                    <th>Team</th>
                    <th>E</th>
                    <th>W</th>
                    <th>L</th>
                    <th>P</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.length > 0 ? (
                    sortedData.map((teamData, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="teamName">
                                <img src={teamData.logo} alt={teamData.team} /> {teamData.team}
                            </td>
                            <td>{teamData.played}</td>
                            <td>{teamData.win}</td>
                            <td>{teamData.lost}</td>
                            <td>{teamData.points}</td>
                        </tr>
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
