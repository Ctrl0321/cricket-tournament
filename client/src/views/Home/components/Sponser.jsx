import Siraj from "../../../assets/sponsors/Siraj.png"
import Tambapanni from  "../../../assets/sponsors/tambapanni.png"
import Lion from "../../../assets/sponsors/Lion.png"
import HOR from  "../../../assets/sponsors/HOR.png"
import {useEffect} from "react";


export const Sponser = () => {
    useEffect(() => {
        const group = document.querySelector('.sponsors-group');
        const clone = group.innerHTML;
        group.innerHTML += clone;
    }, []);

    return (
        <div className="sponsors-container">
            <h1>OUR SPONSORS</h1>
            <div className="sponsors-group">
                <img src={Tambapanni} alt="Thambapanni"/>
                <img src={Siraj} alt="Siraj"/>
                <img src={Lion} alt="Lion"/>
                <img src={HOR} alt="Hor"/>
                <img src={Tambapanni} alt="Thambapanni"/>
                <img src={Siraj} alt="Siraj"/>
                <img src={Lion} alt="Lion"/>
                <img src={HOR} alt="Hor"/>
                <img src={Tambapanni} alt="Thambapanni"/>
                <img src={Siraj} alt="Siraj"/>
                <img src={Lion} alt="Lion"/>
                <img src={HOR} alt="Hor"/>
            </div>
        </div>
    );
};