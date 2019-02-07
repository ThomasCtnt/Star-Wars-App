import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

import logo from './marvel-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} width="130" height="52" alt="Logo Marvel" />
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comics" />
          <Route path="/events" />
          <Route path="/fan-zone" />

          <Route path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    );
  }
}

export default App;
