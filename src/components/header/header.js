import React, {Component} from "react";
import mainBG from '../../assets/header2019.svg';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            textDisplay: "block"
        }
    }

    // componentWillMount(){ 
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY > window.innerHeight){
    //             if(this.vid !== null){
    //             this.myVid.pause();
    //           }
    //         } else if(window.scrollY < window.innerHeight){
    //             if(this.vid !== null){
    //                 this.myVid.play();
    //             }
    //         }

    //         if(window.scrollY > window.innerHeight - 500){
    //             this.setState({
    //                 textDisplay:`none`
    //             })
    //         } else {
    //             this.setState({
    //                 textDisplay:`block`
    //             })    
    //         }
    //     })
    // }

    render(){
        return (
            <section className="header vcontainer">
                <div className="vidContainer">
                    <div className="imageHeader">
                        <img src={mainBG} alt="Kiwi standing on oval" width="100%" height="auto" />
                    </div>
                </div>
                <div className={`header-border-text`} style={{ display: this.state.textDisplay}}>
                    <h1>
                        Let's Empower the World!
                    </h1>
                    <p>Together we can achieve anything.</p>
                </div>
                {/* <div className="header-chev" style={{ display: this.state.textDisplay}}
                onClick={() => {
                    window.scrollTo({
                        top: document.querySelector(".basic").offsetTop - 100,
                        behavior: "smooth"
                      })
                }}>
                    <i className="fa fa-chevron-down fa-3x" />
                </div> */}
            </section>
        )
    }
}

export default Header;

