import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path={`/`} render={ (routerProps) => <Home routerProps={routerProps} />} />
        <Route exact path={'/submit'} render={ (routerProps) => <Submit routerProps={routerProps} />} />
      </div>
    );
  }
}

export default App;
