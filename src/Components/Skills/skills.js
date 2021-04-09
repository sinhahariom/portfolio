import './Skills.scss';

const Skills = () => {

    const skillList = [
        "data:image/svg+xml,%3Csvg height='480pt' viewBox='-28 0 480 480' width='480pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m212.203125 208c17.675781 0 32 14.328125 32 32s-14.324219 32-32 32c-17.671875 0-32-14.328125-32-32s14.328125-32 32-32zm0 0' fill='white'/%3E%3Cpath d='m244.203125 240c0 17.671875-14.324219 32-32 32-17.671875 0-32-14.328125-32-32s14.328125-32 32-32c17.675781 0 32 14.328125 32 32zm0 0' fill='%239bc9ff'/%3E%3Cg fill='%231e81ce'%3E%3Cpath d='m212.203125 200c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40c22.09375 0 40-17.910156 40-40-.023437-22.082031-17.917969-39.972656-40-40zm0 64c-13.253906 0-24-10.746094-24-24s10.746094-24 24-24c13.257813 0 24 10.746094 24 24s-10.742187 24-24 24zm0 0'/%3E%3Cpath d='m351.40625 240c12.023438-10.164062 23.449219-21.015625 34.222656-32.496094 34.214844-37.007812 46.128906-67.273437 34.449219-87.503906-16.800781-29.0625-73.234375-23.671875-138.242187-.566406-12.519532-67.847656-36.078126-119.433594-69.632813-119.433594-33.550781 0-57.109375 51.585938-69.597656 119.441406-65.007813-23.105468-121.464844-28.496094-138.242188.558594-11.679687 20.230469.234375 50.496094 34.449219 87.503906 10.765625 11.480469 22.179688 22.328125 34.191406 32.496094-12.023437 10.164062-23.449218 21.015625-34.222656 32.496094-34.191406 37.007812-46.105469 67.273437-34.425781 87.503906 8 13.871094 25.050781 19.894531 47.753906 19.894531 31.011719-1.519531 61.574219-8.050781 90.496094-19.34375 12.488281 67.863281 36.046875 119.449219 69.597656 119.449219 33.554687 0 57.113281-51.585938 69.601563-119.441406 28.921874 11.285156 59.480468 17.816406 90.488281 19.335937 22.695312 0 39.742187-6.03125 47.753906-19.894531 11.679687-20.230469-.234375-50.496094-34.449219-87.503906-10.765625-11.480469-22.179687-22.328125-34.191406-32.496094zm54.816406-112c7.488282 12.976562-4.601562 38.640625-32.335937 68.640625-10.984375 11.6875-22.65625 22.703125-34.960938 32.992187-14.769531-11.878906-30.855469-23.65625-48.121093-35.066406-1.253907-20.253906-3.359376-40.207031-6.273438-59.199218 64.472656-23.144532 111.480469-24.96875 121.664062-7.367188zm-162.019531 167.425781c-10.847656 6.25-21.511719 12.066407-32 17.453125-10.472656-5.375-21.140625-11.195312-32-17.453125-10.710937-6.1875-21.046875-12.59375-31.117187-19.089843-.585938-11.726563-.882813-23.839844-.882813-36.335938s.296875-24.609375.882813-36.335938c10.070312-6.496093 20.40625-12.902343 31.117187-19.089843 10.839844-6.253907 21.507813-12.070313 32-17.445313 10.480469 5.390625 21.167969 11.199219 32 17.445313 10.714844 6.1875 21.050781 12.59375 31.121094 19.089843.585937 11.726563.878906 23.839844.878906 36.335938s-.292969 24.609375-.878906 36.335938c-10.070313 6.496093-20.40625 12.902343-31.121094 19.089843zm29.867187.710938c-1.167968 15.046875-2.785156 29.328125-4.800781 42.742187-12.625-4.984375-25.808593-10.726562-39.433593-17.246094 7.519531-4 14.992187-8.105468 22.34375-12.34375 7.351562-4.242187 14.738281-8.695312 21.890624-13.152343zm-79.519531 25.464843c-13.601562 6.511719-26.808593 12.261719-39.433593 17.246094-1.992188-13.414062-3.609376-27.695312-4.800782-42.742187 7.152344 4.453125 14.441406 8.835937 21.863282 13.152343 7.378906 4.269532 14.847656 8.34375 22.371093 12.34375zm-61.890625-56.21875c-12.175781-8.335937-23.671875-16.796874-34.496094-25.382812 10.796876-8.570312 22.292969-17.042969 34.496094-25.414062-.289062 8.476562-.457031 16.964843-.457031 25.414062s.167969 16.9375.457031 25.414062zm17.679688-81.550781c1.167968-15.039062 2.785156-29.3125 4.800781-42.71875 12.609375 4.976563 25.777344 10.726563 39.382813 17.230469-7.507813 3.988281-14.941407 8.101562-22.292969 12.335938-7.457031 4.320312-14.753907 8.714843-21.890625 13.183593zm79.539062-25.433593c13.597656-6.511719 26.796875-12.253907 39.414063-17.238282 1.992187 13.414063 3.609375 27.695313 4.800781 42.742188-7.167969-4.484375-14.464844-8.882813-21.890625-13.191406-7.34375-4.238282-14.804687-8.3125-22.324219-12.3125zm61.871094 56.226562c12.175781 8.328125 23.671875 16.789062 34.496094 25.375-10.796875 8.566406-22.292969 17.039062-34.496094 25.414062.285156-8.476562.453125-16.964843.453125-25.414062s-.167969-16.9375-.453125-25.414062zm-79.546875-198.625c20.363281 0 42.273437 41.65625 54.441406 109.078125-17.902343 6.96875-36.246093 15.128906-54.398437 24.179687-18.191406-9.050781-36.546875-17.210937-54.402344-24.179687 12.089844-67.414063 34-109.078125 54.359375-109.078125zm-161.652344 180.640625c-27.738281-30-39.824219-55.664063-32.335937-68.640625 4.519531-7.824219 16.277344-11.816406 33.597656-11.816406 30.207031 1.589844 59.957031 8.074218 88.089844 19.199218-2.914063 18.960938-5.015625 38.90625-6.273438 59.152344-17.265625 11.410156-33.351562 23.199219-48.121094 35.066406-12.300781-10.277343-23.976562-21.285156-34.957031-32.960937zm-32.335937 155.359375c-7.488282-12.976562 4.597656-38.640625 32.335937-68.640625 10.980469-11.6875 22.652344-22.703125 34.957031-32.992187 14.769532 11.878906 30.855469 23.65625 48.121094 35.066406 1.257813 20.253906 3.359375 40.207031 6.273438 59.199218-64.496094 23.144532-111.503906 24.96875-121.6875 7.367188zm193.988281 112c-20.359375 0-42.261719-41.65625-54.398437-109.070312 17.894531-6.96875 36.25-15.128907 54.441406-24.175782 18.191406 9.046875 36.542968 17.207032 54.4375 24.175782-12.214844 67.414062-34.117188 109.070312-54.480469 109.070312zm193.992187-112c-10.175781 17.601562-57.214843 15.777344-121.6875-7.390625 2.914063-18.96875 5.015626-38.921875 6.273438-59.203125 17.265625-11.40625 33.351562-23.199219 48.121094-35.0625 12.304687 10.285156 23.976562 21.304688 34.957031 32.992188 27.738281 30.023437 39.824219 55.6875 32.335937 68.664062zm0 0'/%3E%3C/g%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='96px' height='96px'%3E%3Cpath fill='%23bdbdbd' d='M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z'/%3E%3Cpath fill='%23b71c1c' d='M42.818 10.527L24 4.135 24 43.695 39.832 35.017z'/%3E%3Cpath fill='%23dd2c00' d='M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z'/%3E%3Cpath fill='%23bdbdbd' d='M24 5.996L24 15.504 32.578 34 36.987 34z'/%3E%3Cpath fill='%23eee' d='M11.013 34L15.422 34 24 15.504 24 5.996z'/%3E%3Cpath fill='%23bdbdbd' d='M24 24H30V28H24z'/%3E%3Cpath fill='%23eee' d='M18 24H24V28H18z'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg height='64' viewBox='0 0 64 64' width='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233880ff' transform='matrix(.43537415 0 0 .43537415 -16.631293 -79.368707)'%3E%3Cpath d='m111.8 222.5c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5c-.1-18.5-15.1-33.5-33.5-33.5z'/%3E%3Ccircle cx='159.8' cy='210.2' r='15.3'/%3E%3Cpath d='m178.6 225.5-.6-1.4-1 1.2c-2.5 2.8-5.7 5-9.2 6.3l-1 .4.4 1c3.1 7.3 4.6 15.1 4.6 23 0 33.1-26.9 60.1-60.1 60.1s-60-27-60-60.1 26.9-60.1 60.1-60.1c9 0 17.6 2 25.7 5.8l.9.4.4-1c1.5-3.5 3.8-6.5 6.8-8.9l1.2-1-1.4-.7c-10.5-5.4-21.8-8.2-33.7-8.2-40.5 0-73.5 33-73.5 73.5s33 73.5 73.5 73.5 73.5-33 73.5-73.5c0-10.4-2.2-20.6-6.6-30.3z'/%3E%3C/g%3E%3C/svg%3E",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%23E4BA42;' d='M512,256c0,33.353-6.374,65.212-17.983,94.438c-6.207,15.632-13.908,30.511-22.936,44.45 c-11.243,17.387-24.545,33.322-39.549,47.449c-8.788,8.286-18.15,15.945-28.035,22.925C361.806,494.707,310.93,512,256,512 s-105.806-17.293-147.498-46.738c-12.372-8.735-23.928-18.526-34.534-29.268C28.233,389.757,0,326.165,0,256 S28.233,122.243,73.968,76.006c11.233-11.368,23.531-21.682,36.728-30.793C151.97,16.697,202.031,0,256,0 s104.03,16.697,145.304,45.213c10.083,6.949,19.634,14.618,28.588,22.925c15.684,14.503,29.539,30.96,41.19,48.974 c9.028,13.939,16.729,28.818,22.936,44.45C505.626,190.788,512,222.647,512,256z'/%3E%3Cg%3E%3Cpath style='fill:%23F2F2F2;' d='M391.05,232.97c-7.125-20.664-36.341-20.664-42.04-3.563c-5.7,17.101,13.539,27.076,43.466,37.053 c29.927,9.976,48.454,36.341,44.891,59.854s-13.539,54.154-72.68,54.154c-36.963,0-57.505-23.103-67.714-40.429l33.511-20.138 c0,0,11.401,24.227,32.777,24.227c21.377,0,29.927-7.125,29.927-23.514c0-19.951-69.118-27.076-79.806-61.279 s3.563-82.656,53.441-79.094c31.175,2.227,48.71,17.535,57.478,28.703L391.05,232.97z'/%3E%3Cpath style='fill:%23F2F2F2;' d='M235.714,183.805c0,0,0,120.421,0,136.81c0,16.388-14.251,24.94-28.502,22.089 c-14.251-2.85-20.664-19.951-20.664-19.951l-32.777,22.089c0,0,7.125,32.777,52.016,35.628 c44.891,2.85,70.542-24.227,70.542-47.029s0-149.636,0-149.636L235.714,183.805L235.714,183.805z'/%3E%3Cpath style='fill:%23F2F2F2;' d='M73.968,45.213v390.781c10.606,10.742,22.162,20.532,34.534,29.268h294.996 c9.885-6.98,19.247-14.639,28.035-22.925H96.893V68.138h374.188v326.75c9.028-13.939,16.729-28.818,22.936-44.45V45.213H73.968z'/%3E%3C/g%3E%3Ccircle style='fill:%233F4A43;' cx='87.855' cy='339.143' r='40.615'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3Csvg height='464pt' viewBox='0 0 464 464' width='464pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m320 0h-176c-17.671875 0-32 14.328125-32 32v16h240v-16c0-17.671875-14.328125-32-32-32zm0 0' fill='%23126099'/%3E%3Cpath d='m112 432c0 17.671875 14.328125 32 32 32h176c17.671875 0 32-14.328125 32-32v-32h-240zm0 0' fill='%23126099'/%3E%3Cpath d='m112 48h240v352h-240zm0 0' fill='%234398d1'/%3E%3Cpath d='m240 212c.085938-32.171875-14.210938-62.695312-38.984375-83.222656-24.769531-20.527344-57.421875-28.910156-89.015625-22.847656v212.140624c6.59375 1.261719 13.289062 1.90625 20 1.929688 1.351562 0 2.664062-.152344 4-.199219v16.199219h24v-19.800781c47.164062-12.640625 79.972656-55.371094 80-104.199219zm0 0' fill='%233e8cc7'/%3E%3Cpath d='m112 384v16h240v-256zm0 0' fill='%233e8cc7'/%3E%3Cpath d='m224 424h16v16h-16zm0 0' fill='%233181bd'/%3E%3Cpath d='m240 200c0 53.019531-42.980469 96-96 96s-96-42.980469-96-96 42.980469-96 96-96c25.488281-.085938 49.957031 10 67.980469 28.019531 18.019531 18.023438 28.105469 42.492188 28.019531 67.980469zm0 0' fill='%23126099'/%3E%3Cpath d='m176 184c0 17.671875-14.328125 32-32 32s-32-14.328125-32-32 14.328125-32 32-32 32 14.328125 32 32zm0 0' fill='%23fec9a3'/%3E%3Cpath d='m304 280 131.0625-115.640625c3.183594-2.808594 7.277344-4.355469 11.523438-4.359375 9.617187 0 17.414062 7.796875 17.414062 17.414062-.003906 4.246094-1.550781 8.339844-4.359375 11.523438l-115.640625 131.0625zm0 0' fill='%23e3584b'/%3E%3Cpath d='m304 280c-26.507812 0-48 21.492188-48 48v14.113281c0 10.960938-6.195312 20.984375-16 25.886719h56c26.507812 0 48-21.492188 48-48zm0 0' fill='%2387ced9'/%3E%3Cpath d='m0 360h176v64h-176zm0 0' fill='%2387ced9'/%3E%3Cpath d='m24 384h40v16h-40zm0 0' fill='%235eb3d1'/%3E%3Cpath d='m80 384h72v16h-72zm0 0' fill='%235eb3d1'/%3E%3Cpath d='m0 32h80v64h-80zm0 0' fill='%2387ced9'/%3E%3Cpath d='m24 56h32v16h-32zm0 0' fill='%235eb3d1'/%3E%3Cpath d='m144 216c-26.507812 0-48 21.492188-48 48v19.113281c29.691406 17.183594 66.308594 17.183594 96 0v-19.113281c0-26.507812-21.492188-48-48-48zm0 0' fill='%23e3584b'/%3E%3Cpath d='m272 192h-24.40625c-3.988281-51.050781-44.542969-91.605469-95.59375-95.59375v-24.40625h-16v24.40625c-51.050781 3.988281-91.605469 44.542969-95.59375 95.59375h-24.40625v16h24.425781c3.773438 51.148438 44.425781 91.828125 95.574219 95.632812v24.367188h16v-24.367188c51.148438-3.804687 91.800781-44.484374 95.574219-95.632812h24.425781zm-69.335938 73.601562c-14.070312 12.617188-31.839843 20.34375-50.664062 22.03125v-15.632812h-16v15.632812c-42.300781-3.792968-75.8125-37.332031-79.574219-79.632812h15.574219v-16h-15.59375c3.910156-42.234375 37.359375-75.683594 79.59375-79.59375v15.59375h16v-15.59375c42.234375 3.910156 75.683594 37.359375 79.59375 79.59375h-15.59375v16h15.574219c-2 22.179688-12.332031 42.773438-28.910157 57.640625zm0 0' fill='%23e3584b'/%3E%3Cpath d='m256 48h96v96h-96zm0 0' fill='%233e8cc7'/%3E%3Cpath d='m272 32h176v96h-176zm0 0' fill='%2387ced9'/%3E%3Cg fill='%235eb3d1'%3E%3Cpath d='m296 56h32v16h-32zm0 0'/%3E%3Cpath d='m344 56h80v16h-80zm0 0'/%3E%3Cpath d='m296 88h128v16h-128zm0 0'/%3E%3C/g%3E%3C/svg%3E",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%23F2F2F2;' d='M512,256c0,82.317-38.86,155.564-99.234,202.397C369.455,492.001,315.068,512,256,512 c-58.535,0-112.473-19.644-155.596-52.705C39.361,412.515,0,338.85,0,256C0,114.615,114.615,0,256,0S512,114.615,512,256z'/%3E%3Cpath style='fill:%23E64C18;' d='M441.992,119.474l-29.226,338.923C369.455,492.001,315.068,512,256,512 c-58.535,0-112.473-19.644-155.596-52.705L71.105,119.474H441.992z'/%3E%3Cpolygon style='fill:%23F36518;' points='256.546,151.249 256.546,504.167 378.46,469.75 405.655,151.249 '/%3E%3Cpolygon style='fill:%23FFFFFF;' points='140.903,195.528 152.858,337.091 311.761,337.091 306.562,395.568 256.549,409.112 204.46,394.52 203.152,358.061 154.631,358.061 160.705,429.941 256.549,457.028 352.392,429.941 364.27,289.295 196.928,289.295 192.775,243.456 192.774,243.454 368.226,242.535 372.194,195.528 '/%3E%3Cpolygon points='151.159,16.796 151.159,41.117 127.921,41.117 127.921,16.796 106.303,16.796 106.303,86.513 127.921,86.513 127.921,63.815 151.159,63.815 151.159,86.513 172.777,86.513 172.777,16.796 '/%3E%3Cpolygon points='249.521,16.796 183.045,16.796 183.045,41.117 204.663,41.117 204.663,87.055 227.903,87.055 227.903,41.117 249.521,41.117 '/%3E%3Cpolygon points='373.284,64.895 373.284,17.337 350.044,17.337 350.044,64.895 350.044,87.055 373.284,87.055 406.79,87.055 406.79,64.895 '/%3E%3Cpolygon points='314.914,17.337 298.702,42.197 282.488,17.337 259.249,17.337 259.249,87.055 282.488,87.055 282.488,52.465 298.702,77.327 314.914,52.465 314.914,87.055 338.154,87.055 338.154,17.337 '/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%232196F3;' d='M434.582,110.165c-2.02-2.227-4.887-3.497-7.893-3.499H85.355 c-5.891-0.026-10.688,4.728-10.714,10.619c-0.002,0.351,0.014,0.701,0.047,1.05l32,341.333c0.413,4.379,3.471,8.055,7.701,9.259 l149.333,42.667c0.964,0.274,1.963,0.41,2.965,0.405c1.144-0.001,2.282-0.181,3.371-0.533l128-42.667 c4.015-1.336,6.86-4.918,7.253-9.131l32-341.333C437.592,115.35,436.6,112.384,434.582,110.165z'/%3E%3Cg%3E%3Cpath style='fill:%23FAFAFA;' d='M266.689,426.667c-0.989-0.006-1.973-0.15-2.923-0.427l-74.667-21.333 c-3.665-1.043-6.495-3.963-7.424-7.659l-10.667-42.667c-1.558-5.681,1.785-11.55,7.466-13.108 c5.681-1.558,11.55,1.785,13.108,7.466c0.044,0.159,0.083,0.318,0.119,0.479l9.173,36.693l65.813,18.816l64.853-18.539 l19.2-173.035h-190.72c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h202.667 c5.891-0.036,10.695,4.711,10.731,10.602c0.002,0.414-0.019,0.827-0.065,1.238l-21.333,192c-0.484,4.3-3.518,7.882-7.68,9.067 l-74.667,21.333C268.704,426.537,267.698,426.674,266.689,426.667z'/%3E%3Cpath style='fill:%23FAFAFA;' d='M352.022,298.667H170.689c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h181.333 c5.891,0,10.667,4.776,10.667,10.667S357.913,298.667,352.022,298.667z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%2337474F;' d='M192.022,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667V10.667C138.689,4.776,143.464,0,149.355,0 h42.667c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-32v21.333h32c5.891,0,10.667,4.776,10.667,10.667 S197.913,64,192.022,64z'/%3E%3Cpath style='fill:%2337474F;' d='M277.355,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h16.917 l-24.469-24.448c-4.171-4.16-4.179-10.914-0.019-15.085c2.006-2.011,4.731-3.139,7.571-3.134h42.667 c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-16.917l24.448,24.448c4.171,4.16,4.179,10.914,0.019,15.085 C282.904,62.872,280.188,63.999,277.355,64z'/%3E%3Cpath style='fill:%2337474F;' d='M362.689,64h-42.667c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h16.917 L312.47,18.219c-4.171-4.16-4.179-10.914-0.019-15.085c2.006-2.011,4.731-3.139,7.571-3.134h42.667 c5.891,0,10.667,4.776,10.667,10.667s-4.776,10.667-10.667,10.667h-16.917l24.448,24.448c4.171,4.16,4.179,10.914,0.019,15.085 C368.238,62.872,365.521,63.999,362.689,64z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3Csvg height='368pt' viewBox='0 0 368 368' width='368pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m344 8h-320c-8.800781 0-16 7.199219-16 16v320c0 8.800781 7.199219 16 16 16h320c8.800781 0 16-7.199219 16-16v-320c0-8.800781-7.199219-16-16-16zm0 0' fill='%23cce4ff'/%3E%3Cg fill='%23007aff'%3E%3Cpath d='m344 0h-320c-13.230469 0-24 10.769531-24 24v320c0 13.230469 10.769531 24 24 24h320c13.230469 0 24-10.769531 24-24v-320c0-13.230469-10.769531-24-24-24zm8 344c0 4.414062-3.59375 8-8 8h-320c-4.40625 0-8-3.585938-8-8v-320c0-4.40625 3.59375-8 8-8h320c4.40625 0 8 3.59375 8 8zm0 0'/%3E%3Cpath d='m216 64h-112c-4.414062 0-8 3.585938-8 8v224c0 4.425781 3.585938 8 8 8h112c30.878906 0 56-25.128906 56-56v-16c0-20.382812-10.984375-38.199219-27.304688-48 16.320313-9.792969 27.304688-27.617188 27.304688-48v-16c0-30.878906-25.121094-56-56-56zm40 168v16c0 22.054688-17.945312 40-40 40h-104v-96h104c22.054688 0 40 17.945312 40 40zm0-96c0 22.054688-17.945312 40-40 40h-104v-96h104c22.054688 0 40 17.945312 40 40zm0 0'/%3E%3C/g%3E%3C/svg%3E",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512.548 512.548' style='enable-background:new 0 0 512.548 512.548;' xml:space='preserve'%3E%3Cpath style='fill:%23FFC107;' d='M266.941,0c-5.891,0-10.667,4.776-10.667,10.667v234.667c0,5.891,4.776,10.667,10.667,10.667h234.667 c5.891,0,10.667-4.776,10.667-10.667C512.121,109.903,402.371,0.153,266.941,0z'/%3E%3Cpath style='fill:%232196F3;' d='M382.034,452.117L234.941,263.019V32c0-5.891-4.776-10.667-10.667-10.667 c-123.52,0-224,110.059-224,245.333C0.427,402.097,110.177,511.847,245.607,512c49.173,3.821,97.795-12.45,134.763-45.099 C384.837,463.237,385.575,456.683,382.034,452.117z'/%3E%3Cpath style='fill:%234CAF50;' d='M501.607,277.333H288.274c-5.891,0.001-10.666,4.778-10.664,10.669c0,2.437,0.835,4.8,2.366,6.696 l138.667,171.669c1.86,2.308,4.596,3.737,7.552,3.947h0.747c2.699,0.002,5.299-1.02,7.275-2.859 c49.69-46.469,77.943-111.423,78.059-179.456C512.274,282.109,507.499,277.333,501.607,277.333z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3Csvg width='2500' height='2393' viewBox='0 0 256 245' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid'%3E%3Cpath d='M232.727 244.364h-41.454l2.909-34.91h-20.364l-2.909 34.91H85.091l-2.91-34.91H61.819l2.91 34.91H23.272L0 93.09 58.182 0h139.636L256 93.09l-23.273 151.274zM186.182 46.545h-37.403L151.273 64h-46.546l2.494-17.455H69.818L46.545 93.091l11.637 93.09h139.636l11.637-93.09-23.273-46.546zm-20.364 108.742c-3.213 0-5.818-9.69-5.818-21.643 0-11.954 2.605-21.644 5.818-21.644 3.213 0 5.818 9.69 5.818 21.644 0 11.953-2.605 21.643-5.818 21.643zm-73.454 1.804c-3.213 0-5.819-9.69-5.819-21.644 0-11.953 2.606-21.643 5.819-21.643s5.818 9.69 5.818 21.643c0 11.954-2.605 21.644-5.818 21.644z' fill='%23444'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 511.998 511.998' style='enable-background:new 0 0 511.998 511.998;' xml:space='preserve'%3E%3Cg%3E%3Cpath style='fill:%23DB380E;' d='M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699 c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979 c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171 c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41 c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z'/%3E%3Cpath style='fill:%23DB380E;' d='M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895 c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927 c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021 c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26 c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%2373A1FB;' d='M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029 c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046 c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58 c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524 s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z'/%3E%3Cpath style='fill:%2373A1FB;' d='M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72 c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304 c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092 c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z'/%3E%3Cpath style='fill:%2373A1FB;' d='M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563 c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147 c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036 c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918 c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0 c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z'/%3E%3Cpath style='fill:%2373A1FB;' d='M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946 c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984 c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571 s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913 c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z'/%3E%3Cpath style='fill:%2373A1FB;' d='M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867 c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461 c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873 c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776 c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5 c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z' /%3E%3Cpath style='fill:%2373A1FB;' d='M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344 c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618 c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645 c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 377.5 97.1' style='enable-background:new 0 0 377.5 97.1;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%236DB33F;%7D .st1%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M88.5,5.7c-1.3,3.2-3.1,6.3-5.2,9.1C64.7-4.5,34-5,14.8,13.6S-5,62.9,13.6,82.1c0.6,0.7,1.3,1.3,2,1.9l1.8,1.6 c20.4,17.2,51,14.6,68.2-5.8C92.2,72,96.2,62.2,96.9,52C98.3,39.9,94.6,24.3,88.5,5.7z M22.6,84.5c-1.4,1.8-4,2-5.8,0.6 s-2-4-0.6-5.8s4-2,5.8-0.6C23.7,80.1,24,82.7,22.6,84.5z M88.2,70C76.3,85.9,50.7,80.5,34.4,81.3c0,0-2.9,0.2-5.8,0.6 c0,0,1.1-0.5,2.5-1c11.5-4,16.9-4.8,23.9-8.4c13.1-6.7,26.2-21.4,28.8-36.6c-5,14.6-20.2,27.2-34,32.3c-9.5,3.5-26.6,6.9-26.6,6.9 l-0.7-0.4c-11.6-5.7-12-30.9,9.2-39c9.3-3.6,18.1-1.6,28.2-4C70.6,29.2,83,21.2,88,10.7C93.6,27.6,100.4,53.8,88.2,70z'/%3E%3Cpath class='st0' d='M124.4,67.6c-1.3-0.8-2.1-2.2-2-3.7c0-2.4,1.9-4.4,4.3-4.4c0,0,0,0,0.1,0c0.8,0,1.6,0.2,2.3,0.6 c4,2.8,8.7,4.3,13.5,4.5c4.6,0,7.3-2,7.3-5.1v-0.2c0-3.7-5-4.9-10.5-6.6c-6.9-2-14.7-4.8-14.7-13.8v-0.2c0-8.9,7.4-14.3,16.7-14.3 c5.2,0.1,10.2,1.4,14.8,3.8c1.6,0.8,2.6,2.3,2.6,4.1c0,2.4-2,4.4-4.4,4.4h-0.1c-0.7,0-1.4-0.2-2.1-0.5c-3.4-1.9-7.1-3-11-3.2 c-4.2,0-6.6,2-6.6,4.6v0.2c0,3.5,5.1,4.9,10.6,6.7c6.9,2.1,14.6,5.3,14.6,13.7v0.2c0,9.9-7.7,14.8-17.4,14.8 C136,73.1,129.7,71.2,124.4,67.6z'/%3E%3Cpath class='st0' d='M163.8,29.9c-0.1-2.9,2.3-5.3,5.2-5.4h0.1c3,0,5.4,2.4,5.4,5.4l0,0v3.2c3.5-4.9,8.4-8.8,16-8.8 c11,0,21.8,8.7,21.8,24.4v0.2c0,15.6-10.7,24.4-21.8,24.4c-7.8,0-12.7-3.9-16-8.3v16.6c0,3-2.4,5.4-5.4,5.4l0,0 c-2.9,0-5.3-2.4-5.3-5.3v-0.1V29.9z M201.5,48.9v-0.2c0-9.1-6.1-15-13.4-15s-13.7,6.1-13.7,15v0.2c0,9,6.4,15,13.7,15 S201.5,58.2,201.5,48.9z'/%3E%3Cpath class='st0' d='M216.5,29.9c-0.1-2.9,2.3-5.3,5.2-5.4h0.1c3,0,5.4,2.4,5.4,5.4l0,0v2.6c0.5-4,7.1-8,11.8-8 c2.7-0.2,5.1,1.8,5.3,4.5c0,0.3,0,0.5,0,0.8c0,2.6-1.8,4.8-4.3,5.2c-7.7,1.3-12.9,8-12.9,17.3v15.5c0,3-2.4,5.3-5.4,5.3 c-2.9,0-5.3-2.3-5.3-5.2c0,0,0,0,0-0.1L216.5,29.9L216.5,29.9z'/%3E%3Cpath class='st0' d='M248.6,30c-0.1-2.9,2.3-5.3,5.2-5.4h0.1c3,0,5.4,2.4,5.4,5.4l0,0v37.9c0,3-2.4,5.3-5.4,5.3s-5.3-2.4-5.3-5.3 L248.6,30z'/%3E%3Cpath class='st0' d='M264.8,30c-0.1-2.9,2.3-5.3,5.2-5.4h0.1c3,0,5.4,2.4,5.4,5.4l0,0v2.2c3.2-5,8.8-7.9,14.7-7.7 c10.6,0,16.7,7.1,16.7,18v25.3c0.1,2.9-2.2,5.2-5.1,5.3c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.3-2.3-5.4-5.2v-0.1v-22 c0-7.3-3.6-11.5-10.1-11.5c-6.2,0-10.6,4.4-10.6,11.7v21.9c0,3-2.4,5.4-5.4,5.4s-5.4-2.4-5.4-5.4L264.8,30L264.8,30z'/%3E%3Cpath class='st0' d='M354.3,24.4c-3,0-5.4,2.4-5.4,5.4l0,0V33c-3.5-4.9-8.4-8.8-16-8.8c-11,0-21.8,8.7-21.8,24.4v0.2 c0,15.6,10.7,24.4,21.8,24.4c7.8,0,12.7-3.9,16-8.2c-0.5,8.5-5.7,12.9-14.8,12.9c-5,0-10-1.2-14.4-3.7c-0.6-0.3-1.2-0.4-1.9-0.4 c-2.5,0-4.5,1.9-4.6,4.4c0,1.9,1.2,3.7,3,4.3c5.7,2.8,11.9,4.2,18.2,4.2c8.5,0,15.1-2,19.3-6.3c3.9-3.9,6-9.8,6-17.7V29.9 c0.1-3-2.3-5.4-5.3-5.5C354.4,24.4,354.3,24.4,354.3,24.4z M335.4,63.9c-7.4,0-13.4-5.8-13.4-15.1v-0.2c0-9.1,6.1-15,13.4-15 s13.7,6.1,13.7,15v0.2C349.2,57.8,342.8,63.9,335.4,63.9z'/%3E%3Cpath class='st0' d='M259.4,11.6c0,3-2.4,5.4-5.4,5.4s-5.4-2.4-5.4-5.4s2.4-5.4,5.4-5.4l0,0c2.9-0.1,5.3,2.3,5.4,5.2 C259.4,11.5,259.4,11.5,259.4,11.6z'/%3E%3Cpath class='st0' d='M372,35.7c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S375,35.7,372,35.7z M372,25.5 c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7s-2-4.7-4.6-4.7H372z M373.5,33.3l-1.6-2.5h-1.1v2.5h-0.9V27h2.6 c1.1-0.1,2,0.8,2.1,1.9l0,0c0,0.9-0.7,1.7-1.6,1.9l1.7,2.5H373.5z M372.4,27.8h-1.6V30h1.7c0.6,0,1.1-0.5,1.1-1.1 S373.1,27.8,372.4,27.8L372.4,27.8z'/%3E%3Cpath class='st0' d='M85.6,79.8C92.2,72,96.2,62.2,96.9,52'/%3E%3Cpath class='st1' d='M88.2,70C76.3,85.9,50.7,80.5,34.4,81.3c0,0-2.9,0.2-5.8,0.6c0,0,1.1-0.5,2.5-1c11.5-4,16.9-4.8,23.9-8.4 c13.1-6.7,26.2-21.4,28.8-36.6c-5,14.6-20.2,27.2-34,32.3c-9.5,3.5-26.6,6.9-26.6,6.9l-0.7-0.4c-11.6-5.7-12-30.9,9.2-39 c9.3-3.6,18.1-1.6,28.2-4C70.6,29.2,83,21.2,88,10.7C93.6,27.6,100.4,53.8,88.2,70z'/%3E%3Cpath class='st1' d='M22.6,84.5c-1.4,1.8-4,2-5.8,0.6s-2-4-0.6-5.8s4-2,5.8-0.6C23.7,80.1,24,82.7,22.6,84.5z'/%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3Csvg id='Capa_1' enable-background='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='m390.283 125.216h-156.554v-94.311c0-17.068 13.837-30.905 30.906-30.905h94.743c17.069 0 30.905 13.837 30.905 30.905z' fill='%23e19974'/%3E%3Cpath d='m359.378 0h-30.905c17.069 0 30.905 13.837 30.905 30.905v94.311h30.905v-94.311c0-17.068-13.836-30.905-30.905-30.905z' fill='%23dc8758'/%3E%3Cg%3E%3Cpath d='m457.173 444.867h53.436l-32.311-136.393c-4.749-20.045-20.489-35.592-40.512-40.015l-72.013-15.907-18.271-.622c-8.169-1.804-13.988-9.078-13.988-17.485v-54.528h-43.014v54.528c0 8.406-5.819 15.68-13.988 17.485l-18.27.622-72.014 15.907c-20.023 4.423-35.764 19.97-40.512 40.015l-32.311 136.393' fill='%23b3dafe'/%3E%3Cg%3E%3Cpath d='m345.508 270.355 61.372 13.557c20.023 4.423 35.764 19.97 40.512 40.015l28.65 120.941h34.566l-32.311-136.393c-4.749-20.045-20.489-35.592-40.512-40.015l-72.014-15.907z' fill='%238ac9fe'/%3E%3C/g%3E%3Cpath d='m497.355 472.478-72.333 22.068-9.34-45.009 70.871-17.071c11.082-2.669 22.219 4.196 24.875 15.334 2.545 10.672-3.624 21.49-14.073 24.678z' fill='%23ffcebf'/%3E%3Cpath d='m511.428 447.799c-2.656-11.138-13.793-18.004-24.875-15.334l-14.013 3.375c3.859 2.802 6.786 6.941 7.983 11.959 2.545 10.673-3.624 21.49-14.073 24.678l-43.268 13.2 1.84 8.867 72.333-22.068c10.449-3.186 16.618-14.004 14.073-24.677z' fill='%23ffb09e'/%3E%3C/g%3E%3Cg%3E%3Cpath d='m126.659 472.478 72.333 22.068 9.34-45.009-70.871-17.071c-11.082-2.669-22.219 4.196-24.875 15.334-2.544 10.672 3.625 21.49 14.073 24.678z' fill='%23ffcebf'/%3E%3C/g%3E%3Cpath d='m258.241 252.552c12.37 16.239 31.845 26.721 53.766 26.721 21.92 0 41.396-10.482 53.766-26.721l-18.27-.622c-8.169-1.805-13.988-9.079-13.988-17.485v-54.528h-58.467v54.528c0 8.406-5.819 15.68-13.988 17.485z' fill='%23ffcebf'/%3E%3Cpath d='m332.049 267.382 13.459 2.973c7.882-4.526 14.774-10.596 20.264-17.803l-2.818-.622c-8.169-1.805-13.988-9.079-13.988-17.485v-54.528h-30.905v69.981c0 8.405 5.819 15.679 13.988 17.484z' fill='%23ffb09e'/%3E%3Cpath d='m390.283 98.026c-6.699-1.931-17.721-6.033-28.841-15.028-9.759-7.893-15.895-16.563-19.575-22.947-1.118-1.939-3.718-2.379-5.399-.906-7.405 6.488-16.704 13.42-28.075 19.626-29.731 16.229-58.1 19.026-74.665 19.254v50.161c0 29.872 16.565 55.856 40.966 69.178 11.091 6.056 22.312 5.639 35.821 5.639 0 0 27.473.48 38.491-5.47 24.571-13.271 41.277-39.348 41.277-69.347z' fill='%23ffcebf'/%3E%3Cpath d='m361.442 82.998c-9.781-7.911-15.922-16.601-19.599-22.989-1.11-1.928-3.699-2.332-5.372-.865-4.845 4.245-10.518 8.678-17.035 12.976 3.036 3.597 6.696 7.317 11.101 10.879 5.046 4.082 10.072 7.156 14.684 9.477 8.632 4.345 14.158 13.092 14.158 22.755v32.957c.234 4.951.915 30.06-17.976 50.162-26.015 27.683-64.485 19.63-66.355 19.205 7.635 4.001 17.845 7.927 30.18 9.012 2.347.207 4.611.296 6.78.294 43.231 0 78.277-35.223 78.277-78.674v-50.161c-6.701-1.932-17.723-6.034-28.843-15.028z' fill='%23ffb09e'/%3E%3Cg%3E%3Cg%3E%3Cpath d='m274.239 143.804c-4.268 0-7.726-3.459-7.726-7.726v-15.183c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v15.183c.001 4.267-3.458 7.726-7.726 7.726z' fill='%233f6e90'/%3E%3C/g%3E%3Cg%3E%3Cpath d='m349.774 143.804c-4.268 0-7.726-3.459-7.726-7.726v-15.183c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v15.183c0 4.267-3.459 7.726-7.726 7.726z' fill='%233f6e90'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath d='m312.007 199.874c-.137 0-.273-.001-.41-.002-6.419-.067-12.79-1.746-18.428-4.853-3.736-2.06-5.096-6.76-3.036-10.496 2.06-3.737 6.76-5.098 10.497-3.036 2.376 1.31 6.236 2.882 11.13 2.934.082.001.165.001.246.001 4.994 0 8.935-1.589 11.376-2.935 3.738-2.06 8.436-.701 10.497 3.036 2.059 3.737.7 8.436-3.036 10.496-4.039 2.226-10.562 4.855-18.836 4.855z' fill='%23ffb09e'/%3E%3C/g%3E%3Cpath d='m399.851 135.164h-9.568v-37.138h9.568c10.23 0 18.522 8.293 18.522 18.522v.094c.001 10.23-8.292 18.522-18.522 18.522z' fill='%23ffcebf'/%3E%3Cpath d='m224.161 135.164h9.568v-37.138h-9.568c-10.23 0-18.522 8.293-18.522 18.522v.094c0 10.23 8.293 18.522 18.522 18.522z' fill='%23ffb09e'/%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='m184.246 481.095h255.521c5.002 0 9.057 4.612 9.057 10.302v10.302c0 5.69-4.055 10.302-9.057 10.302h-255.521c-5.002 0-9.057-4.612-9.057-10.302v-10.302c0-5.69 4.055-10.302 9.057-10.302z' fill='%23355f7f'/%3E%3Cpath d='m439.767 481.095h-30.905c5.002 0 9.057 4.612 9.057 10.302v10.302c0 5.69-4.055 10.302-9.057 10.302h30.905c5.002 0 9.057-4.612 9.057-10.302v-10.302c0-5.69-4.055-10.302-9.057-10.302z' fill='%23305972'/%3E%3Cg%3E%3Cpath d='m421.584 481.095h-219.155c-15.044 0-27.24-12.196-27.24-27.24v-123.028c0-15.044 12.196-27.24 27.24-27.24h219.155c15.044 0 27.24 12.196 27.24 27.24v123.028c0 15.044-12.196 27.24-27.24 27.24z' fill='%233f6e90'/%3E%3C/g%3E%3Cpath d='m421.584 303.587h-30.905c15.044 0 27.24 12.196 27.24 27.24v123.028c0 15.044-12.196 27.24-27.24 27.24h30.905c15.044 0 27.24-12.196 27.24-27.24v-123.028c0-15.044-12.196-27.24-27.24-27.24z' fill='%23355f7f'/%3E%3C/g%3E%3C/g%3E%3Cellipse cx='312.006' cy='395.937' fill='%23fff' rx='29.435' ry='29.585'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath d='m134.227 222.409h-10.307c-2.33 0-4.218 1.889-4.218 4.218v13.209c0 3.369-3.755 5.378-6.558 3.51l-16.625-19.52c-1.386-.924-3.014-1.417-4.68-1.417h-66.53c-13.978 0-25.309-11.331-25.309-25.308v-61.927c0-13.978 11.331-25.309 25.309-25.309h108.918c13.978 0 25.309 11.331 25.309 25.309v61.927c-.001 13.977-11.332 25.308-25.309 25.308z' fill='%23b3dafe'/%3E%3Cpath d='m134.227 109.865h-30.905c13.977 0 25.308 11.331 25.308 25.309v61.927c0 13.977-11.331 25.309-25.308 25.309h-10.308c-.17 0-.332.03-.497.05 1.425.116 2.805.569 4.001 1.367l16.625 19.52c2.803 1.869 6.558-.141 6.558-3.51v-13.209c0-2.33 1.888-4.218 4.218-4.218h10.307c13.977 0 25.308-11.331 25.308-25.309v-61.927c.001-13.978-11.33-25.309-25.307-25.309z' fill='%238ac9fe'/%3E%3Cg%3E%3Cg%3E%3Cpath d='m119.959 158.411h-80.383c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h80.383c4.267 0 7.726 3.459 7.726 7.726.001 4.267-3.459 7.726-7.726 7.726z' fill='%23d8ecfe'/%3E%3C/g%3E%3Cg%3E%3Cpath d='m119.959 189.316h-80.383c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h80.383c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z' fill='%23d8ecfe'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

    ]
    return ( 
        <div className="skills-wrapper">
            <div className="skills-icons-wrapper">
                {skillList.map(link => (
                    <img class="skill-icon" src= {link} alt="NA"></img>
                ))}
            </div>
        </div>
     );
}
 
export default Skills;