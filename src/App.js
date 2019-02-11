import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import ElementList from './components/ElementList/ElementList';
import DetailsCard from './components/DetailsCard/DetailsCard';

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
          <Route exact path="/people" component={ElementList} />
          <Route exact path="/vehicles" component={ElementList} />

          <Route path="/people/:id" component={DetailsCard} />
          <Route path="/vehicles/:id" component={DetailsCard} />

          <Route path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    );
  }
}

export default App;
