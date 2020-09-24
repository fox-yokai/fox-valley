import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/tos' component={Terms} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
