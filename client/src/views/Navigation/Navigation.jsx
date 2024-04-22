import React from "react";
import {contents} from "../../utils/NavBarContents";
import Logo from "../../assets/Color.png";

export const Navigation = ({ pointsTableRef, aboutUsRef,matchesUsRef,homeRef }) => {
    const smoothScroll = (ref) => {
        console.log("ref",ref)
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <div className="navigation-container">
            <img alt="Logo" src={Logo}/>
            <div className="nav-links">
                {contents.links.map((link, index) => {
                    let targetRef = null;
                    if (link.toLowerCase() === 'points table') {
                        targetRef = pointsTableRef;
                    } else if (link.toLowerCase() === 'about us') {
                        targetRef = aboutUsRef;
                    }
                    else if (link.toLowerCase()==='matches'){
                        targetRef=matchesUsRef
                    }
                    else if (link.toLowerCase()==='home'){
                        targetRef=homeRef
                    }
                    return (
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
        </div>
    );
};
