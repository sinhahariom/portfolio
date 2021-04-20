import { useState } from "react";
import BlogHomeCommon from "./BlogHomeCommon";
import './BlogHome.scss';

const BlogHome = () => {

    const [blogData,setblogdata] = useState([
        {"title":"React Fundamentals"},
        {"title":"Angular Fundamentals"},
        {"title":"Spring Boot Fundamentals"},
    ]);

    return ( 
        <div className="blog-parent-wrapper">
            {blogData.map((data) => (
                <BlogHomeCommon blogTitle={data.title}></BlogHomeCommon>
            ))}
        </div>
    );
}
 
export default BlogHome;