import { useState } from "react";
import BlogHomeCommon from "./BlogHomeCommon";
import { Link } from 'react-router-dom';
import {BlogData} from '../assets/BlogData';
import './BlogHome.scss';

const BlogHome = () => {

    const [blogData] = useState(BlogData);
    const [blogState] = useState(false);
    const [prevBlog, setPrevBlog] = useState('1_btn');
    const [prevBtn, setPrevBtn] = useState('1');
    const readBlog = (id)=>{
        
        let temp = id;
        id = id+'_btn';
        
        if(id === prevBlog && document.getElementById(id).style.display==="block"){
            document.getElementById(id).style.display = "none";
            document.getElementById(temp).style.backgroundColor = "white";
            document.getElementById(temp).style.color = "#15501a";
        }else{
            document.getElementById(prevBlog).style.display = "none";
            document.getElementById(prevBtn).style.color = "#15501a";
            document.getElementById(prevBtn).style.backgroundColor = "white";
            document.getElementById(id).style.display = "block";
            document.getElementById(temp).style.backgroundColor = "rebeccapurple";
            document.getElementById(temp).style.color = "white";
        }
        setPrevBlog(id);
        setPrevBtn(temp);
    }


    return ( 
        <div className="blog-parent-wrapper">
            <div className="blog-header-wrapper">
                <Link to="/">Home</Link>
            </div>
            <div className="blog-page-title">
                <span>My Stories</span>    
            </div>  
            {blogData.map((data) => (
                <BlogHomeCommon blogTitle={data.title} subTitle = {data.subTitle} blogContent = {data.blogContent} key={data.id} btnId={data.id} readBlog = {readBlog} blogState = {blogState}></BlogHomeCommon>
            ))}
        </div>
    );
}
 
export default BlogHome;