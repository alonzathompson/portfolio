import React from 'react';

const Nav = (props) => {
    return (
      <div className="nav-holder">
        <nav>
          <div className="nav-button" onClick={props.handleClick}><i className="fa fa-bars" /></div>
          <section style={{display: props.showNav}}> 
            <div>
             <i className="fa fa-user-circle" onClick={() => {
                props.handleClick();
                window.scrollTo({
                  top: document.querySelector(".basic").offsetTop,
                  behavior: "smooth"
                });
              }} />
            </div>
            <div>
             <i className="fa fa-briefcase" onClick={() => {
                props.handleClick();
                window.scrollTo({
                  top: document.querySelector(".project-list").offsetTop,
                  behavior: "smooth"
                })}} />
            </div>
          </section>
          
        </nav>
      </div>
    )
  }

export default Nav;