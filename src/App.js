import './App.scss';
import Header from './Components/Header';
import Skills from './Components/Skills/skills';
import Footer from './Components/Footer';
import ErrorPage from './Components/Error/ErrorPage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogHome from './Components/BlogHome';
import ShowCaseProjects from './Components/Projects/ShowCaseProjects';

function App() {
  return (
    <Router>
      <div className="App">
            <Switch>
              <Route exact path="/">
                <Header></Header>
                <Skills></Skills>
                <Footer></Footer> 
              </Route>
              <Route path="/blogHome">
                  <BlogHome></BlogHome>
              </Route>
              <Route path="/showCaseProjects" component={ShowCaseProjects}></Route>
              <Route component={ErrorPage}></Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
