import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Nav from './components/nav/nav.js';
import Body from './components/body.js';
import BodyB from './components/body2.js';
import './App.css';
import smoothscroll from 'smoothscroll-polyfill';
import { BrowserRouter } from 'react-router-dom';

smoothscroll.polyfill();

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: "block",
      ffClass: null,
      btnIcon: null,
      projects: [
        {name:`projectA`},
        {name: "projectB"},
        {name: "projectC"}
      ],
      navShow: "block",
      navSecShow: "none",
      middleA: "",
      clouds: "cloudAnim 20s linear infinite",
      fadeWords: "",
      navBackground: "",
      navColor: "white",
      navHover: "nav-tab",
      logoS: "lgScale",
      mobileNav: "none",
      mobileNavClick: 1,
      mobileButtonNavColor: "white",
      mobileBtnClass:"",
      mobileBtnSpacing: "18px",
      switch: "absolute",
      body1Show: "block",
      body1: `translateX(0)`,
      body2Show: "none",
      body2: `translateX(800vh)`,
      closeProjectWindow: ``,
      rotation: ``
    }

    this.handleMobileNav = this.handleMobileNav.bind(this);
    this.handleNav = this.handleNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.closeMobileOnClick = this.closeMobileOnClick.bind(this);
    this.handleBlog = this.handleBlog.bind(this);
    this.blogShow = this.blogShow.bind(this);
    this.mainShow = this.mainShow.bind(this);
    this.cancelProjectShow = this.cancelProjectShow.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      this.closeMobileNav()
      if(window.scrollY > window.innerHeight - 200) {
        this.setState({
          navBackground: "nav-switch",
          navColor: "#0775B2",
          navHover: "nav-tab2",
          mobileButtonNavColor: "#0775B2",
          mobileBtnClass:"mobile-nav-color",
          logoS: "",
          mobileBtnSpacing: "0",
          navSecShow: "block"
        })
        
      } else {
        this.setState({
          navBackground: "",
          navSecShow: "none",
          navColor: "white",
          navHover: "nav-tab",
          mobileButtonNavColor: "white",
          mobileBtnClass:"",
          logoS: "lgScale",
          mobileBtnSpacing: "18px"
        })
      }
    },{
      capture: true,
      passive: true
    });

    window.addEventListener("click", (e) => {
        if(this.state.mobileNavClick % 2 === 0){
         this.closeMobileNav();
        }

        console.log("mobile nav click ", this.state.mobileNavClick)
    });
  }

  //handle Nav 
  handleNav() {
    if(this.state.navShow === "none"){
      this.setState({
        navShow: "flex"
      })
    } else if(this.state.navShow === "flex"){
      this.setState({
        navShow: "none"
      })
    }
  }

  handleMobileNav() {
    if(this.state.mobileNav !== "flex"){
      this.setState({
        mobileNav: "flex",
        mobileButtonNavColor: "#0775B2",
        rotation: `rotate(90deg)`
      })
      this.cancelProjectShow();
    } else {
      if(window.scrollY > window.innerHeight - 200) {
        this.setState({
          mobileNav: "none",
          mobileButtonNavColor: "#0775B2",
          rotation: `rotate(0deg)`
        })
      } else {
        this.setState({
          mobileNav: "none",
          mobileButtonNavColor: "white",
          rotation: `rotate(0deg)`
        })
      }
    }
  }

  closeMobileNav() {
    this.setState({
      mobileNav: "none",
      rotation: `rotate(0deg)`
    })
  }

  closeMobileOnClick() {
    if(this.state.mobileNav === "flex"){
      this.closeMobileNav();
    }
    ReactGA.event({
      category: 'closed from mobile',
      action: 'Clicked Link',
    });
  }

  closeProjectShow() {
    this.setState({
      closeProject: true
    })
    ReactGA.event({
      category: 'closed project',
      action: 'Clicked Link',
    });
  }

  blogShow() {
    ReactGA.event({
      category: 'blog',
      action: 'Clicked Link',
    });
    
    this.setState({
      body1: "translateX(-800vh)",
      body2Show: "block",
      navShow: "none"
      })

      setTimeout(() => {
        this.setState({
          body1Show: "none",
          body2: "translateX(0)"
        })
      }, 1000)
  }

  mainShow() {
    this.setState({
      body2: "translateX(800vh)",
      body1Show: "block"
      })

      setTimeout(() => {
        this.setState({
          body2Show: "none",
          body1: "translateX(0)",
          navShow: "block"
        })
        window.location.hash = "";
      }, 1000)
  }

  handleBlog() {
    if(this.state.body2Show !== "block"){
      this.blogShow();
      ReactGA.event({
        category: 'Opened blog',
        action: 'Clicked Link',
      });
    } else if(this.state.body2Show === "block"){
      this.mainShow();
      ReactGA.event({
        category: 'closed blog',
        action: 'Clicked Link',
      });
    }
  }

  cancelProjectShow() {
    this.setState({
      closeProjectWindow: "none"
    })
  }

  
  render() {
    return (
      <BrowserRouter>
      <div onClick={this.closeMobileOnClick}>
        <Nav 
          showNav={this.state.navShow} 
          navState={this.state.navHover}
          handleScroll={this.handleNav}
          nBg = {this.state.navBackground}
          nClr = {this.state.navColor}
          nHover = {this.state.navHover}
          logoScale={this.state.logoS}

          mobileNavShow = {this.state.mobileNav}
          mobileHandle = {this.handleMobileNav}
          mobileClose = {this.closeMobileNav}
          mobileBtnNavColor = {this.state.mobileButtonNavColor}
          mobileBtnS = {this.state.mobileBtnSpacing}
          mobileBtnCl = {this.state.mobileBtnClass}
          navSec = {this.state.navSecShow}
          rot = {this.state.rotation}

          blogSwitch = {this.handleBlog}
          closeProject= {this.cancelProjectShow}
        />
        <div className="bodyBackgroundHolder">

          <div className="bodyBackgroundText"></div>
        </div>
          {<Body 
            proj={this.state.projects} 
            hMid={this.state.middleA}
            test={"testz"}
            switchB1State = {this.state.body1}
            showB1State = {this.state.body1Show}
            closeUpProject = {this.state.closeProjectWindow}
          >  
          </Body>}
    
          {<BodyB 
            switchB2State = {this.state.body2}
            showB2State = {this.state.body2Show}
            showMain = { this.mainShow}
          >
          </BodyB>}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
