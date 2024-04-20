import React, { useState } from 'react';
import teamOne from "../../../assets/team_one.png"

const PointsTable = () => {
    const dummyData = [
        { team: 'Team A', played: 5, win: 3, lost: 2, points: 6 },
        { team: 'Team B', played: 5, win: 4, lost: 1, points: 8 },
        { team: 'Team C', played: 5, win: 2, lost: 3, points: 4 },
        { team: 'Team D', played: 5, win: 1, lost: 4, points: 2 },
        { team: 'Team E', played: 5, win: 3, lost: 2, points: 6 },
    ];

    // Sorting function based on points and then team name
    const sortData = (data) => {
        return data.sort((a, b) => {
            if (a.points !== b.points) {
                return b.points - a.points;
            } else {
                return a.team.localeCompare(b.team);
            }
        });
    };
    const [sortedData, setSortedData] = useState(sortData(dummyData));

    return (
        <div className="points-table-container">
            <h2>Points Table</h2>
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
                {sortedData.map((teamData, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="teamName"> <img src={teamOne}/> {teamData.team}</td>
                        <td>{teamData.played}</td>
                        <td>{teamData.win}</td>
                        <td>{teamData.lost}</td>
                        <td>{teamData.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PointsTable;
