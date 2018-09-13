import React, { Component } from 'react';
import Nav from './components/nav/nav.js';
import Body from './components/body.js';
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
  }
  
  /*throttle(func, limit) {
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
  }*/
  
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
  
  render() {
    return (
      <div>
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
