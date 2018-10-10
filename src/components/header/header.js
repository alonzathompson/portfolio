import React, {Component} from "react";
import bg from '../../assets/cafe.vid';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            textDisplay: "block"
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

            if(window.scrollY > window.innerHeight - 600){
                this.setState({
                    textDisplay:`none`
                })
            } else {
                this.setState({
                    textDisplay:`block`
                })    
            }
        })
    }

    render(){
        return (
            <section className="header vcontainer">
                <div className="vidContainer">
                {<video autoPlay={true}
                    loop="loop" 
                    muted="muted" 
                    preload="auto"
                    ref={daVid => this.myVid = daVid}
                >
                    <source src={bg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>}
                <div className="voverlay"></div>
                </div>
                <div className={`header-border-text`} style={{ display: this.state.textDisplay}}>
                    <h1>
                        Let's Empower the World!
                    </h1>
                    <p>Together we can achieve anything.</p>
                </div>
            </section>
        )
    }
}

export default Header;

