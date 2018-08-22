import React from 'react';

const LoaderA = (props) => {
    return(
        <div className="loaderContainer"
             style={{
                 display: props.isLoading
             }}
        >
            <div className="loaderHolder animated bounceInRight">
                <h1 className="animated flipInX delay-1s">WElcoMe</h1>
                <i className="fa fa-spinner fa-5x " />
                <h3 className="animated flipInY delay-2s"
                    style={{ position: "absolute", 
                             left: "5%",
                             bottom: "10%" 
                          }}
                >
                    OnE sEC
                </h3>
            </div>
        </div>
    )
}

export default LoaderA;