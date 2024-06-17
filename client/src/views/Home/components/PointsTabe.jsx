import React, {useCallback, useState} from 'react';
import teamOne from "../../../assets/TBA.jpg";
import ceylonFalcons from "../../../assets/teams/SLPL - Ceylon Falcons.png";
import ceylonSportsClub from "../../../assets/teams/SLPL -Ceylon Sports Club.png";
import islandRangers from "../../../assets/teams/SLPL - Island Rangers.png";
import kandySportsClub from "../../../assets/teams/SLPL - Kandy Sports Club.png";
import lankaEagles from "../../../assets/teams/SLPL - Lanka Eagles.png";
import leosCricketClub from "../../../assets/teams/SLPL - Leos Cricket Club.png";
import lionHearts from "../../../assets/teams/SLPL - Lion hearts.png";
import safaXi from "../../../assets/teams/SLPL - SAFA XI.png";
import scorpios from "../../../assets/teams/SLPL - scorpios.png";
import sebsInUae from "../../../assets/teams/SLPL - Sebs in uae.png";
import serandibKnights from "../../../assets/teams/SLPL - Serendib Knights.png";
import singhaCC from "../../../assets/teams/SLPL - Singha CC.png";
import thambapanniLions from "../../../assets/teams/SLPL - thambapanni lions.png";
import uaeLions from "../../../assets/teams/SLPL - UAE LIONS.png";
import  usccMaroon from "../../../assets/teams/SLPL - USCC Maroon.png";



const PointsTable = ({pointsTableRef}) => {
    const dummyData = [
        { team: 'Ceylon Falcons',logo:ceylonFalcons, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Ceylon Sports Club',logo:ceylonSportsClub, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Island Rangers',logo:islandRangers, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Kandy Sports Club',logo:kandySportsClub, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Lanka Eagles',logo:lankaEagles, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Leos Cricket Club',logo:leosCricketClub, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Lion Hearts',logo:lionHearts, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Safa XI',logo:safaXi, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Scorpios',logo:scorpios, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Sebs In UAE',logo:sebsInUae, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Serendib Knights',logo:serandibKnights, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Singha CC',logo:singhaCC, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'Thambapanni Lions',logo:thambapanniLions, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'UAE Lions',logo:uaeLions, played: 0, win: 0, lost: 0, points: 0 },
        { team: 'USCC Lions',logo:usccMaroon, played: 0, win: 0, lost: 0, points: 0 },
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
                        <td className="teamName"> <img src={teamData.logo}/> {teamData.team}</td>
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
