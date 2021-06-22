import { ProjectConstants } from "../Constants/ProjectConstants"

export const SelectProjects = (projects)=>{
    return{
        type: ProjectConstants.SELECT_PROJECTS,
        payload : projects
    };
};

export const RenderProjects = (projects)=>{
    return{
        type: ProjectConstants.RENDER_PROJECTS,
        payload : projects
    };
};