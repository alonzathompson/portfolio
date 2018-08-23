import React from 'react';

const LoaderA = (props) => {
    return(
        <div className="loaderContainer"
             style={{
                 display: props.isLoading
             }}
        >
            <div className="loaderHolder animated bounceInRight">
              <i className="fa fa-spinner fa-5x " />
            </div>
        </div>
    )
}

export default LoaderA;