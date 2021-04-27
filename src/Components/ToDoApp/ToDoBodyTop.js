import { useState } from 'react';
import './ToDoBodyTop.scss';

const ToDoBodyTop = () => {

    var [taskCount, setTaskCount] = useState([]);
    var [counter, setCounter] = useState(0);
    const addNewTask = ()=>{
        setCounter(counter+1);
        taskCount.push(counter);
        setTaskCount(taskCount);
        console.log(taskCount);
    }
    return ( 
       <div className="body-top-wrapper">
            <div className="form-group target-input-wrapper">
                <label htmlFor="target">Target Name</label>
                <input type="text" className="form-control" id="target" placeholder="I have a Target to achieve...."/>
            </div>
             {taskCount.map(data=>(
                  <div className="form-group task-input-wrapper" key={data}>
                    <label htmlFor="target">My Goal is to</label>
                    <input type="text" className="form-control" id="target" placeholder="I have a Target to achieve...."></input>
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