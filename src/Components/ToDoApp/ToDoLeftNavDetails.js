import './ToDoLeftNavDetails.scss';

const ContentRender = (list) =>{ 
    return(
    list.contents.map(data=><p>{data.detail}</p>)
    )}

const TitleRender = (list)=>{
    return(
            list.mainList.map(data=>(
                <div>
                    <h1>{data.title}</h1>
                    <ContentRender contents={data.taskList}></ContentRender>
                </div>
            ))
    )
}

const ToDoLeftNavDetails = (props) => {
    return ( 
        <TitleRender mainList = {props.toDoList}></TitleRender>
     );
}
 
export default ToDoLeftNavDetails;
