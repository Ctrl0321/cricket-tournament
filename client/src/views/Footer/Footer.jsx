import logo from "../../assets/Color.png";
import {contents} from "../../utils/NavBarContents";
import React from "react";

export  const Footer=({ pointsTableRef, aboutUsRef,matchesUsRef,homeRef })=>{
    const smoothScroll = (ref) => {
        console.log("ref",ref)
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return(
        <div className="footer-container">
            <div className="first-row">
                <img src={logo} alt="Logo"/>
                <h1>We unite cricket fans from all over the globe</h1>
            </div>
            <div className="social-links">
                <div className="first-col collum">
                    <h4>SOCIALS</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="second-col collum">
                    <h4>MENU</h4>
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
                            <p
                                key={index}
                                onClick={() => smoothScroll(targetRef)}
                            >
                                {link}
                            </p>
                        );
                    })}
                </div>
                <div className="mumbai-col collum">
                    <h4>SAY HELLO</h4>
                    <p>info@email.com</p>
                </div>
            </div>
            <hr/>
            <p>Mimik Creations © 2024. All rights reserved.</p>

        </div>
    )
}