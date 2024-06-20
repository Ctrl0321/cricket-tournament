import React, { useState, useRef, useEffect } from 'react';
import { LandingBanner } from './components/LaningBanner';
import { MatchCard } from '../MatchCard/MatchCard';
import PointsTable from './components/PointsTabe';
import { Sponser } from './components/Sponser';
import { AboutUs } from './components/AboutUs';
import { Footer } from '../Footer/Footer';
import {SLPL} from "./components/SLPL";


export const Home = () => {
    const [isScrollable, setIsScrollable] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const pointsTableRef = useRef(null);
    const aboutUsRef = useRef(null);
    const matchesUsRef = useRef(null);
    const homeRef = useRef(null);
    const moreDetailsRef = useRef(null);
    const [matches, setMatches] = useState([]);
    const [groupA, setGroupA] = useState([]);
    const [groupB, setGroupB] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const matchesResponse = await fetch('/matches.json');
            const matchesData = await matchesResponse.json();
            setMatches(matchesData);

            const teamsResponse = await fetch('/teams.json');
            const teamsData = await teamsResponse.json();
            setGroupA(teamsData.groupA);
            setGroupB(teamsData.groupB);
        };

        fetchData();
    }, []);


    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollOffset;
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };



    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setIsScrollable(containerRef.current.scrollWidth > containerRef.current.clientWidth - 400);
            }
        };

        handleResize();

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', () => setScrollPosition(containerRef.current.scrollLeft));
            return () => {
                containerRef.current?.removeEventListener('scroll', () => setScrollPosition(containerRef.current.scrollLeft));
            };
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePrevButtonClick = () => {
        handleScroll(-400);
    };

    const handleNextButtonClick = () => {
        handleScroll(400);
    };

    return (
        <>
            <LandingBanner pointsTableRef={pointsTableRef} aboutUsRef={aboutUsRef} matchesUsRef={matchesUsRef}
                           homeRef={homeRef} moreDetailsRef={moreDetailsRef}/>
            <Sponser/>
            <div className="recently-cards-container" ref={matchesUsRef}>
                <h1>MATCHES</h1>

                <div className="recently-added-container">
                    <p
                        className={`scroll-arrows left-arrow ${!isScrollable || scrollPosition === 0 ? 'hidden' : ''}`}
                        onClick={handlePrevButtonClick}
                    >
                        &lt;
                    </p>
                    <div className="recently-added-cards" ref={containerRef}>
                        {matches.map((match) =>
                            <MatchCard match={match}/>
                        )}
                    </div>
                    <p
                        className={`scroll-arrows right-arrow ${!isScrollable || scrollPosition >= (containerRef.current?.scrollWidth ?? 0) - (containerRef.current?.clientWidth ?? 0) ? 'hidden' : ''}`}
                        onClick={handleNextButtonClick}
                    >
                        &gt;
                    </p>
                </div>

            </div>
            <PointsTable pointsTableRef={pointsTableRef} data={groupA} title="GROUP A"/>
            <PointsTable data={groupB} title="GROUP B"/>
            <AboutUs aboutUsRef={aboutUsRef}/>
            <SLPL moreDetailsRef={moreDetailsRef}/>
            <Footer pointsTableRef={pointsTableRef} aboutUsRef={aboutUsRef} matchesUsRef={matchesUsRef}
                    homeRef={homeRef}/>
        </>
    );
};

