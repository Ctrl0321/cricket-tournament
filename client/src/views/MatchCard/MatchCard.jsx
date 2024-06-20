
export const MatchCard=({match})=>{
    return(
        <div className="match-card-container">
            <img src={match.teamOneImage} alt="teamOne"/>
            <div className="score-container">
                <h4>{match.date}</h4>
                <p>{match.time}</p>
                <h1>{match.score}</h1>
                <h4>Premier league</h4>
                <p>{match.place}</p>
            </div>
            <img src={match.teamTwoImage} alt="teamTwo"/>
        </div>
    )
}