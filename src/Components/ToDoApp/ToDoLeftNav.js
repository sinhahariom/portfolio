import { useContext } from 'react';
import { ToDoContext } from '../../Contexts/ToDoContext';
import ToDoLeftNavDetails from './ToDoLeftNavDetails';
import './ToDoLeftNav.scss';

const ToDoLeftNav = () => {
  const {toDoList}  = useContext(ToDoContext);
  const taskTitle = "My First Task List";

    return ( 
      <div>
    { toDoList ? <ToDoLeftNavDetails toDoList={toDoList}/> : <p>Loading...</p>  }
      </div>
     );
}
 
export default ToDoLeftNav;