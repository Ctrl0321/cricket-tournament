import { Navigation } from "../../Navigation/Navigation";
import { GalleryCard } from "./gallery/GalleryCard";
import React, { useEffect, useState } from "react";
import {contents} from "../../../utils/NavBarContents";
import {Link} from "react-router-dom";
import {CgMenuGridO} from "react-icons/cg";
import {IoCloseSharp} from "react-icons/io5";
import Logo from "../../../assets/Color.png";
import Logo2 from "../../../assets/Black.png";
import {IoIosArrowForward} from "react-icons/io";



export const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        const fetchData = async () => {
            const galleryResponse = await fetch('/gallery.json');
            const galleryData = await galleryResponse.json();
            setGalleryData(galleryData);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="gallery-header-component">
                <div className="navigation-container">
                    <img alt="Logo" src={Logo} />
                    <div className="nav-links">
                        {contents.links.map((link, index) => (
                            <Link
                                className="nav-link"
                                key={index}
                                to={link.toLowerCase() === 'gallery' ? '/gallery' : `/#${link.toLowerCase()}`}
                            >
                                {link}
                            </Link>
                        ))}
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
                        {contents.links.map((link, index) => (
                            <Link
                                className="nav-link"
                                key={index}
                                to={link.toLowerCase() === 'gallery' ? '/gallery' : `/#${link.toLowerCase()}`}
                                onClick={() => setMobileNavOpen(false)}
                            >
                                {link}
                                <IoIosArrowForward color="black" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <h1 className="gallery-header">SLPL 2024</h1>

            <div className="gallery-body-container">
                {galleryData.map((gallery, index) => (
                    <GalleryCard
                        key={index}
                        image={gallery.image}
                        name={gallery.name}
                        link={gallery.link}
                    />
                ))}
            </div>
        </>
    );
};
