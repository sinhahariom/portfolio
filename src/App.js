import './App.scss';
import Header from './Components/Header';
import Skills from './Components/Skills/skills';
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
