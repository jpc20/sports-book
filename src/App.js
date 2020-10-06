import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesIndex from './games/GamesIndex.js';
import MyNav from './MyNav.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  async componentDidMount() {
    const resp = await fetch(
      'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=a6cb87c7e7704881b07257413255b2e0'
    );

    const games = await resp.json()

    this.setState({ games })
  }

  render() {
    return (
      <div className="App">
        <MyNav />
        <GamesIndex games={this.state.games}/>
      </div>
    );
  }
}

export default App;
