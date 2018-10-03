import React from 'react';

 const ShowProject = (props) => {
  return (
    <div className="caseStudyHolders">
      <div className={`caseStudy ${props.projectViewTrans}`} style={{ display: props.projectState }}>
          <div className="bigCard">
            <h2 className="closeProject" 
                onClick={() => {
                  props.closeProject();
                  window.scrollTo({
                    top: document.querySelector(".project-list").offsetTop + 70,
                    behavior: "smooth"
                  });
                }}
            >X</h2>

            <div className="project-header">
              <div className="project-image"
                style={{background: `url(${props.picture}) no-repeat`,
                transform: props.pImageAnim
              }}>

              </div>
              <div className="project-title">
                <h2 style={{ fontSize: `5vw`}}>{props.itemText}</h2>
              </div>
            </div>

            <div className="project-body" style={{display: props.caseStudyShow}}>
              <div>
                <p className={props.caseStudyAnim}
                >
                  <b>{props.technologies}</b>
                </p>
              </div>
              <div className={`project-caseStudy ${props.caseStudyAnim}`}>
                <p className={props.caseStudyAnim}>
                {`${props.projectCaseStudy} You can visit `} 
                  <a href={`${props.linker}`}>here.</a> 
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProject;
