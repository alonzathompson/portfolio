import React from 'react';
import LazyLoad from 'react-lazy-load';
import HeaderB from './header/header2.js';
import BlogList from './blog/bloglist.js';
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
        */}

        <BlogList goBack={props.ShowMain}/>

        <LazyLoad offsetTop={600} throttle={150}>
          <Footer />
        </LazyLoad>
      </div>
    )
}

export default BodyB;

