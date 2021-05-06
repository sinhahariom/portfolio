import ToDoHeader from './ToDoHeader';
import ToDoLeftNav from './ToDoLeftNav';
import ToDoBodyParent from './ToDoBodyParent';
import './ToDoMainParent.scss';
import { ToDoContext } from '../../Contexts/ToDoContext';
import { useState } from 'react';

const ToDoMainParent = () => {

    const [toDoList, setToDoList] = useState();
    return (
        <ToDoContext.Provider value={{toDoList, setToDoList}}>
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
        </ToDoContext.Provider>
        
     );
}
 
export default ToDoMainParent;