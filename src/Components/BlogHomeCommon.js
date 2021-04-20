import './BlogHomeCommon.scss';
const BlogHomeCommon = (props) => {


    return ( 

        <div className="box-wrapper">
            <button className="btn-wrapper" onClick={props.readBlog}>
                    <span className="title">{props.blogTitle}</span>
                    <span className="sub-title">{props.subTitle}</span>
            </button>
            <div className="content-wrapper" id={props.btnId}>
                <span className="content">{props.subTitle}</span>
            </div>
        </div>


     );
}
 
export default BlogHomeCommon;