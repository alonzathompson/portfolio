import React, {Component} from "react";
import bg from '../../assets/cafe.vid';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: `Let's Empower The World`,
            textAnim: ``
        }
    }

    componentWillMount(){
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > window.innerHeight){
                if(this.vid !== null){
                this.myVid.pause();
              }
            } else if(window.scrollY < window.innerHeight){
                if(this.vid !== null){
                    this.myVid.play();
                }
            }

            if(window.scrollY > window.innerHeight - 300){
                this.setState({
                    textAnim:`animated fadeOut`
                })
            } else {
                this.setState({
                    textAnim:`animated fadeIn`
                })
            }
        })
    }

    render(){
        return (
            <section className="header vcontainer">
                <div className="vidContainer">
                <video autoPlay="true" 
                    loop="loop" 
                    muted="muted" 
                    preload="auto"
                    ref={daVid => this.myVid = daVid}
                >
                    <source src={bg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="voverlay"></div>
                </div>
                {/*<div className="header-border-text">
                    <h1 className={`${this.state.textAnim}`}
                        style={{fontWeight: "700", fontStyle:"impact", fontSize: "3vw"}}>
                        {this.state.text}
                    </h1>
                </div>*/}
            </section>
        )
    }
}

export default Header;

