import React from 'react';
import { NavLink } from 'react-router-dom';
import './projects.css';

const ProjectItem = props => (
  <div className={`projectCard ${props.cssAnim}`}>
    <div 
      className={`${props.showClass} ${props.cssAnim}`} 
      style={{opacity: props.showOpacity}}
    >
      <div className="cardBody" style={{transform: props.flippedBack}}>
        
        <div className="cardFront">
          <div className="cardImage"></div>
          <div className="cardAccent"></div>
      
        
          <a className={props.iconWhole} href={props.linker} target="_blank"
              rel='noopener noreferrer' style={{animationDelay: ".700s"}}
          >
          <i className={`${props.i} ${props.iconFinito}`}
            style={{animationDelay: '1.2s'}}
          ></i>
          </a>
          <p>{props.itemText}</p>
          <div className="cardFlip">
          <div onClick={() => props.flipToBack()}>
            <span style={{fontFamily: "Sofia", 
            marginRight: "12px", 
            backfaceVisibility: "hidden",
            width: "300px",
            position: "absolute",
            transform: "translateX(-70px)"
          }} >
          see more
          </span>
            <i className="fa fa-long-arrow-right" />
          </div>
          </div>
        </div>

        <div className="cardBack">
          <div className="cardBackPic" style={{background: `url(${props.picture}) no-repeat`}}/>
          <a className={props.iconWhole} href={props.linker} target="_blank"
              rel='noopener noreferrer' style={{animationDelay: ".700s"}}
          >
            <div data-tooltip="visit">
            <i className={`${props.i} ${props.iconFinito}`}
              style={{animationDelay: '1.2s'}}
            ></i>
            </div>
          </a>
          <p>{props.itemText}</p>
          <p className="description">{props.describe}</p>
          <div className="cardFlip">
            <div onClick={() => props.flipToFront()}>
              <span style={{fontFamily: "Sofia",
               marginRight: "12px"
               }} >
               flip back
               </span>
              <i className="fa fa-long-arrow-right" />
            </div>
          </div>
          <div className="card-more-info"
            onClick={() => {
              props.openProj();
              window.scrollTo({
                top: document.querySelector(".project-list").offsetTop - 80,
                behavior: "smooth"
              });
            }}>
            <NavLink to={`/project/${props.itemText}`}>
              more info
            </NavLink>
          </div>
        </div>
      </div>
    </div> 
  </div>
)

export default ProjectItem;
    
