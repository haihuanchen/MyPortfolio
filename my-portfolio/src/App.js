import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <h1>Welcome to Haihuan Chen's Portfolio</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
