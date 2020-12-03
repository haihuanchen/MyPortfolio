import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'

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
            This is my about me page
          </Route>
          <Route exact path='/projects' >
            These are my projects
          </Route>
          <Route exact path='/resume' >
            This is my resume
          </Route>
          <Route exact path='/contact' >
            This is my contact info
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
