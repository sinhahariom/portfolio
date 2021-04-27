import ToDoHeader from './ToDoHeader';
import ToDoLeftNav from './ToDoLeftNav';
import ToDoBodyParent from './ToDoBodyParent';
import './ToDoMainParent.scss';

const ToDoMainParent = () => {
    return ( 
        <div className="main-parent">
            <div className="parent-top-child">
                <ToDoHeader></ToDoHeader>
            </div>
            <div className="parent-bottom-child">
                <div className="parent-bottom-left-child">
                    <ToDoLeftNav></ToDoLeftNav>
                </div>
                <div className="parent-bottom-right-child">
                    <ToDoBodyParent></ToDoBodyParent>
                </div>
            </div>
        </div>
     );
}
 
export default ToDoMainParent;