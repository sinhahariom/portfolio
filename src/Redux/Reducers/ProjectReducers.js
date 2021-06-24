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
            imageUrl : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E",
            description : [
                {
                    desc : "This App is built using Ionic Framework to develop Native Application using Cordova and Angular."
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
            imageUrl : "data:image/svg+xml,%3Csvg height='480pt' viewBox='-28 0 480 480' width='480pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m212.203125 208c17.675781 0 32 14.328125 32 32s-14.324219 32-32 32c-17.671875 0-32-14.328125-32-32s14.328125-32 32-32zm0 0' fill='white'/%3E%3Cpath d='m244.203125 240c0 17.671875-14.324219 32-32 32-17.671875 0-32-14.328125-32-32s14.328125-32 32-32c17.675781 0 32 14.328125 32 32zm0 0' fill='%239bc9ff'/%3E%3Cg fill='%231e81ce'%3E%3Cpath d='m212.203125 200c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40c22.09375 0 40-17.910156 40-40-.023437-22.082031-17.917969-39.972656-40-40zm0 64c-13.253906 0-24-10.746094-24-24s10.746094-24 24-24c13.257813 0 24 10.746094 24 24s-10.742187 24-24 24zm0 0'/%3E%3Cpath d='m351.40625 240c12.023438-10.164062 23.449219-21.015625 34.222656-32.496094 34.214844-37.007812 46.128906-67.273437 34.449219-87.503906-16.800781-29.0625-73.234375-23.671875-138.242187-.566406-12.519532-67.847656-36.078126-119.433594-69.632813-119.433594-33.550781 0-57.109375 51.585938-69.597656 119.441406-65.007813-23.105468-121.464844-28.496094-138.242188.558594-11.679687 20.230469.234375 50.496094 34.449219 87.503906 10.765625 11.480469 22.179688 22.328125 34.191406 32.496094-12.023437 10.164062-23.449218 21.015625-34.222656 32.496094-34.191406 37.007812-46.105469 67.273437-34.425781 87.503906 8 13.871094 25.050781 19.894531 47.753906 19.894531 31.011719-1.519531 61.574219-8.050781 90.496094-19.34375 12.488281 67.863281 36.046875 119.449219 69.597656 119.449219 33.554687 0 57.113281-51.585938 69.601563-119.441406 28.921874 11.285156 59.480468 17.816406 90.488281 19.335937 22.695312 0 39.742187-6.03125 47.753906-19.894531 11.679687-20.230469-.234375-50.496094-34.449219-87.503906-10.765625-11.480469-22.179687-22.328125-34.191406-32.496094zm54.816406-112c7.488282 12.976562-4.601562 38.640625-32.335937 68.640625-10.984375 11.6875-22.65625 22.703125-34.960938 32.992187-14.769531-11.878906-30.855469-23.65625-48.121093-35.066406-1.253907-20.253906-3.359376-40.207031-6.273438-59.199218 64.472656-23.144532 111.480469-24.96875 121.664062-7.367188zm-162.019531 167.425781c-10.847656 6.25-21.511719 12.066407-32 17.453125-10.472656-5.375-21.140625-11.195312-32-17.453125-10.710937-6.1875-21.046875-12.59375-31.117187-19.089843-.585938-11.726563-.882813-23.839844-.882813-36.335938s.296875-24.609375.882813-36.335938c10.070312-6.496093 20.40625-12.902343 31.117187-19.089843 10.839844-6.253907 21.507813-12.070313 32-17.445313 10.480469 5.390625 21.167969 11.199219 32 17.445313 10.714844 6.1875 21.050781 12.59375 31.121094 19.089843.585937 11.726563.878906 23.839844.878906 36.335938s-.292969 24.609375-.878906 36.335938c-10.070313 6.496093-20.40625 12.902343-31.121094 19.089843zm29.867187.710938c-1.167968 15.046875-2.785156 29.328125-4.800781 42.742187-12.625-4.984375-25.808593-10.726562-39.433593-17.246094 7.519531-4 14.992187-8.105468 22.34375-12.34375 7.351562-4.242187 14.738281-8.695312 21.890624-13.152343zm-79.519531 25.464843c-13.601562 6.511719-26.808593 12.261719-39.433593 17.246094-1.992188-13.414062-3.609376-27.695312-4.800782-42.742187 7.152344 4.453125 14.441406 8.835937 21.863282 13.152343 7.378906 4.269532 14.847656 8.34375 22.371093 12.34375zm-61.890625-56.21875c-12.175781-8.335937-23.671875-16.796874-34.496094-25.382812 10.796876-8.570312 22.292969-17.042969 34.496094-25.414062-.289062 8.476562-.457031 16.964843-.457031 25.414062s.167969 16.9375.457031 25.414062zm17.679688-81.550781c1.167968-15.039062 2.785156-29.3125 4.800781-42.71875 12.609375 4.976563 25.777344 10.726563 39.382813 17.230469-7.507813 3.988281-14.941407 8.101562-22.292969 12.335938-7.457031 4.320312-14.753907 8.714843-21.890625 13.183593zm79.539062-25.433593c13.597656-6.511719 26.796875-12.253907 39.414063-17.238282 1.992187 13.414063 3.609375 27.695313 4.800781 42.742188-7.167969-4.484375-14.464844-8.882813-21.890625-13.191406-7.34375-4.238282-14.804687-8.3125-22.324219-12.3125zm61.871094 56.226562c12.175781 8.328125 23.671875 16.789062 34.496094 25.375-10.796875 8.566406-22.292969 17.039062-34.496094 25.414062.285156-8.476562.453125-16.964843.453125-25.414062s-.167969-16.9375-.453125-25.414062zm-79.546875-198.625c20.363281 0 42.273437 41.65625 54.441406 109.078125-17.902343 6.96875-36.246093 15.128906-54.398437 24.179687-18.191406-9.050781-36.546875-17.210937-54.402344-24.179687 12.089844-67.414063 34-109.078125 54.359375-109.078125zm-161.652344 180.640625c-27.738281-30-39.824219-55.664063-32.335937-68.640625 4.519531-7.824219 16.277344-11.816406 33.597656-11.816406 30.207031 1.589844 59.957031 8.074218 88.089844 19.199218-2.914063 18.960938-5.015625 38.90625-6.273438 59.152344-17.265625 11.410156-33.351562 23.199219-48.121094 35.066406-12.300781-10.277343-23.976562-21.285156-34.957031-32.960937zm-32.335937 155.359375c-7.488282-12.976562 4.597656-38.640625 32.335937-68.640625 10.980469-11.6875 22.652344-22.703125 34.957031-32.992187 14.769532 11.878906 30.855469 23.65625 48.121094 35.066406 1.257813 20.253906 3.359375 40.207031 6.273438 59.199218-64.496094 23.144532-111.503906 24.96875-121.6875 7.367188zm193.988281 112c-20.359375 0-42.261719-41.65625-54.398437-109.070312 17.894531-6.96875 36.25-15.128907 54.441406-24.175782 18.191406 9.046875 36.542968 17.207032 54.4375 24.175782-12.214844 67.414062-34.117188 109.070312-54.480469 109.070312zm193.992187-112c-10.175781 17.601562-57.214843 15.777344-121.6875-7.390625 2.914063-18.96875 5.015626-38.921875 6.273438-59.203125 17.265625-11.40625 33.351562-23.199219 48.121094-35.0625 12.304687 10.285156 23.976562 21.304688 34.957031 32.992188 27.738281 30.023437 39.824219 55.6875 32.335937 68.664062zm0 0'/%3E%3C/g%3E%3C/svg%3E",
            description : [
                {
                    desc : "Developing the generic React components to use on multiple screens and handling generic props."
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
            imageUrl : "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%232196F3;' d='M434.582,110.165c-2.02-2.227-4.887-3.497-7.893-3.499H85.355 c-5.891-0.026-10.688,4.728-10.714,10.619c-0.002,0.351,0.014,0.701,0.047,1.05l32,341.333c0.413,4.379,3.471,8.055,7.701,9.259 l149.333,42.667c0.964,0.274,1.963,0.41,2.965,0.405c1.144-0.001,2.282-0.181,3.371-0.533l128-42.667 c4.015-1.336,6.86-4.918,7.253-9.131l32-341.333C437.592,115.35,436.6,112.384,434.582,110.165z'/%3E%3Cg%3E%3Cpath style='fill:%23FAFAFA;' d='M266.689,426.667c-0.989-0.006-1.973-0.15-2.923-0.427l-74.667-21.333 c-3.665-1.043-6.495-3.963-7.424-7.659l-10.667-42.667c-1.558-5.681,1.785-11.55,7.466-13.108 c5.681-1.558,11.55,1.785,13.108,7.466c0.044,0.159,0.083,0.318,0.119,0.479l9.173,36.693l65.813,18.816l64.853-18.539 l19.2-173.035h-190.72c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h202.667 c5.891-0.036,10.695,4.711,10.731,10.602c0.002,0.414-0.019,0.827-0.065,1.238l-21.333,192c-0.484,4.3-3.518,7.882-7.68,9.067 l-74.667,21.333C268.704,426.537,267.698,426.674,266.689,426.667z'/%3E%3Cpath style='fill:%23FAFAFA;' d='M352.022,298.667H170.689c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h181.333 c5.891,0,10.667,4.776,10.667,10.667S357.913,298.667,352.022,298.667z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%2337474F;' d='M192.022,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667V10.667C138.689,4.776,143.464,0,149.355,0 h42.667c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-32v21.333h32c5.891,0,10.667,4.776,10.667,10.667 S197.913,64,192.022,64z'/%3E%3Cpath style='fill:%2337474F;' d='M277.355,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h16.917 l-24.469-24.448c-4.171-4.16-4.179-10.914-0.019-15.085c2.006-2.011,4.731-3.139,7.571-3.134h42.667 c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-16.917l24.448,24.448c4.171,4.16,4.179,10.914,0.019,15.085 C282.904,62.872,280.188,63.999,277.355,64z'/%3E%3Cpath style='fill:%2337474F;' d='M362.689,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h16.917 L312.47,18.219c-4.171-4.16-4.179-10.914-0.019-15.085c2.006-2.011,4.731-3.139,7.571-3.134h42.667 c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-16.917l24.448,24.448c4.171,4.16,4.179,10.914,0.019,15.085 C368.238,62.872,365.521,63.999,362.689,64z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
            description : [
                {
                    desc : "Flying emoji animation development using Vanilla JS and CSS."
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
            imageUrl : "data:image/svg+xml,%3Csvg height='464pt' viewBox='0 0 464 464' width='464pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m320 0h-176c-17.671875 0-32 14.328125-32 32v16h240v-16c0-17.671875-14.328125-32-32-32zm0 0' fill='%23126099'/%3E%3Cpath d='m112 432c0 17.671875 14.328125 32 32 32h176c17.671875 0 32-14.328125 32-32v-32h-240zm0 0' fill='%23126099'/%3E%3Cpath d='m112 48h240v352h-240zm0 0' fill='%234398d1'/%3E%3Cpath d='m240 212c.085938-32.171875-14.210938-62.695312-38.984375-83.222656-24.769531-20.527344-57.421875-28.910156-89.015625-22.847656v212.140624c6.59375 1.261719 13.289062 1.90625 20 1.929688 1.351562 0 2.664062-.152344 4-.199219v16.199219h24v-19.800781c47.164062-12.640625 79.972656-55.371094 80-104.199219zm0 0' fill='%233e8cc7'/%3E%3Cpath d='m112 384v16h240v-256zm0 0' fill='%233e8cc7'/%3E%3Cpath d='m224 424h16v16h-16zm0 0' fill='%233181bd'/%3E%3Cpath d='m240 200c0 53.019531-42.980469 96-96 96s-96-42.980469-96-96 42.980469-96 96-96c25.488281-.085938 49.957031 10 67.980469 28.019531 18.019531 18.023438 28.105469 42.492188 28.019531 67.980469zm0 0' fill='%23126099'/%3E%3Cpath d='m176 184c0 17.671875-14.328125 32-32 32s-32-14.328125-32-32 14.328125-32 32-32 32 14.328125 32 32zm0 0' fill='%23fec9a3'/%3E%3Cpath d='m304 280 131.0625-115.640625c3.183594-2.808594 7.277344-4.355469 11.523438-4.359375 9.617187 0 17.414062 7.796875 17.414062 17.414062-.003906 4.246094-1.550781 8.339844-4.359375 11.523438l-115.640625 131.0625zm0 0' fill='%23e3584b'/%3E%3Cpath d='m304 280c-26.507812 0-48 21.492188-48 48v14.113281c0 10.960938-6.195312 20.984375-16 25.886719h56c26.507812 0 48-21.492188 48-48zm0 0' fill='%2387ced9'/%3E%3Cpath d='m0 360h176v64h-176zm0 0' fill='%2387ced9'/%3E%3Cpath d='m24 384h40v16h-40zm0 0' fill='%235eb3d1'/%3E%3Cpath d='m80 384h72v16h-72zm0 0' fill='%235eb3d1'/%3E%3Cpath d='m0 32h80v64h-80zm0 0' fill='%2387ced9'/%3E%3Cpath d='m24 56h32v16h-32zm0 0' fill='%235eb3d1'/%3E%3Cpath d='m144 216c-26.507812 0-48 21.492188-48 48v19.113281c29.691406 17.183594 66.308594 17.183594 96 0v-19.113281c0-26.507812-21.492188-48-48-48zm0 0' fill='%23e3584b'/%3E%3Cpath d='m272 192h-24.40625c-3.988281-51.050781-44.542969-91.605469-95.59375-95.59375v-24.40625h-16v24.40625c-51.050781 3.988281-91.605469 44.542969-95.59375 95.59375h-24.40625v16h24.425781c3.773438 51.148438 44.425781 91.828125 95.574219 95.632812v24.367188h16v-24.367188c51.148438-3.804687 91.800781-44.484374 95.574219-95.632812h24.425781zm-69.335938 73.601562c-14.070312 12.617188-31.839843 20.34375-50.664062 22.03125v-15.632812h-16v15.632812c-42.300781-3.792968-75.8125-37.332031-79.574219-79.632812h15.574219v-16h-15.59375c3.910156-42.234375 37.359375-75.683594 79.59375-79.59375v15.59375h16v-15.59375c42.234375 3.910156 75.683594 37.359375 79.59375 79.59375h-15.59375v16h15.574219c-2 22.179688-12.332031 42.773438-28.910157 57.640625zm0 0' fill='%23e3584b'/%3E%3Cpath d='m256 48h96v96h-96zm0 0' fill='%233e8cc7'/%3E%3Cpath d='m272 32h176v96h-176zm0 0' fill='%2387ced9'/%3E%3Cg fill='%235eb3d1'%3E%3Cpath d='m296 56h32v16h-32zm0 0'/%3E%3Cpath d='m344 56h80v16h-80zm0 0'/%3E%3Cpath d='m296 88h128v16h-128zm0 0'/%3E%3C/g%3E%3C/svg%3E",
            description : [
                {
                    desc : "Working attentively with CSS Pre-processors for Cosmetic Development using Mock-Ups and also using creative ideas to design Use cases as Mock Ups."
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

