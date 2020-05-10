import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Projects from './containers/Projects';
import About from './containers/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route exact path='/projects'><Projects></Projects></Route>
         <Route exact path='/about'><About/></Route>
      </Switch>
</Router>
  );
}

export default App;
