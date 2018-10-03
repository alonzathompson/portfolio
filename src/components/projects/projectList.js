import React, {Component} from 'react';
import ProjectItem from './projectItem.js';
import weather from '../../assets/weathernewportfolio.jpg';
import calculator from '../../assets/calculator_portfolioSmall.jpg';
import wiki from '../../assets/wikinewportfolio.jpg';
import redux from '../../assets/reduxnewportfolioSmall.jpg';
import ShowProject from './projectShow.js';

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
      projectViewState: "none",
      projectViewAnim: "",
      projectImageAnim: `translateX(100%) translateY(100%) scale(1.5)`,
      projectCaseStudyAnim: ``,
      projectCaseStudyShow: `none`,
      pList:[
        {
          showing: `one`,
          link: "https://codepen.io/ar-traunworks/full/bMXLqj/",
          icon: `fa fa-thermometer-empty fa-4x aria-hidden="true"`,
          text: "Weather",
          pic: weather,
          alt: "weather application",
          tech: "HTML, CSS, Vanilla JS, Local-Forage",
          description: "Weather app built with HTML, Vanilla Js, and Materialize.",
          caseStudy: `The weather app really helped me to fully understand the process
          of making api request and how to use tokens. I was already familiar with making
          api request, but I really internalized it with this project working with json tokens. 
          I began to understand client-side storage and how pwa's work. My initial
          basis for another weather based project was to use local-forage, a Mozilla 
          Cross-browser storage library. The power of tying multiple api's together
          became apparent.`
        },
        {
          showing: `two`,
          link: "https://codepen.io/ar-traunworks/full/zaBBLL/",
          icon: `fa fa-plus fa-4x aria-hidden="true"`,
          text: "Calculator",
          pic: calculator,
          alt: "Calculator built with Vanilla JS",
          description: 'A basic calculator written in JS.',
          tech: "HTML, CSS, Vanilla JS",
          caseStudy: `This project allowed me to practice basic logic prinicples in 
          implementing basic functionality of a device. Applying a virtual layout to an old
          favorite, the calculator.
          Looking back this was more about aesthetics and look as oppose to the functionality.
          I did hit a snag when it came to the decimals and the crazy thing was, Free Code Camp
          had updated there course curriculum with a good intro to RegEx expressions. This allowed
          me to regulate the decimal placement and life went on.`

        },
        {
          showing: `three`,
          link: "https://alonzathompson.github.io/WikiSearch/",
          icon: `fa fa-search fa-4x aria-hidden="true"`,
          text: "Wiki",
          pic: wiki,
          alt: "wiki search application",
          tech: "HTML, CSS, Vanilla JS",
          description: "A Wiki search app built with HTML, Custom Css, Vanilla Js",
          caseStudy: `This project I belive was around the time I started using the fetch
          method. This shortened the regular jargon for making api request.The purpose of this
          project was to practice my layout capabilites always staying concious of responsive web.
          Learned about api structure digging into how Wiki lays out it's endpoints. I found
          their documentation to be straight-forward which rarely happens with software.`
        },
        {
          showing: `four`,
          link: "https://codepen.io/ar-traunworks/full/KQqOrj/",
          icon: `fa fa-shopping-bag fa-4x aria-hidden="true"`,
          text: "Redux Store",
          pic: redux,
          alt: "redux application",
          tech: "React JS, Redux, HTML, CSS",
          description: "A store built with React, Redux, Custom Css",
          caseStudy: `This was a great experience expounding on my learning of the flux pattern.
          Building this project gave me experience with redux and how to set up my store. What was
          really great about this project was establishing immutable concepts.
          I started this porject on code pen, and since have added the stripe and 
          google maps to see location of order. This project also has filtering , price calculations,
          and other basic neccessities when it comes to building applications like these.`
        }
      ]
    },

    this.handleAfter = this.handleAfter.bind(this);
    this.handleBefore = this.handleBefore.bind(this);
    this.handleCardFlipToBack = this.handleCardFlipToBack.bind(this);
    this.handleCardFlipToFront = this.handleCardFlipToFront.bind(this);
    this.getCurrentProject = this.getCurrentProject.bind(this);
    this.closeCurrentProject = this.closeCurrentProject.bind(this);
    this.getCurrentProject = this.getCurrentProject.bind(this);
  }

  componentDidMount(){
    window.addEventListener("scroll", (e) => {
      if(window.scrollY <= this.projectHolder.offsetTop - 400 || window.scrollY >= document.querySelector(".block2").offsetTop - 200){
        this.closeCurrentProject();
      }
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

  getCurrentProject(){
    console.log("working");
    this.setState({
      projectViewState: "block",
      projectViewAnim: "animated zoomIn"
    })

    setTimeout(() => {
      this.setState({
        projectImageAnim: `translateX(0) translateY(0) scale(1)`
      });
    }, 500)

    setTimeout(() => {
      this.setState({
        projectCaseStudyShow: `flex`,
        projectCaseStudyAnim: `animated slideInUp`
      });
    }, 1000)
    console.log(this.state.projectViewState)
  }

  closeCurrentProject(){
    this.setState({
      projectViewAnim: "animated zoomOut"
    })

    setTimeout(() => {
      this.setState({
        projectViewState: "none",
        projectImageAnim: `translateX(100%) translateY(100%) scale(1.5)`,
        projectCaseStudyAnim: ``,
        projectCaseStudyShow: `none`
      })
      this.handleCardFlipToFront();
    }, 1000)
  }

  render(){
    let items = [...this.state.pList];
    let count = this.state.counter;

    return (
      <div className="project-list-holder">
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
          flipToBack={this.handleCardFlipToBack}
          flippedBack={this.state.flipCardBack}
          flipToFront={this.handleCardFlipToFront}
          openProj={this.getCurrentProject}
         />

         <div className="btnSliderA" onClick={this.handleBefore}>
          <i className="fa fa-chevron-left fa-2x" />
         </div>
         <div className="btnSliderB" onClick={this.handleAfter}>
          <i className="fa fa-chevron-right fa-2x" />
         </div>

        </div>
        
        <ShowProject 
          showOpacity={items[count].isShowing}
          iconWhole={this.state.iconWholeAnim}
          iconFinito={this.state.iconFinishAnim}

          showClass={items[count].showing}
          linker={items[count].link}
          i={items[count].icon}
          itemText={items[count].text}
          picture={items[count].pic}
          alt={items[count].alt}
          projectCaseStudy={items[count].caseStudy}
          technologies = {items[count].tech}

          closeProject={this.closeCurrentProject}
          projectState = {this.state.projectViewState}
          projectViewTrans = {this.state.projectViewAnim}
          closeFromMobileNav = {this.props.cancelProject}
          pImageAnim = {this.state.projectImageAnim}
          caseStudyAnim = {this.state.projectCaseStudyAnim}
          caseStudyShow = {this.state.projectCaseStudyShow}
        />
      </section>
      </div>
    )
  }
}

  export default ProjectList;