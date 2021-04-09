import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import Skills from './Components/Skills/skills';
import ProjectA from './Components/Projects/ProjectA';
import ProjectB from './Components/Projects/ProjectB';
import ProjectC from './Components/Projects/ProjectC';
import ProjectD from './Components/Projects/ProjectD';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Skills></Skills>
      {/* <ProjectA></ProjectA>
      <ProjectB></ProjectB>
      <ProjectC></ProjectC>
      <ProjectD></ProjectD> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
