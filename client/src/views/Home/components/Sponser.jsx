import Siraj from "../../../assets/Siraj.png"
import Tambapanni from  "../../../assets/tambapanni.png"
export const Sponser=()=>{
    return(
        <div className="sponsors-container">
            <h1> Our Sponsors</h1>
            <div className="sponsors-group">
                <img src={Tambapanni}/>
                <img src={Siraj}/>

            </div>
        </div>
    )
}