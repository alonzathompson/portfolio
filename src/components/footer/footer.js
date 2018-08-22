import React, { Component } from 'react';
import Contact from '../contact/contact.js';

class Footer extends Component {
    constructor(props){
      super(props)
      this.state = {
        show: "",
        bgShowing: ""
      }
    }

    componentDidMount() {
      window.addEventListener("scroll", (e) => {
        if(window.scrollY >= this.footerTop.offsetTop - 300){
          this.setState({
            show: "flex",
            bgShowing: "animated fadeIn"
          })
        }
      })
    }
    render() {
      return (
        <footer className="footer" ref={top => this.footerTop = top}>
          <div className={`test1`} style={{display: this.state.show}}>
          <h1>Contact <span style={{background: "#007bff", textShadow: "3px 10px 10px rgba(0,0,0,.9)", color: "#f0f0f0" }}>></span></h1>
          <Contact />
          <div className="icon-flex">
            <a href="https://github.com/alonzathompson" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-alt fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/alonza-thompson-507169108/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-3x" aria-hidden="true" ></i>
            </a>
            <a href="" target="_blank"><i className="fa fa-facebook fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.twitter.com/Ar_traun_Works" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </footer>
      )
    }
  }

  export default Footer;