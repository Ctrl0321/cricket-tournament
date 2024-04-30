import React, { useState } from 'react';
import teamOne from "../../../assets/TBA.jpg"

const PointsTable = ({pointsTableRef}) => {
    const dummyData = [
        { team: 'TBA', played: 0, win: 0, lost: 0, points: 0 },
        { team: 'TBA', played: 0, win: 0, lost: 0, points: 0 },
        { team: 'TBA', played: 0, win: 0, lost: 0, points: 0 },
        { team: 'TBA', played: 0, win: 0, lost: 0, points: 0 },
        { team: 'TBA', played: 0, win: 0, lost: 0, points: 0 },
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
        <div className="points-table-container" ref={pointsTableRef}>
            <p>TABLE</p>
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
