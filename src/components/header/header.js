import React from "react";
import headerBack from '../../assets/headerBack2.png';

const Header = (props) => {
    return (
        <section className="header">
            
            <img src={headerBack} alt="moutians"/>
            <div className="perspectiveContainer">
            <div className="clouds"></div>
            </div>
            <div className="titleText"></div>
        </section>
    )
}

export default Header;

