import './BlogHomeCommon.scss';
const BlogHomeCommon = (props) => {


    return ( 

        <div className="box-wrapper">
            <div className="title-wrapper">
                <span className="title">{props.blogTitle}</span>
                <span className="sub-title">{props.subTitle}</span>
            </div>
        </div>


     );
}
 
export default BlogHomeCommon;