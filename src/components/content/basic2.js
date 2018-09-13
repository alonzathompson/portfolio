import React, { Component } from 'react';
import resume from '../../assets/atResume.docx'

class Basic2 extends Component {
    constructor(props){
      super(props)
      this.state = {
        showing: "",
        isShowing: ""
      }
    }

    componentDidMount(){
      window.addEventListener("scroll", (e) => {
        if(window.scrollY >= this.blockTop.offsetTop - 300){
          this.setState({
            showing: "block",
            isShowing: "animated fadeIn"
          })
        }
      })
    }
    render(){
      return (
        <section className="basic" ref={top => this.blockTop = top}>
          <div className={`test ${this.state.isShowing}`} style={{ display: this.state.showing}}>
            <h1>Me <span style={{background: "#007bff", textShadow: "3px 10px 10px rgba(0,0,0,.9)", color: "#f0f0f0"  }}>></span></h1>
            <h2>What can I say</h2>
            <p>
              A studious learner of all things web, I'm addicted to getting better at code and 
              understanding software architecture. Currently I am learning Python and Docker 
              while getting stronger at Javascript and React.
              When I'm not enguaged in development, I enjoy analyzing movies, music and art. 
              The desicions made in the creative process to get to the final product
              fascinates me.
            </p>
          </div>
          <div className="iconHolder-Me">
            <a href="https://www.freecodecamp.org/alonzathompson" target="_blank" rel='noopener noreferrer'><i className="fa fa-free-code-camp fa-2x" aria-hidden="true"></i></a>
            <a href="https://stackoverflow.com/users/4421978/alonza-thompson" target="_blank" rel='noopener noreferrer'><i className="fa fa-stack-overflow fa-2x" aria-hidden="true"></i></a>
            <a data-tooltip="resume"
              className="download" 
              href={resume} 
              download
              rel='noopener noreferrer'
            >
              <i className="fa fa-file-word-o fa-2x" aria-hidden="true" />
            </a>
          </div>
        </section>
      )
    }
  }

export default Basic2;