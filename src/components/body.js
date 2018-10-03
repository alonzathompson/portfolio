import React from 'react';
import Header from './header/header.js';
import Basic1 from './content/basic1.js';
import Basic2 from './content/basic2.js';
import GraphicBlockA from './graphicBlocks/graphicBlockA.js';
import GraphicBlockB from './graphicBlocks/graphicBlockB.js';
import ProjectList from './projects/projectList.js';
import Footer from './footer/footer.js';

const Body = (props) => {
    return (
      <main className="myBody" style={{transform: props.switchB1State, display: props.showB1State}}>
        <Header />
        <Basic1 />
        <GraphicBlockA />
        <Basic2 />
        <ProjectList toPjList={props.proj} />
        <GraphicBlockB />
        <Footer />
      </main>
    )
  }

export default Body;