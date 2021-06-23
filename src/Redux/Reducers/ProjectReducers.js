import { ProjectConstants } from "../Constants/ProjectConstants"

const initialState = {
    projects : []
}

export const ProjectReducers = (state = {initialState}, {type, payload})=>{
    switch(type){
        case ProjectConstants.RENDER_PROJECTS:
            return {...state,payload}
        default : 
            return state;
    }
};

