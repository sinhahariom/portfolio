import ToDoBodyList from './ToDoBodyList';
import ToDoBodyTop from './ToDoBodyTop';
import './ToDoBodyParent.scss';

const ToDoBodyParent = () => {
    return ( 
       <div className="body-parent-wrapper">
         <ToDoBodyTop/>
         <ToDoBodyList/>
       </div>
     );
}
 
export default ToDoBodyParent;