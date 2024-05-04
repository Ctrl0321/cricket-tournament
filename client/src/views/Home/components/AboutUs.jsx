import React, { useState } from 'react';
import club from "../../../assets/D-Club-Logo-3.png";

export const AboutUs = ({ aboutUsRef }) => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);

    return (
        <div className="about-us-container" ref={aboutUsRef}>
            <h1>About Us</h1>
            <img src={club} alt="D Club Logo"/>
            <p>
                D Club emerges as a beacon of passion and dedication within the vibrant cricketing landscape of
                the United Arab Emirates (UAE). Founded by two esteemed professional cricketers, whose journey
                in the cricketing world has been nothing short of remarkable, D Club embodies a profound
                commitment to giving back to the sport that has shaped their lives.
            </p>
            <p>
                Steeped in the spirit of camaraderie and excellence, D Club stands as a testament to the
                unwavering dedication of its founders, who have traversed the highs and lows of professional
                cricket, both on and off the field. As proud members of the Sri Lankan cricketing fraternity, their
                vision extends beyond personal triumphs, aiming instead to nurture and empower the burgeoning
                talent within the Sri Lankan community in the UAE.
            </p>
            {/*{showMore && (*/}
                <div className={`second-para ${showMore ? "visible" : ""}`}>
                    <p>
                        Recognizing the pivotal role that cricket plays in fostering unity and camaraderie among diverse
                        communities, D Club embarks on a noble mission to organize cricket tournaments that serve as
                        platforms for aspiring cricketers to showcase their skills and unlock their full potential. With
                        a deep
                        seated belief in the transformative power of sport, D Club endeavours to create opportunities
                        for
                        local talent to thrive, thereby contributing meaningfully to the cricketing community that once
                        nurtured them.
                    </p>
                    <p>
                        In essence, D Club's foray into cricket tournament organization is not merely a business
                        endeavour
                        but a heartfelt endeavour to give back, to inspire, and to uplift. Through their unwavering
                        commitment to fostering talent and promoting sportsmanship, D Club paves the way for a brighter,
                        more inclusive future for cricket in the UAE, guided by the enduring values of passion,
                        perseverance,
                        and community spirit.
                    </p>
                </div>
            {/*)}*/}
            <button onClick={toggleShowMore}>
                {showMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};
