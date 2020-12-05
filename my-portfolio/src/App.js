import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/about' >
            <AboutMe />
          </Route>
          <Route exact path='/projects' >
            These are my projects
          </Route>
          <Route exact path='/contact' >
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
