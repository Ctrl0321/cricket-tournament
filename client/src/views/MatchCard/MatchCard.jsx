import teamOne from '../../assets/team_one.png'
import teamTwo from '../../assets/team_two.png'
export const MatchCard=()=>{
    return(
        <div className="match-card-container">
            <img src={teamOne} alt="teamOne"/>
            <div className="score-container">
                <h4>Aug 25,2023</h4>
                <h1>140 -110 </h1>
                <h4>Premier league</h4>
                <p>Colombo</p>
            </div>
            <img src={teamTwo} alt="teamTwo"/>
        </div>
    )
}