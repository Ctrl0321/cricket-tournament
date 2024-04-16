import React from "react";
import { contents } from "../../utils/NavBarContents";
import Logo from "../../assets/Color.png";

export const Navigation = () => {
    return (
        <div className="navigation-container">
            <img alt="Logo" src={Logo} />
            <div className="nav-links">
                {contents.links.map((link, index) => (
                    <a className="nav-link" key={index} href={`/${link.toLowerCase()}`}>{link}</a>
                ))}
            </div>
        </div>
    );
};
