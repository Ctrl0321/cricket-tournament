// import Icon from "../../assets/win.png";

export const MatchCard = ({ match }) => {
    return (
        <div className="match-card-container">
            {/*{match.win === 1 && <img className="win-icon win1" src={Icon} alt="win1" />}*/}
            <img className="teamLogo" src={match.teamOneImage} alt="teamOne" />
            <div className="score-container">
                <h4>{match.date}</h4>
                <p>{match.time}</p>
                <h1>{match.score}</h1>
                <h4>Premier League</h4>
                <p>{match.place}</p>
            </div>
            {/*{match.win === 2 && <img className="win-icon win2" src={Icon} alt="win2" />}*/}
            <img className="teamLogo" src={match.teamTwoImage} alt="teamTwo" />
        </div>
    );
};
