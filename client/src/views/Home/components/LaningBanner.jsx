import {Navigation} from "../../Navigation/Navigation";
import {FlippCountdown} from "./FlipCount";
import {Ticker} from "../../countdown/components/Ticker";
import {add} from "date-fns";

export const LandingBanner=()=>{
    const futureDate = add(new Date(), {
        days: 6,
        hours: 22,
        minutes: 40
    });
    return(
        <div className="landing-banner-container">
           <Navigation/>
            <div className="banner-wording-container">
                <div className="banner-wording">
                    <h1 className="first-header">Get ready for the game </h1>
                    <h1 className="second-header">of your life!</h1>
                    <p>This championship is going to be broadcast on national TV! Stay tuned to watch the .</p>
                    <button>MORE INFORMATION</button>
                </div>
                <div className="count-down-container">
                    <Ticker futureDate={futureDate}/>
                </div>
            </div>
        </div>
    )
}