import './BlogHomeCommon.scss';
const BlogHomeCommon = (props) => {


    return ( 

        <div className="box-wrapper">
            <div className="thumbnail-wrapper">
                
            </div>
            <div className="title-wrapper">
                <span>{props.blogTitle}</span>
            </div>
        </div>


     );
}
 
export default BlogHomeCommon;