
export const MatchCard=({teamOneName,teamTwoName,score,place,date})=>{
    return(
        <div className="match-card-container">
            <img src={require(`../../assets/${teamOneName}`)} alt="teamOne"/>
            <div className="score-container">
                <h4>{date}</h4>
                <h1>{score}</h1>
                <h4>Premier league</h4>
                <p>{place}</p>
            </div>
            <img src={require(`../../assets/${teamOneName}`)} alt="teamTwo"/>
        </div>
    )
}