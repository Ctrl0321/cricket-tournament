import teamOne from '../../assets/TBA.jpg'
import teamTwo from '../../assets/TBA.jpg'
export const MatchCard=()=>{
    return(
        <div className="match-card-container">
            <img src={teamOne} alt="teamOne"/>
            <div className="score-container">
                <h4>TBA</h4>
                <h1>0/0 - 0/0 </h1>
                <h4>Premier league</h4>
                <p>TBA</p>
            </div>
            <img src={teamTwo} alt="teamTwo"/>
        </div>
    )
}