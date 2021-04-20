import './BlogHomeCommon.scss';
const BlogHomeCommon = (props) => {


    return ( 

        <div className="box-wrapper">
            <button className="btn-wrapper">
                    <span className="title">{props.blogTitle}</span>
                    <span className="sub-title">{props.subTitle}</span>
            </button>
            <div className="content-wrapper">

            </div>
        </div>


     );
}
 
export default BlogHomeCommon;