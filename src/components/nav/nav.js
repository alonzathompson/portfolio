import React from 'react';
import logo from '../../assets/artraun.master-web-optimized.svg';
import './nav.css';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';

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
                ReactGA.event({
                  category: 'home',
                  action: 'Clicked Link'
                });
              }}>
              <NavLink to="/">
                <img className="limg" src={logo} alt="artraun" height="32px" width="80%"/>
              </NavLink>
            </span>
          <section style={{display: "inline-flex"}}> 
          <NavLink to="/about">
            <div className={props.navState}
              style={{color: props.nClr}}>
             <p onClick={() => {
                window.scrollTo({
                  top: document.querySelector(".basic").offsetTop + 50,
                  behavior: "smooth"
                });
                ReactGA.event({
                  category: 'about',
                  action: 'Clicked Link'
                });
              }}>
                
                  About
                
              </p>
              
            </div>
            </NavLink>
            <NavLink to="/projects">
            <div className={props.navState} 
            style={{color: props.nClr}}>
             <p onClick={() => {
                window.scrollTo({
                  top: document.querySelector(".project-list").offsetTop - 50,
                  behavior: "smooth"
                })
                ReactGA.event({
                  category: 'projects',
                  action: 'Clicked Link'
                });
             }}>
              
                Projects
              
              </p>
            </div>
            </NavLink>
            <NavLink to="/contact" style={{color: props.nClr}}>
            <div className={props.navState}
              style={{color: props.nClr}}>
              <p onClick={() => {
                  window.scrollTo({
                    top: document.querySelector(".block2").offsetTop - 100,
                    behavior: "smooth"
                  })
                  ReactGA.event({
                    category: 'contact',
                    action: 'Clicked Link'
                  });
              }}>
                
                    Contact
                
              </p>
            </div>
            </NavLink>
            <NavLink to="/blog" style={{color: props.nClr}}>
            <div className={props.navState}
            style={{color: props.nClr}}>
             <p onClick={() => {
                 window.scrollTo({
                  top: 0
                 })

                 setTimeout(() => {
                  props.blogSwitch()
                 }, 500)
             }}>
                
                Blog
               
              </p>
            </div>
            </NavLink>
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
                ReactGA.event({
                  category: 'about from mobile',
                  action: 'Clicked Link'
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

                ReactGA.event({
                  category: 'projects from mobile',
                  action: 'Clicked Link'
                });
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
                ReactGA.event({
                  category: 'contacts from mobile',
                  action: 'Clicked Link'
                });
             }}>
                Contact
              </p>
            </div>
            <div className={props.navState}
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

                 ReactGA.event({
                  category: 'from mobile',
                  action: 'Clicked Link'
                });
             }}>
                Blog
              </p>
            </div>
        </div>
        </div>
      </div>
    )
  }

export default Nav;