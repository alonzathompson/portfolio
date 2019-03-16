import React, { Component } from 'react';
import ReactGA from 'react-ga';
import BloglistItem from './bloglistItem.js'; 
import BlogShow from './blogshow.js'; 
import '../content/content.css';
// import logo from '../../assets/artraun.master-web-optimized.svg';
import architect from '../../assets/architect.jpg';
import books from '../../assets/books.jpg';
import './blog.css';

class BlogList extends Component {
    constructor(props){
        super(props)

        this.state = {
            handleShowBlog: "none",
            currentBlog: 0,
            bList: [
                {
                    id: 0,
                    title: "Libraries and Frameworks",
                    description: "When should I use what?",
                    pic: architect,
                    article: [`We see all kinds of libraries and frameworks popping up everday parallizing
                        us with more decision making. There are some great libraries and frameworks and some
                        not so hot selections (although all efforts are appluaded). For the most part, libraries and frameworks offer organization 
                        and some neat out of the box tools that allow us to get things accomplished faster. Security 
                        and speed are top priorities. So how do you leverage when to use a library or framework?`,

                        `The number one consensus from article diving seems to be; If you use a library, YOU MUST MAKE
                        SURE THERE IS NOTHING MALICIOUS IN THE CODE. Do research and make sure your code base is safe before
                        deploying. If you are not the type to scour through library code bases, use something with a great
                        track record.`,
                    
                        `The second culprit that comes up alot is bloat. Most people will pull in libraries and only use a
                        very small subset of features with it causing unnecessary bytes to bloat your codebase. The consensus seems
                        to be if you can write the features yourself without sacrificing heaps of time, then do that. Your code base will be better
                        off writing those subset of features without pulling in a library with unwanted overhead.`,
                    
                        `Now that we have a better grasp on our resources and environment we can make better decisions when choosing
                        a library or framework. Remember security and speed are our top priorities. They MUST be taken into consideration
                        every step of the way.`,
                    
                        `Organization is definitely the next priority and could arguably be the first. The more you build out applications,
                        the more your architectual prowess expands. Those patterns like MVC and MVVC that you couldn't really understand before
                        become inheritantly clear. Instead of just placing code all over the place, you begin to structure your applications in a way that allows
                        you to make quick changes to your ever growing code base. Even if you leave the work and come back to it, you can quickly
                        look over it and know where to go to make changes.`,
                    
                        `The only reason that I did not put organization first, is because we are in the business of getting things done. Sometimes
                        it's easier to jot down lines of code for quick logic than setting up some grand
                        scheme for code organization. When using javascript, my first instinct is always vanilla js. Most of the time I just need something
                        on the page that makes a fetch request to layout some data. If I did not get the message at first I get it loud and clear.
                        It is important to use the right tools for the job.`,
                        
                        `PICK YOUR POISON ACCORDINGLY`],
                    likes: 5,
                    comments: [
                        {
                            name: "jon Do",
                            comment: "this was very informative"
                        },
                        {
                            name: "jane Do",
                            comment: "I really needed this"
                        }
                    ]
                },
                {
                    id: 1,
                    title: "Courses, Courses, Courses",
                    description: "All these courses and I still feel like I don't know anything.",
                    pic: books,
                    article: [`Trying to keep up with the latest and greatest can be intense while gaining
                    traction and having a good High Level Overview of what's really going on. The key thing here is
                    HIGH LEVEL OVERVIEW.`,

                    `Throughout my journey, the most important thing that I have learned is having a good vision
                    from the top down is everything. Of course you already know that first you start with a
                    a blueprint and then build your house from that. The thing is this, unless you are an experienced
                    architect your first blueprints are going to be some shit.`,
                
                    `The layout of your code is the blueprint and the seasoned developer is going to lay it out nicely,
                    for seeing the many pitfalls that ly ahead. Until you began to actually build things, your high-level
                    overview will be limited. On my self taught journey, I have fell into tutorial-purgatory, as well as
                    devouring and disecting every article I can on the topic at hand. Trying to turn that triangle of chaos
                    from \\/ to /\\. Instead of staring into the chaos from the bottom, look down knowing exaclty what you
                    want with focused vision.`,
                
                    `Once your view starts to shift, you will effectively be able to layout applications. Know why your using
                    a list instead of a class, or a struct instead of a variable. At the beginning you hear phrases like modularity,
                    reusability, declarative, but you can only see one way imperatively. Once you begin to build projects your mind
                    will understand why we have idealogies for getting things done, and patterns, for example mvc which is great 
                    for code organization.   
                    `,
                
                    `Really what happens is you start to see all the many things in your everyday life that operate in the same manner.
                    An organization can have an hr department that functions just like any other organization if scale 
                    is approximately the same. Those two organizations cans swap HR staff and the successful change should almost happen in constant time (almost)
                    because the functionality of hr has been defined. To take in HR input, perform HR operation, output HR data.`,
                    
                    `I Remember when I first got into connecting the backend to the front and trying to wrap my head around how the data
                    gets transferred back and forth between the two. Now it's just a request, DO SOMETHING WITH IT ...
                    `],
                    likes: 7,
                    comments: [
                        {
                            name: "jon Do",
                            comment: "this was very informative"
                        },
                        {
                            name: "jane Do",
                            comment: "I really needed this"
                        }
                    ]
                }
            ]
        }

        this.getCurrentBlog = this.getCurrentBlog.bind(this);
        this.closeCurrentBlog = this.closeCurrentBlog.bind(this);
    }

    componentDidMount(){
        window.addEventListener("popstate", (e) => {
           
            if(window.location.href.match("http://localhost:3000/blog")){
                this.closeCurrentBlog();
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }, 2000);
            }

            if(window.location.href === `http://localhost:3000/blog/${this.state.bList[this.state.currentBlog].id}`){
                setTimeout(() => {
                    this.setState({
                        handleShowBlog: "block",
                        currentBlog: this.state.currentBlog
                    });
                }, 500)
            }
      });
    }

    // componentDidUpdate(prevState) {
    //     // only update chart if the data has changed
    //     if (prevState.handleShowBlog !== this.state.handleBlogShow) {
    //         if(window.location.href.match(`http://localhost:3000/blog/${this.state.currentBlog.id}`) || window.location.pathname.match(`/blog/${this.state.currentBlog.id}`)){
    //             console.log(this.state.currentBlog)
    //             console.log(this.state.currentBlog)
    //             this.getCurrentBlog()
    //         }
    //     }
    //   }

    getCurrentBlog(k){
        this.setState({
            handleShowBlog: "block",
            currentBlog: k
        });

        ReactGA.event({
            category: `blog article/${this.state.bList[this.state.currentBlog].id}`,
            action: 'Clicked Link'
          });
    }

    closeCurrentBlog(){
        this.setState({
            handleShowBlog: "none"
        });
    }

    render(){
        let blogs = this.state.bList.map((blog, i) =>
        // Correct! Key should be specified inside the array.
        <BloglistItem key={i}
                      id={blog.id}
                      title={blog.title}
                      descript={blog.description} 
                      getBlog={this.getCurrentBlog}
                      getLikes={blog.likes}
                      getComments={blog.comments.length}/>
        );

        return(
            <div className="bloglist-holder">
                <div style={{
                    backgroundColor: "rgba(119,119,119,0.2)",
                    backgroundImage: `url('https://img.freepik.com/free-photo/metal-texture-background_42612-327.jpg?size=626&ext=jpg')`,
                    padding: "16px",
                    boxShadow: "0 -2px 10px 1px rgba(0,0,0,0.4)"
                }}>
                    <h2 style={{textAlign: "center",
                        color: "white",
                        textShadow: '2px 0px 17px rgba(255,255,255,0.8)'
                    }}>
                        Quick tid-bits to keep you on the right track.
                    </h2>
                </div>
                <section className="bloglist">
                    {blogs}
                </section>
                
                <BlogShow 
                    showBlog={this.state.handleShowBlog}
                    closeBlog={this.closeCurrentBlog}
                    blogTitle={this.state.bList[this.state.currentBlog].title}
                    blogPic={this.state.bList[this.state.currentBlog].pic}
                    blogArticle={this.state.bList[this.state.currentBlog].article}
                    blogLikes={this.state.bList[this.state.currentBlog].likes}
                    blogComments={this.state.bList[this.state.currentBlog].comments}
                />
            </div>
        )
    }
}

export default BlogList;