import { useState } from "react";
import BlogHomeCommon from "./BlogHomeCommon";
import { Link } from 'react-router-dom';

import './BlogHome.scss';

const BlogHome = () => {

    const [blogData] = useState([
        {"title":"React Fundamentals","subTitle":"A Blog Covering basics of REACT.", id:1},
        {"title":"Angular Fundamentals","subTitle":"A Blog Covering basics of Angular and its usage.", id:2},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:3},
        {"title":"UI-UX","subTitle":"Intro To UI-UX", id:4},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:5},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:6},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:7},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:8},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:9},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:10},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot.", id:11}
    ]);
    const [blogState] = useState(false);
    const [prevBlog, setPrevBlog] = useState(1);
    const readBlog = (id)=>{

        if(id === prevBlog && document.getElementById(id).style.display==="block"){
            document.getElementById(id).style.display = "none";
        }else{
            document.getElementById(prevBlog).style.display = "none";
            document.getElementById(id).style.display = "block";
        }
        setPrevBlog(id);
    }


    return ( 
        <div className="blog-parent-wrapper">
            <div className="blog-header-wrapper">
                <Link to="/">Home</Link>
            </div>  
            {blogData.map((data) => (
                <BlogHomeCommon blogTitle={data.title} subTitle = {data.subTitle} key={data.id} btnId={data.id} readBlog = {()=> readBlog(data.id)} blogState = {blogState}></BlogHomeCommon>
            ))}
        </div>
    );
}
 
export default BlogHome;