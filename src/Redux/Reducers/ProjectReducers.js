import { ProjectConstants } from "../Constants/ProjectConstants"

const initialState = {
    projects : [
        {
            id:0,
            name:"Flying Emotions"
        }
    ]
}

export const ProjectReducers = (state = {initialState}, {type, payload})=>{
    switch(type){
        case ProjectConstants.SELECT_PROJECTS:
            return state;
        default : 
            return state;
    }
};

