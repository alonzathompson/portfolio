import React, {Component} from 'react';
import me from '../../assets/picOfMe.png';

class GraphicBlockB extends Component{
    constructor(props){
      super(props)
        this.state = {
        show: "none"
      }
    }

    componentDidMount() {
      window.addEventListener("scroll", (e) => {
        this.handleScrolling();
      }) 
    }

    handleScrolling(){
    }

  render(){
    return (
      <div className="block2" ref={secTop => this.mid = secTop}>
        <div className="blockDiv">
          <div 
            style={{
            borderRadius: "50%",
            border: "10px solid rgb(175, 212, 252)",
            background: `url(${me}) no-repeat`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            boxShadow: "inset 0px 0px 10px 4px rgba(0,0,0,0.5)"
            }}
          />
        </div>

        <div className="gbTextHolder">
          <h2><b>Would love to hear from you.</b></h2>
          <p style={{textAlign: "center"}}>
            If you want to colab or need some work done
            send me a message* 
          </p>
        </div>
      </div>
    )
  }
}

export default GraphicBlockB;