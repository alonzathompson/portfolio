import React from "react";
import { NavLink } from "react-router-dom";
// import page404 from '../../assets/404pageBackground.svg';
// import artraunBlue from '../../assets/artraun-blue.svg';
// import endOftheroad from '../../assets/endOftheroad.svg';
import bgHeader2 from '../../assets/blogHeader2019-optimized.svg';
// import blogLetter from '../../assets/blogHeader2019text.svg';
import logo from '../../assets/artraun.master-web-optimized.svg';
import './header.css';

const HeaderB = (props) => {
    return (
        <section className="headerB">
            <div>
                <div style={{
                    backgroundImage: `url('${bgHeader2}')`, 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%'
                }}>
                    {/* For 404 page */}
                    {/* <div style={{
                        backgroundImage: `url('${artraunBlue}')`, 
                        // backgroundSize: "15% 15%",
                        backgroundRepeat: "no-repeat",
                        width: "300px", 
                        height: "600px",
                        position: "fixed",
                        top:"50px",
                        left:"5%"
                    }}>
                    </div>

                    <div style={{
                        backgroundImage: `url('${endOftheroad}')`, 
                        backgroundSize: "80% 80%",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        width: "75%", 
                        height: "75vh",
                        position: "fixed",
                        top:"200px",
                        left:"25%",
                        marginLeft: "-12%"
                    }}> */}

                    <div onClick={props.goBack}
                        style= {{
                            position: "absolute", 
                            width: "300px",
                            top: "37px",
                            left: "-10px",
                            color: "white",
                            cursor: "pointer"

                        }}>
                        <NavLink to="/">
                            <img className="limg" src={logo} alt="artraun" height="48px" width="70%"/>
                        </NavLink>
                    </div>
                    
                    <NavLink to="/">
                        <i className="fa fa-arrow-left fa-3x arrow404 bb" 
                            onClick={props.goBack} 
                            style= {{
                                position: "absolute", 
                                right: "20px",
                                top: "32px",
                                color: "white",
                                cursor: "pointer"

                            }}
                        />
                    </NavLink>

                    <div className="blog-header-letters" style={{
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        width: "80%",
                        height: "500px",
                        marginLeft: "10%",
                        marginRight: "10%"
                    }}>
                        <h1>BLOg</h1>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeaderB;