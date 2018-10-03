import React from "react";
import page404 from '../../assets/page404.svg';

const HeaderB = (props) => {
    return (
        <section className="headerB">
            <div>
            
            <div style={{
                backgroundImage: `url('${page404}')`, 
                backgroundSize: "100vw auto",
                backgroundRepeat: "no-repeat",
                width: "100vw", 
                height: "100vh",
                position: "absolute",
                top:"0",
                left:"0",
                right:"0",
                bottom: "0"
            }}>
                <i className="fa fa-arrow-left fa-5x arrow404" 
                    onClick={props.goBack} 
                    style= {{
                        position: "absolute", 
                        right: "50px",
                        top: "50px",
                        color: "white",
                        cursor: "pointer"

                    }}
                />
            </div>
            </div>
        </section>
    )
}

export default HeaderB;