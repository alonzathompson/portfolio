import React from 'react';
import { NavLink } from 'react-router-dom';
//import './bloglist.css';

const BloglistItem = props => (
  <div className="bloglist-items">
    <h1>{props.title}</h1>
    <h3>{props.descript}</h3>
    <div className="button blog-utils" onClick={() => {
      props.getBlog(props.id)
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }}>
      <NavLink to={`/blog/${props.title}`} className="bli">
        more ...
      </NavLink>
    </div>
    {/* <p className="blog-utils">likes: 
      <span className="blogLikes">{props.getLikes}</span>
      <span className="blogComments">comments: {props.getComments}</span>
    </p> */}
  </div>
)

export default BloglistItem;


    
