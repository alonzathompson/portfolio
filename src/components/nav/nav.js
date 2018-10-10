import React from 'react';
import logo from '../../assets/Artraun.svg';
import './nav.css';

const Nav = (props) => {
    return (
      <div>
      <div className={`nav-holder ${props.nBg}`} style={{display: props.showNav}}>
        <nav>
          <div className="nav-button">
            <span className={`nav-logo ${props.logoScale}`} onClick={() => {
                props.mobileClose();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}>
              <img className="limg" src={logo} alt="artraun" height="32px" width="80%"/>
            </span>
          <section style={{display: "inline-flex"}}> 
            <div className={props.navState}
            style={{color: props.nClr}}>
             <p onClick={() => {
                window.scrollTo({
                  top: document.querySelector(".basic").offsetTop + 50,
                  behavior: "smooth"
                });
              }}>
                About
              </p>
            </div>
            <div className={props.navState} 
            style={{color: props.nClr}}>
             <p onClick={() => {
                window.scrollTo({
                  top: document.querySelector(".project-list").offsetTop - 50,
                  behavior: "smooth"
                })
             }}>
                Projects
              </p>
            </div>
            <div className={props.navState}
            style={{color: props.nClr}}>
             <p onClick={() => {
                window.scrollTo({
                  top: document.querySelector(".block2").offsetTop - 100,
                  behavior: "smooth"
                })
             }}>
                Contact
              </p>
            </div>
            {/*<div className={props.navState}
            style={{color: props.nClr}}>
             <p onClick={() => {
                 window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                 })

                 setTimeout(() => {
                  props.blogSwitch()
                 }, 1000)
             }}>
                Blog
              </p>
            </div>*/}
          </section>
            <span className="mobile-nav-button" 
              onClick={props.mobileHandle}
              style={{marginTop: props.mobileBtnS, transform: props.rot, transition: `.2s all ease-in`}}>
              <i className={`fa fa-bars fa-3x nav-mobile ${props.mobileBtnCl}`} aria-hidden="true" style={{color: props.mobileBtnNavColor}}></i>
            </span>
         </div> 
        </nav>
      </div>
      <div className={`mobile-selection-holder`} 
        style={{display: props.mobileNavShow}}
      >
        <div className={`mobile-selection `} style={{backgroundColor: props.nBg}}>
        <div className={props.navState}
            style={{color: props.mobileBtnNavColor}}>
             <p onClick={() => {
               props.mobileClose();
                window.scrollTo({
                  top: document.querySelector(".basic").offsetTop + 50,
                  behavior: "smooth"
                });
              }}>
                About
              </p>
            </div>
            <div className={props.navState} 
            style={{color: props.mobileBtnNavColor}}>
             <p onClick={() => {
               props.mobileClose();
                window.scrollTo({
                  top: document.querySelector(".project-list").offsetTop - 50,
                  behavior: "smooth"
                })
              }}>
                Projects
              </p>
            </div>
            <div className={props.navState}
            style={{color: props.mobileBtnNavColor}}>
             <p onClick={() => {
               props.mobileClose();
                window.scrollTo({
                  top: document.querySelector(".block2").offsetTop - 100,
                  behavior: "smooth"
                })
             }}>
                Contact
              </p>
            </div>
            {/*<div className={props.navState}
            style={{color: props.mobileBtnNavColor}}>
             <p onClick={() => {
               props.mobileClose();
                 window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                 })

                 setTimeout(() => {
                  props.blogSwitch()
                 }, 1000);
             }}>
                Blog
              </p>
            </div>*/}
        </div>
        </div>
      </div>
    )
  }

export default Nav;