import React, { Component } from 'react';
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
    console.log(games);
  }

  renderGames() {
    const today = new Date();
    // Figure out how to add 0 if the date month in 1 number
    const date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
    return (
      <section>
        {this.state.games.map((game) => {
          let gameDay = game.Date;
          if (gameDay && parseInt(gameDay.split('T')[0].replace(/\-/g, '')) > parseInt(date.split('T')[0].replace(/\-/g, ''))) {
            return <p>{game.AwayTeam} vs. {game.HomeTeam} {gameDay.split('T')[0].replace(/\-/g, '')} {date.split('T')[0].replace(/\-/g, '')}</p>
          }
        })}
      </section>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sports Book</h1>
          <h2>Games</h2>
        </header>
        {this.renderGames()}
      </div>
    );
  }
}

export default App;
