import React from 'react';
import { NavLink } from 'react-router-dom';
import './blog.css';

 const BlogShow = (props) => {
  return (
    <div className="single-blog-show" style={{display: props.showBlog}}>
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div onClick={() => {
                        props.closeBlog();
                    }}
                    className="blog-close">
                    <NavLink to="/blog">
                        <i className="fa fa-close fa-3x"></i>
                    </NavLink>
                </div>
                <div className="single-blog-header" 
                    style={{
                        background: 
                        `linear-gradient(
                        rgba(20, 48, 88, 0), 
                        rgba(20, 48, 88, 8)
                        ),url('${props.blogPic}')`,
                        backgroundSize: "cover"
                }}>
                    <div className="single-blog-title">
                        <h1>{props.blogTitle}</h1>
                    </div>
                </div>
            </div>
            <div className="single-blog-body">
                <div className="single-blog-article">
                    {props.blogArticle.map((item, i) => {
                            return <p key={i}>{item}</p>
                        })
                    }

                    {/* <div>
                        <div>
                            {props.blogLikes}
                        </div>
                        <div className="single-blog-comments">
                            {props.blogComments.map((i) => {
                                    return (<div className="blog-comment">
                                                <p className="blog-data">{i.name}</p>
                                                <p className="blog-data">{i.comment}</p>
                                           </div>)
                                })
                            }
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogShow;

