import { useState } from "react";
import BlogHomeCommon from "./BlogHomeCommon";
import { Link } from 'react-router-dom';

import './BlogHome.scss';

const BlogHome = () => {

    const [blogData,setblogdata] = useState([
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

    return ( 
        <div className="blog-parent-wrapper">
            <div className="blog-header-wrapper">
                <Link to="/">Home</Link>
            </div>  
            {blogData.map((data) => (
                <BlogHomeCommon blogTitle={data.title} subTitle = {data.subTitle} key={data.id}></BlogHomeCommon>
            ))}
        </div>
    );
}
 
export default BlogHome;