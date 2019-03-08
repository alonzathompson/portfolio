import React,{Component} from 'react';
import './graphicBlocks.css';

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
                Databases
              </h2>
              <p>
                Skills with databases include <span className="pHighlights">PostgresSQL</span>,
                <span className="pHighlights"> MYSQL </span> and <span className="pHighlights"> MongoDB</span>
                <span className="pHighlights"> Redis </span>. Undestanding the importance of storing and caching 
                data is key to building solid applications and viable metrics.
              </p>
            </div>
          </div>
          <div className="cardContainer">
            <div className="cardBackground">
              <i className="fa fa-sitemap"></i>
            </div>

            <div className="cardText">
              <h2>Frontend</h2>
              <p>
                Experienced in React, Vue, Redux, Es6, and the modern way of building 
                web applications. Also Adept in Bootstrap, Materialize, and other css frameworks.
                Compiling, and transpiling with WebPack and Babel.
              </p>
            </div>
          </div>
          <div className="cardContainer">
            <div className="cardBackground">
              <i className="fa fa-server"></i>
            </div>

            <div className="cardText">
              <h2>Backend</h2>
              <p>
                I started out with Node js and now I'm 
                currently using Golang. Strict type languages
                are becoming my favorite.                
              </p>
            </div>
          </div>
        </section>
      )
    }
  }

export default GraphicBlockA;