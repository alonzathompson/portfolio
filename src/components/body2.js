import React, { Component } from 'react'
import HeaderB from './header/header2.js';
import Basic1 from './content/basic1.js';
import Basic2 from './content/basic2.js';
import GraphicBlockA from './graphicBlocks/graphicBlockA.js';
import GraphicBlockB from './graphicBlocks/graphicBlockB.js';
import ProjectList from './projects/projectList.js';
import Footer from './footer/footer.js';

const BodyB = (props) => {
    return (
      <div className={`myBody2`} style={{transform: props.switchB2State, display: props.showB2State, backgroundColor: "#143058"}}>
        <HeaderB 
          goBack={props.showMain}
        />
        {/*<Basic1 />
        <GraphicBlockA />
        <Basic2 />
        <ProjectList />
        <GraphicBlockB />
        <Footer />*/}
      </div>
    )
}

export default BodyB;

