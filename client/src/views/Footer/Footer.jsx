import logo from "../../assets/Color.png"
export  const Footer=()=>{
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
                    <p>Home</p>
                    <p>Matches</p>
                    <p>Points table</p>
                    <p>About us</p>
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