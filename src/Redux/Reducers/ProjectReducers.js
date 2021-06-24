import { ProjectConstants } from "../Constants/ProjectConstants"

const initialState = {
    projects : [
        {
            id : 1,
            metadata : [
                {
                    projectType:"Using Cordoa And Ionic Framework",
                    projectName:"Native Mobile Application Development"
                }
            ],
            images : [
                {
                    imageUrl:""
                }
            ],
            description : [
                {
                    desc : "This App is built using Ionic Framework to serve the purpose of Native App Development using Cordova."
                }
            ]
        },
        {
            id : 2,
            metadata : [
                {
                    projectType:"",
                    projectName:"Generic Component Design using React Framework."
                }
            ],
            images : [
                {
                    imageUrl:""
                }
            ],
            description : [
                {
                    desc : "Developing the generic components so that whenever a new screen comes as a requirement, these components can save development time."
                }
            ]
        },
        {
            id : 3,
            metadata : [
                {
                    projectType:"",
                    projectName:"Vanilla Framework based Animations."
                }
            ],
            images : [
                {
                    imageUrl:""
                }
            ],
            description : [
                {
                    desc : "Instagram live emotions development using Vanilla JS and CSS."
                }
            ]
        },
        {
            id : 4,
            metadata : [
                {
                    projectType:"",
                    projectName:"Theme development and UX Designing"
                }
            ],
            images : [
                {
                    imageUrl:""
                }
            ],
            description : [
                {
                    desc : "Working attentively with CSS Pre-processors for Cosmetic Development using Mock-Ups and also using creative ideas to design use cases as Mock Ups."
                }
            ]
        }
    ]
}

export const ProjectReducers = (state = {initialState}, {type, payload})=>{
    switch(type){
        case ProjectConstants.RENDER_PROJECTS:
            return {...state,payload}
        default : 
            return state;
    }
};

