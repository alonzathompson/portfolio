import React, { Component } from 'react';
import Nav from './components/nav/nav.js';
import Body from './components/body.js';
import LoaderA from './components/screenLoaders/loaderA.js';
import './App.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: "block",
      ffClass: null,
      btnIcon: null,
      showLoader: "block",
      projects: [
        {name:`projectA`},
        {name: "projectB"},
        {name: "projectC"}
      ],
      navShow: "none",
      middleA: "",
      clouds: "cloudAnim 20s linear infinite",
      fadeWords: ""
    }
  }
  
  componentDidMount() {
    window.addEventListener("load", function() { window. scrollTo(0, 0); });
    window.addEventListener("scroll", (e) => {
      if(window.scrollY >= 500){
        this.setState({
          clouds: ""
        })
      } else {
        this.setState({
          clouds: "cloudAnim 20s linear infinite"
        })
      }
    })

    window.addEventListener("wheel", (e) => {
      if(e.deltaY > 0 || e.deltaY < 0){
        this.setState({
          navShow: "none"
        })
      }
    },{
      capture: true,
      passive: true
    })

    this.handleLoader();
  }
  
  throttle(func, limit) {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
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

  handleLoader(){
    setTimeout(() => {
      this.setState({
        showLoader: "none"
      })
    }, 6000);
  }
  
  render() {
    return (
      <div>
        <LoaderA 
          isLoading={this.state.showLoader}
        />
        <Nav showNav={this.state.navShow} handleClick={this.handleNav.bind(this)}/>
        <Body 
          proj={this.state.projects} 
          hMid={this.state.middleA}
          test={"testz"}
          cloudAnimation={this.state.clouds}
        />
      </div>
    );
  }
}

export default App;
