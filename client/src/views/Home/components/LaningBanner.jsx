import React from 'react';
import { Navigation } from "../../Navigation/Navigation";
import { Ticker } from "../../countdown/components/Ticker";

export const LandingBanner = ({ pointsTableRef, aboutUsRef,matchesUsRef,homeRef }) => {
    // Specify your desired future date here
    const futureDate = new Date('2024-06-28T16:31:43'); // Ensure the correct format and time zone

    return (
        <div className="landing-banner-container" ref={homeRef}>
            <Navigation aboutUsRef={aboutUsRef} pointsTableRef={pointsTableRef} matchesUsRef={matchesUsRef} homeRef={homeRef} />
            <div className="banner-wording-container">
                <div className="banner-wording">
                    <h1 className="first-header">Get ready for the game </h1>
                    <h1 className="second-header">of your life!</h1>
                    <p>This championship is going to be broadcast on national TV! Stay tuned to watch the .</p>
                    <button>MORE INFORMATION</button>
                </div>
                <div className="count-down-container">
                    <Ticker futureDate={futureDate} />
                </div>
            </div>
        </div>
    );
};
