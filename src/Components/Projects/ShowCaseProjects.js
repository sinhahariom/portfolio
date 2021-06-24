import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RenderProjects } from "../../Redux/Actions/ProjectActions";

const ShowCaseProjects = () => {

    const dispatcher = useDispatch();
   
    const dataFromFakeAPI = async ()=>{
        const fakeData = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .catch(error=>{
            console.log(error);
        });
        console.log(fakeData.data);
        dispatcher(RenderProjects(fakeData.data));
    }

    useEffect(()=>{
        dataFromFakeAPI();
    },[]);
   
    return ( <p>Here I will render my Projects !!</p> );
}
 
export default ShowCaseProjects;
