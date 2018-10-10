import React from 'react'
import HeaderB from './header/header2.js';
//import Footer from './footer/footer.js';

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

