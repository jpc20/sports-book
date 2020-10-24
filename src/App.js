import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesIndex from './games/GamesIndex.js';
import MyNav from './MyNav.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MyNav />
          <Switch>
            <Route path='/' component={GamesIndex} exact/>
            <Route path='/upcoming' component={GamesIndex} exact/>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
