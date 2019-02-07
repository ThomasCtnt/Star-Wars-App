import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import People from './components/People/People';
import Vehicles from './components/Vehicles/Vehicles';

import logo from './starwars.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} width="150" height="90" alt="Logo Star Wars" />
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={People} />
          <Route path="/vehicles" component={Vehicles} />

          <Route path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    );
  }
}

export default App;
