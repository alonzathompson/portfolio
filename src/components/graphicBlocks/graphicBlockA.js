import React,{Component} from 'react';

class GraphicBlockA extends Component {
    render(){
      return (
        <section className="graph-block-a">
          <div className="cardContainer">
            <div className="cardBackground">
              <i className="fa fa-database"></i>
            </div>

            <div className="cardText">
              <h2>
                Redundancy
              </h2>
              <p>
                Skills with databases include <span className="pHighlights">PostgresSQL</span>,
                <span className="pHighlights"> MYSQL </span> and <span className="pHighlights"> MongoDB</span>. 
                Undestanding the importance of persistant data is key to building 
                solid applications and viable metrics.
              </p>
            </div>
          </div>
          <div className="cardContainer">
            <div className="cardBackground">
              <i className="fa fa-cog"></i>
            </div>

            <div className="cardText">
              <h2>Frontend</h2>
              <p>
                Experienced in React, Vue, Redux, Es6, and the modern way of building 
                web applications. Also Adept in Bootstrap, Materialize, and other css frameworks.
              </p>
            </div>
          </div>
          <div className="cardContainer">
            <div className="cardBackground">
              <i className="fa fa-check"></i>
            </div>

            <div className="cardText">
              <h2>Backend</h2>
              <p>
                I have been building my experience with Node.js 
                and the npm ecosystem for some time now. 
                
              </p>
            </div>
          </div>
        </section>
      )
    }
  }

export default GraphicBlockA;