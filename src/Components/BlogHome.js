import { useState } from "react";
import BlogHomeCommon from "./BlogHomeCommon";
import { Link } from 'react-router-dom';

import './BlogHome.scss';

const BlogHome = () => {

    const [blogData,setblogdata] = useState([
        {"title":"React Fundamentals","subTitle":"A Blog Covering basics of REACT."},
        {"title":"Angular Fundamentals","subTitle":"A Blog Covering basics of Angular and its usage."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"UI-UX","subTitle":"Intro To UI-UX"},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
        {"title":"Spring Boot Fundamentals","subTitle":"A Blog Covering basics of Spring Boot."},
    ]);

    return ( 
        <div className="blog-parent-wrapper">
            <div className="blog-header-wrapper">
                <Link to="/">Home</Link>
            </div>  
            {blogData.map((data) => (
                <BlogHomeCommon blogTitle={data.title} subTitle = {data.subTitle}></BlogHomeCommon>
            ))}
        </div>
    );
}
 
export default BlogHome;