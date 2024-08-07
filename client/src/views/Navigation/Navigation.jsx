import React, { useState } from "react";
import { contents } from "../../utils/NavBarContents";
import Logo from "../../assets/Color.png";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import Logo2 from "../../assets/Black.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navigation = ({ pointsTableRef, aboutUsRef, matchesUsRef, homeRef }) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const smoothScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
            <div className="navigation-container">
                <img alt="Logo" src={Logo} />
                <div className="nav-links">
                    {contents.links.map((link, index) => {
                        let targetRef = null;
                        if (link.toLowerCase() === 'points table') {
                            targetRef = pointsTableRef;
                        } else if (link.toLowerCase() === 'about us') {
                            targetRef = aboutUsRef;
                        } else if (link.toLowerCase() === 'matches') {
                            targetRef = matchesUsRef;
                        } else if (link.toLowerCase() === 'home') {
                            targetRef = homeRef;
                        }

                        return link.toLowerCase() === 'gallery' ? (
                            <Link className="nav-link" key={index} to="/gallery">
                                {link}
                            </Link>
                        ) : (
                            <a
                                className="nav-link"
                                key={index}
                                href={`/#${link.toLowerCase()}`}
                                onClick={() => smoothScroll(targetRef)}
                            >
                                {link}
                            </a>
                        );
                    })}
                </div>
                <div className="menu-icon">
                    <CgMenuGridO size={40} onClick={toggleMobileNav} />
                </div>
            </div>
            <div className={`mobile-nav ${isMobileNavOpen ? "open-nav" : ""}`}>
                <div className="close-mobile-nav">
                    <img src={Logo2} />
                    <IoCloseSharp size={35} color="black" onClick={toggleMobileNav} />
                </div>
                <div className="nav-links-mobile">
                    {contents.links.map((link, index) => {
                        let targetRef = null;
                        if (link.toLowerCase() === 'points table') {
                            targetRef = pointsTableRef;
                        } else if (link.toLowerCase() === 'about us') {
                            targetRef = aboutUsRef;
                        } else if (link.toLowerCase() === 'matches') {
                            targetRef = matchesUsRef;
                        } else if (link.toLowerCase() === 'home') {
                            targetRef = homeRef;
                        }

                        return link.toLowerCase() === 'gallery' ? (
                            <Link className="nav-link" key={index} to="/gallery" onClick={() => setMobileNavOpen(false)}>
                                {link}
                                <IoIosArrowForward color="black" />
                            </Link>
                        ) : (
                            <div
                                className="mobile-link"
                                onClick={() => {
                                    smoothScroll(targetRef);
                                    setMobileNavOpen(false);
                                }}
                            >
                                <a className="nav-link" key={index} href={`/#${link.toLowerCase()}`}>
                                    {link}
                                </a>
                                <IoIosArrowForward color="black" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
