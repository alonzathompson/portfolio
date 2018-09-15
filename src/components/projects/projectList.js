import React, {Component} from 'react';
import ProjectItem from './projectItem.js';
import weather from '../../assets/weathernewportfolio.jpg';
import calculator from '../../assets/calculator_portfolioSmall.jpg';
import wiki from '../../assets/wikinewportfolio.jpg';
import redux from '../../assets/reduxnewportfolioSmall.jpg';

class ProjectList extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShowing: 0,
      counter: 0,
      animCss: "",
      projAnim: "",
      iconWholeAnim:"",
      iconFinishAnim:"",
      flipCardBack:"",
      pList:[
        {
          showing: `one`,
          link: "https://codepen.io/ar-traunworks/full/bMXLqj/",
          icon: `fa fa-thermometer-empty fa-4x aria-hidden="true"`,
          text: "Weather",
          pic: weather,
          alt: "weather application",
          description: "Weather app built with HTML, Vanilla Js, and Materialize."
        },
        {
          showing: `two`,
          link: "https://codepen.io/ar-traunworks/full/zaBBLL/",
          icon: `fa fa-plus fa-4x aria-hidden="true"`,
          text: "Calculator",
          pic: calculator,
          alt: "Calculator built with Vanilla JS",
          description: 'A basic calculator written in JS.'
        },
        {
          showing: `three`,
          link: "https://alonzathompson.github.io/WikiSearch/",
          icon: `fa fa-search fa-4x aria-hidden="true"`,
          text: "Wiki",
          pic: wiki,
          alt: "wiki search application",
          description: "A Wiki search app built with HTML, Custom Css, Vanilla Js"
        },
        {
          showing: `four`,
          link: "https://codepen.io/ar-traunworks/full/KQqOrj/",
          icon: `fa fa-shopping-bag fa-4x aria-hidden="true"`,
          text: "Redux Store",
          pic: redux,
          alt: "redux application",
          description: "A store built with React, Redux, Custom Css"
        }
      ]
    }
  }

  componentDidMount(){
    window.addEventListener("scroll", (e) => {
      if(window.scrollY >= this.projectHolder.offsetTop - 100){
        this.setState({
          projAnim: "animated bounceInRight",
          isShowing: 1
        })
      }
    })
  }

  handleBefore() {
      this.setState({
        counter: this.state.counter - 1,
        animCss: "animated bounceInRight",
        iconWholeAnim: "animated zoomIn",
        iconFinishAnim: "animated bounce"
      })

      if(this.state.counter <= 0){
        this.setState({
          counter: this.state.pList.length - 1
        });
      }

      setTimeout(() => {
        this.setState({
          animCss: ""
        })
      }, 700)

      setTimeout(() => {
        this.setState({
          iconWholeAnim: "",
          iconFinishAnim: ""
        })
      }, 2000)
  }

  handleAfter() {
    if(this.state.counter >= this.state.pList.length - 1){
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
        animCss: "animated bounceInLeft",
        iconWholeAnim: "animated zoomIn",
        iconFinishAnim: "animated bounce"
      })
    }

    setTimeout(() => {
      this.setState({
        animCss: ""
      })
    }, 700)

    setTimeout(() => {
      this.setState({
        iconWholeAnim: "",
        iconFinishAnim: ""
      })
    }, 2000)
  }

  handleCardFlipToBack(){
    this.setState({
      flipCardBack: "rotateY(180deg)"
    });
  }

  handleCardFlipToFront(){
    this.setState({
      flipCardBack: ""
    });
  }

  render(){
    let items = [...this.state.pList];
    let count = this.state.counter;

    return (
      <section className="project-list" ref={secTop => this.projectHolder = secTop}>
        <div className="p-list-header">
          <h1>Projects</h1>
        </div>
        <div 
          className={`list-flex ${this.state.projAnim}`} 
          style={{opacity: this.state.isShowing }}
        >
         <ProjectItem 
          showClass={items[count].showing}
          linker={items[count].link}
          i={items[count].icon}
          showOpacity={items[count].isShowing}
          itemText={items[count].text}
          picture={items[count].pic}
          alt={items[count].alt}
          describe={items[count].description}
          cssAnim={this.state.animCss}
          iconWhole={this.state.iconWholeAnim}
          iconFinito={this.state.iconFinishAnim}
          flipToBack={this.handleCardFlipToBack.bind(this)}
          flippedBack={this.state.flipCardBack}
          flipToFront={this.handleCardFlipToFront.bind(this)}
         />

         <div className="btnSliderA" onClick={this.handleBefore.bind(this)}>
          <i className="fa fa-chevron-left fa-2x" />
         </div>
         <div className="btnSliderB" onClick={this.handleAfter.bind(this)}>
          <i className="fa fa-chevron-right fa-2x" />
         </div>

        </div>
      </section>
    )
  }
}

  export default ProjectList;