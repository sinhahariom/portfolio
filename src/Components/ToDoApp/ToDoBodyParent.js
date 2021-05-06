import ToDoBodyTop from './ToDoBodyTop';
import './ToDoBodyParent.scss';
import { useContext } from 'react';
import { ToDoContext } from '../../Contexts/ToDoContext';

const ToDoBodyParent = () => {

  const {setToDoList} = useContext(ToDoContext);
    return ( 
       <div className="body-parent-wrapper">
         <ToDoBodyTop setToDoList={setToDoList}/>
       </div>
     );
}
 
export default ToDoBodyParent;