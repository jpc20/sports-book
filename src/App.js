import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesIndex from './games/GamesIndex.js';
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
        <header className="App-header">
          <h1>Sports Book</h1>
          <h2>Games</h2>
        </header>
        <GamesIndex games={this.state.games}/>
      </div>
    );
  }
}

export default App;
