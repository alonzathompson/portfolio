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
        submitText: "submit"
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      if(this.state.name === "" || this.state.email === ""){
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
            console.log(rsp);
            this.setState({
              submitText: rsp.data.message,
              name: "",
              email: "",
              message: ""
            })
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
          <div className="name">
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
          
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input 
              className="formInput" 
              type="email" 
              name="email" 
              value={this.state.value} 
              onChange={this.handleChange.bind(this)} 
              required
            />
          </div>

          <div className="message">
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
        </form>
        </div>
      )
    }
  }

export default Contact;