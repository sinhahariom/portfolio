import './BlogHomeCommon.scss';
const BlogHomeCommon = (props) => {

    var btn_id = props.btnId + "_btn";

    return ( 
        <div className="box-wrapper">
            <button className="btn-wrapper" onClick={()=>{props.readBlog(props.btnId)}} id={props.btnId}>
                    <span className="title">{props.blogTitle}</span>
                    <span className="sub-title">{props.subTitle}</span>
            </button>
            <div className="content-wrapper" id={btn_id}>
                <span className="content">{props.blogContent}</span>
            </div>
        </div>


     );
}
 
export default BlogHomeCommon;