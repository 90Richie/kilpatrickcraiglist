import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import AdContent from './components/AdContent.js'
import HomeContent from './components/HomeContent.js'
import FooterContent from './components/FooterContent.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <HomeContent />
            </Route>
            <Route path='/ads'>
              <AdContent />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
        <FooterContent />
    </div>
  );
}

export default App;
