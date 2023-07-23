import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ProgramsPage from './components/ProgramsPage';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/programs" component={ProgramsPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Switch>
    </Router>
  )
}
export default App