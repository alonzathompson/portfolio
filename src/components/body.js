import React from 'react';
import { Route } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
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
        <LazyLoad offsetTop={0} throttle={150}>
          <Header />
        </LazyLoad>
        <LazyLoad offsetTop={300} throttle={150}>
          <Basic1 />
        </LazyLoad>
        <LazyLoad offsetTop={600} throttle={150}>
          <GraphicBlockA />
        </LazyLoad>
        <LazyLoad offsetTop={1200} throttle={150}>
          <Basic2 />
        </LazyLoad>
        <LazyLoad offsetTop={1000} thottle={150}>
          <ProjectList />
        </LazyLoad>
        <LazyLoad offsetTop={2000} throttle={150}>
          <GraphicBlockB />
        </LazyLoad>
        <LazyLoad offsetTop={2400} throttle={150}>
          <Footer />
        </LazyLoad>
      </main>
    )
  }

export default Body;