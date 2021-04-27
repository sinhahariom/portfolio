import { useState } from 'react';
import './ToDoBodyTop.scss';

const ToDoBodyTop = () => {

    var [taskCount, setTaskCount] = useState([{"id":0,"detail":""}]);
    var [counter, setCounter] = useState(0);
    const addNewTask = ()=>{
        setCounter(++counter);
        let temp = {};
        temp.id = counter;
        temp.detail = "";
        taskCount.push(temp);
        setTaskCount(taskCount);
        console.log(taskCount);
    }

    const deleteTask = (id)=>{
      console.log(taskCount);
      let temp = taskCount.filter((data)=> data.id !== id);
      setTaskCount(temp);
      console.log(taskCount);
    }
    return ( 
       <div className="body-top-wrapper">
            <div className="form-group target-input-wrapper">
                <label htmlFor="target">Target Name</label>
                <input type="text" className="form-control" id="target" placeholder="I have a Target to achieve...."/>
            </div>
             {taskCount.map(data=>(
                  <div className="form-group task-input-wrapper" key={data.id}>
                    <label htmlFor="target">My Goal is to</label>
                    <input type="text" className="form-control"  placeholder="I have a Target to achieve...."></input>
                    <span className="mt-2">Delete This Task</span>
                    <button type="button" onClick={()=>deleteTask(data.id)}><img alt="NA" src="data:image/svg+xml,%3Csvg height='512pt' viewBox='0 0 512 512' width='512pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='%23f44336'/%3E%3Cpath d='m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0' fill='%23fafafa'/%3E%3C/svg%3E"></img> </button>
                  </div>
                ))
              }
            <div className="add-new-task">
                <span className="mb-2">Add Task</span>
                <button type="button" onClick={addNewTask}><img alt="NA" src="data:image/svg+xml,%3Csvg height='512pt' viewBox='0 0 512 512' width='512pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='%232196f3'/%3E%3Cpath d='m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0' fill='%23fafafa'/%3E%3C/svg%3E"></img> </button>
            </div>
       </div>
     );
}
 
export default ToDoBodyTop;