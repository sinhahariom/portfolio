import './Footer.scss';


const Footer = () => {

    const icons = [
        {
            "imgsrc": "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 382 382' style='enable-background:new 0 0 382 382;' xml:space='preserve'%3E%3Cpath style='fill:%230077B7;' d='M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
            "link":"https://www.linkedin.com/in/hariomsinha/"
        },
        {
            "imgsrc":"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%235C6BC0;' d='M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872 c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464 c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496 c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368c-56.832-6.496-116.608-28.544-116.608-127.008 c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68c0,0,21.504-6.912,70.4,26.336 c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672c48.864-33.248,70.336-26.336,70.336-26.336 c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992c0,98.72-59.84,120.448-116.864,126.816 c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496c0,6.88,4.608,14.88,17.6,12.352 C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
            "link":"https://github.com/sinhahariom"
        },
        {
            "imgsrc":"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%235C6BC0;' d='M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872 c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464 c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496 c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368c-56.832-6.496-116.608-28.544-116.608-127.008 c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68c0,0,21.504-6.912,70.4,26.336 c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672c48.864-33.248,70.336-26.336,70.336-26.336 c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992c0,98.72-59.84,120.448-116.864,126.816 c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496c0,6.88,4.608,14.88,17.6,12.352 C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Csvg id='Bold' enable-background='new 0 0 32 32' height='512' viewBox='0 0 32 32' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z' fill='%23ffe6e2'/%3E%3Cpath d='m22.723 11.155 1.277-1.221v-.267h-4.423l-3.152 7.845-3.585-7.845h-4.638v.268l1.492 1.795c.145.132.222.327.202.522v7.055c.046.254-.037.515-.215.7l-1.681 2.036v.264h4.763v-.268l-1.68-2.033c-.182-.185-.268-.442-.231-.7v-6.102l4.181 9.106h.486l3.595-9.106v7.254c0 .192 0 .231-.126.356l-1.294 1.251v.268h6.275v-.268l-1.247-1.221c-.109-.082-.166-.221-.143-.356v-8.977c-.021-.135.035-.274.144-.356z' fill='%23fc573b'/%3E%3C/svg%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
            "link":"https://medium.com/@sinhahariom1"
        }
    ];
    const downloadResume = () => {
        window.open("http://hariomsinha.in:8080/downloadResume","_self");
        // window.open("http://localhost:8081/downloadResume","_blank");
    }
    return ( 
        <div className="footer-wrapper">
            <span className="profile-image"></span>
            <span className="title-name">Hariom Kumar Sinha</span>
            <div className="icons-wrapper">
                {
                    icons.map(icon =>(
                        <a target="_blank" rel="noreferrer" href={icon.link} key={icon.imgsrc}><img src={icon.imgsrc} key={icon.imgsrc} alt="NA"></img></a>
                    ))
                }
            </div>
            <span className="footer-hire-me">Hire Me &#128512;</span>
            <span className="footer-hire-me link" onClick={downloadResume} id="nav-text-resume">Download My Resume</span>
            <span className="footer-epilogue">sinhahariom1@gmail.com</span>
            <span className="footer-epilogue">(+91) 8337944479</span>
            <span className="footer-copyright"> &copy; sinhahariom.netlify.app</span>
            {/* <span className="footer-copyright"> Updates Coming Very Soon</span> */}
        </div>
     );
}
 
export default Footer;