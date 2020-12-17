import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Goggle from './projects/Goggle';
import Emall from './projects/Emall';
import Grams from './projects/Grams';
import CashMe from './projects/CashMe';

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
            <Projects />
            <Route exact path='/projects/Goggle' component={Goggle} />
            <Route exact path='/projects/Grams' component={Grams} />
            <Route exact path='/projects/eMall' component={Emall} />
            <Route exact path='/projects/CashMe' component={CashMe} />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
