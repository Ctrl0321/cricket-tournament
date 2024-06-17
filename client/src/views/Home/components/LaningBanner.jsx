import React from 'react';
import { Navigation } from "../../Navigation/Navigation";
import { Ticker } from "../../countdown/components/Ticker";

export const LandingBanner = ({ pointsTableRef, aboutUsRef,matchesUsRef,homeRef,moreDetailsRef }) => {
    const smoothScroll = (ref) => {
        console.log("ref",ref)
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const futureDate = new Date('2024-06-23T16:31:43');
    console.log("aat",futureDate)

    return (
        <div className="landing-banner-container" ref={homeRef}>
            <Navigation aboutUsRef={aboutUsRef} pointsTableRef={pointsTableRef} matchesUsRef={matchesUsRef} homeRef={homeRef} />
            <div className="banner-wording-container">
                <div className="banner-wording">
                    <h1 className="first-header">Get ready for the game </h1>
                    <h1 className="second-header">of your life!</h1>
                    <p>This championship is going to be broadcast on national TV! Stay tuned to watch the .</p>
                    <button onClick={()=>smoothScroll(moreDetailsRef)}>MORE INFORMATION</button>
                </div>
                <div className="count-down-container">
                    <Ticker futureDate={futureDate} />
                </div>
            </div>
        </div>
    );
};
