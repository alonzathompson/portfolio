import React, { Component } from 'react';
import Contact from '../contact/contact.js';
import './footer.css';

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
            bgShowing: "animated fadeIn",
            height: 0
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
              <i className="fa fa-github-alt fa-1x" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/alonza-thompson-507169108/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-1x" aria-hidden="true" ></i>
            </a>
            <a href="https://www.twitter.com/Ar_traun_Works" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-1x" aria-hidden="true"></i>
            </a>
            <a href="https://join.slack.com/t/artraun/shared_invite/enQtNDQyMTc3NDUzNDYzLTMzZjlhNzdlMWU0MjQwNDNkNGRlOGY3YmRkYTljZGFjM2MxNjgzZjE4OWQzNWZjMTllZDllNmFlNDhkOWM1ZWI" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-slack" aria-hidden="true"></i>
            </a>
          </div>
          </div>
          <div style={{
            backgroundColor: "#444", 
            display: "flex", 
            width: "100%",
            bottom: "0",
            zIndex: "1",
            paddingTop: "32px",
            backgroundAttachment: "fixed",
            boxShadow: `inset 0px 2px 5px 1px rgba(0,0,0,0.5)`
          }}>
          <div>
            <h2 style={{ color: "white", textAlign: "center"}}>
              If You were wondering: <span style={{display: "inline-block"}}>React js, Node js, Animate.css, Custom Css</span>
            </h2>
            <h5 style={{ color: "white", textAlign: "center", marginBottom: "32px"}}>
              &copy;copyright Alonza Thompson for Artraun
            </h5>
          </div>
          </div>
        </footer>
      )
    }
  }

  export default Footer;