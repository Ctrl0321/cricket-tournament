import {Navigation} from "../../Navigation/Navigation";
import {FlippCountdown} from "./FlipCount";

export const LandingBanner=()=>{
    return(
        <div className="landing-banner-container">
           <Navigation/>
            <div className="banner-wording-container">
                <div className="banner-wording">
                    <h1 className="first-header">Get ready for the game </h1>
                    <h1 className="second-header">of your life!</h1>
                    <p>This championship is going to be broadcast on national TV! Stay tuned to watch the unforgettable battle of the champions.</p>
                    <button>MORE INFORMATION</button>
                </div>
                <div className="count-down-container">
                    {/*<FlippCountdown/>*/}
                </div>
            </div>
        </div>
    )
}