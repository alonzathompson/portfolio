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
            border: "10px solid #ecf5ff",
            background: `url(${me}) no-repeat`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%"
            }}
          />
        </div>

        <div className="gbTextHolder">
          <h2>Would love to hear from you.</h2>
        </div>
      </div>
    )
  }
}

export default GraphicBlockB;