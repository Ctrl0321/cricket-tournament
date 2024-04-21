import { useState, useRef, useEffect } from 'react';
import { LandingBanner } from './components/LaningBanner';
import { MatchCard } from '../MatchCard/MatchCard';
import PointsTabe from "./components/PointsTabe";
import {Sponser} from "./components/Sponser";
import {AboutUs} from "./components/AboutUs";
import {Footer} from "../Footer/Footer";

export const Home = () => {
    const [isScrollable, setIsScrollable] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

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
            <LandingBanner />
            <Sponser/>
            <div className="recently-added-container">
                <p
                    className={`scroll-arrows left-arrow ${!isScrollable || scrollPosition === 0 ? 'hidden' : ''}`}
                    onClick={handlePrevButtonClick}
                >
                    &lt;
                </p>
                <div className="recently-added-cards" ref={containerRef}>
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                </div>
                <p
                    className={`scroll-arrows right-arrow ${!isScrollable || scrollPosition >= (containerRef.current?.scrollWidth ?? 0) - (containerRef.current?.clientWidth ?? 0) ? 'hidden' : ''}`}
                    onClick={handleNextButtonClick}
                >
                    &gt;
                </p>
            </div>
            <PointsTabe/>
            <AboutUs/>
            <Footer/>
        </>
    );
};
