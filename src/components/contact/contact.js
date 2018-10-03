import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: "",
        email: "",
        message: "",
        formAnim: "",
        submitText: "submit",
        showMessage: "none",
        showMessageAnim: ""
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      if(this.state.name === "" || this.state.email === "" ||  !/(@{1})/g.test(this.state.email)){
        this.setState({
          formAnim: "animated wobble"
        })
        setTimeout(() => {
          this.setState({
            formAnim: ""
          })
        }, 500)
      } else {
      const newContact = Object.assign({}, this.state);
      
      axios.post('https://aserver1.herokuapp.com/contact/portfolio', newContact)
        .then(rsp => {
            this.setState({
              submitText: rsp.data.message,
              name: "",
              email: "",
              message: ""
            })

            if(rsp.data.message === "ok"){
              this.setState({
                formAnim: "animated fadeOutLeft",
                showMessage: "block",
                showMessageAnim: "animated fadeInRight delay-2s",
                email: "",
              })
            }
          })
      } 
      
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    
    render(){
      return (
        <div>
        <form className="formHolder">
          <div className="name formDivs">
            <label htmlFor="name">Name:</label>
            <input 
              className="formInput" 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange.bind(this)} 
              required
            />
          </div>
          
          <div className="email formDivs">
            <label htmlFor="email">Email:</label>
            <input 
              className="formInput" 
              type="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange.bind(this)} 
              required
            />
          </div>

          <div className="message formDivs">
            <label htmlFor="message">Message:</label>
            <textarea 
              className="formTextArea" 
              name="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this)} 
            />
          </div>

          <button 
            className={`submit ${this.state.formAnim}`} 
            type="submit" 
            onClick={this.handleSubmit.bind(this)}
          >
          {this.state.submitText}
          </button>
          <div className={`thankYou ${this.state.showMessageAnim}`} 
               style={{
                 display: this.state.showMessage,
                 animationDelay: "1s"
                 }}
          >
          <h2>
              I will get back to you
            </h2>
          </div>
        </form>
        </div>
      )
    }
  }

export default Contact;