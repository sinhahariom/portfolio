import { useEffect, useState } from 'react';
import './ToDoBodyTop.scss';

const ToDoBodyTop = (props) => {

    var [taskList, settaskList] = useState([{"id":0,"detail":""}]);
    var [taskTitle,setTaskTitle] = useState("");
    var [task,setTask] = useState();
    var [counter, setCounter] = useState(0);

    const addNewTask = ()=>{
        setCounter(++counter);
        let temp = {};
        temp.id = counter;
        temp.detail = "";
        taskList.push(temp);
        settaskList(taskList);
    }

    const deleteTask = (id)=>{
      let temp = taskList.filter((data)=> data.id !== id);
      settaskList(temp);
    }

    const saveTaskRecord = (e,data)=>{
      var index = 0;
      taskList.forEach((task,i)=>{
        if(data.id===task.id)
          index = i;
      });
      taskList[index].detail = e.target.value;
      settaskList(taskList);
    }

    const saveTitle = (e)=>{
      setTaskTitle(e.target.value);
    }

    const saveTask = ()=>{
      var temp = [];
      var taskContents = {};
      taskContents.title = taskTitle;
      taskContents.taskList = taskList;
      temp.push(taskContents);
      props.setToDoList(temp);
      console.log(temp);
    } 

    return ( 
       <div className="body-top-wrapper">
            <div className="form-group target-input-wrapper">
                <label htmlFor="target">Target Name</label>
                <input type="text" className="form-control" id="target" placeholder="I have a Target to achieve...." onChange={(e)=>{saveTitle(e)}}/>
            </div>
             {taskList.map(data=>(
                  <div className="form-group task-input-wrapper" key={data.id}>
                    <label htmlFor="target">My Goal is to</label>
                    <input type="text" className="form-control"  placeholder="I have a Target to achieve...." onChange={(e)=>{ saveTaskRecord(e,data)}  }></input>
                    <span className="mt-2">Delete This Task</span>
                    <button type="button" onClick={()=>deleteTask(data.id)}><img alt="NA" src="data:image/svg+xml,%3Csvg height='512pt' viewBox='0 0 512 512' width='512pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='%23f44336'/%3E%3Cpath d='m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0' fill='%23fafafa'/%3E%3C/svg%3E"></img> </button>
                  </div>
                ))
              }
            <div className="add-new-task">
                <span className="mb-2">Add New Task</span>
                <button type="button" onClick={addNewTask}><img alt="NA" src="data:image/svg+xml,%3Csvg height='512pt' viewBox='0 0 512 512' width='512pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='%232196f3'/%3E%3Cpath d='m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0' fill='%23fafafa'/%3E%3C/svg%3E"></img> </button>
            </div>
            <div className="add-new-task">
                <span className="mb-2">Save Task</span>
                <button type="button" onClick={saveTask}><img alt="NA" src="data:image/svg+xml,%3Csvg id='Capa_1' enable-background='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='m495 144v338c0 16.54-13.46 30-30 30h-418c-16.54 0-30-13.46-30-30v-452c0-16.54 13.46-30 30-30h98c38.7 17.32 77.19 23.71 111 24.65 63.88 1.79 111-15.84 111-15.84l123.65 124.62c2.79 2.81 4.35 6.61 4.35 10.57z' fill='%234d5788'/%3E%3Cpath d='m495 144v338c0 16.54-13.46 30-30 30h-209v-487.35c63.88 1.79 111-15.84 111-15.84l123.65 124.62c2.79 2.81 4.35 6.61 4.35 10.57z' fill='%23313a6b'/%3E%3Cpath d='m367 8.81v151.19c0 8.28-6.72 15-15 15h-192c-8.28 0-15-6.72-15-15v-160h207c4 0 7.83 1.6 10.65 4.43z' fill='%23f3d652'/%3E%3Cpath d='m367 8.81v151.19c0 8.28-6.72 15-15 15h-96v-175h96c4 0 7.83 1.6 10.65 4.43z' fill='%23e9bc3e'/%3E%3Cpath d='m303 0v96c0 8.28-6.72 15-15 15s-15-6.72-15-15v-96z' fill='%23dc455b'/%3E%3Cpath d='m431 256v176c0 8.28-6.72 15-15 15h-320c-8.28 0-15-6.72-15-15v-176c0-8.28 6.72-15 15-15h320c8.28 0 15 6.72 15 15z' fill='%23dfe5f2'/%3E%3Cpath d='m431 256v176c0 8.28-6.72 15-15 15h-160v-206h160c8.28 0 15 6.72 15 15z' fill='%23c7cdde'/%3E%3Cpath d='m208 335h-48c-8.284 0-15-6.716-15-15s6.716-15 15-15h48c8.284 0 15 6.716 15 15s-6.716 15-15 15z' fill='%23313a6b'/%3E%3C/g%3E%3C/svg%3E"></img> </button>
            </div>
       </div>
     );
}
 
export default ToDoBodyTop;