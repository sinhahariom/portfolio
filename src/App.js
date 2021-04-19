import './App.scss';
import Header from './Components/Header';
import Skills from './Components/Skills/skills';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogHome from './Components/BlogHome';

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
            </Switch>
        </div>
    </Router>
  );
}

export default App;
