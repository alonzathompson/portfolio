import React from 'react';
import './content.css';

const Basic1 = (props) => {
    return (
        <section className="basic">
            <div>
                <h1>Us <span style={{background: "#007bff", textShadow: "3px 10px 10px rgba(0,0,0,.9)", color: "#f0f0f0" }}>></span></h1>
                <h2>The Fight</h2>
                <p>
                    We have begun the beautful journey of being able to turn ideas into tangible solutions. 
                  The struggle to make sense of all the principles that recursively compound on one another can be daunting,
                  but we are in it for the long haul. Controlling the machine and creating technology; on all levels, for all levels.
                </p>
                
            </div>
        </section>
    )
}

export default Basic1;

