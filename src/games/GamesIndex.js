import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import GameCard from './GameCard.js';

class GamesIndex extends Component {
  renderGames() {
    const today = new Date();
    const month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)
    const day = (today.getDate() + 1) < 10 ? '0' + (today.getDate()) : (today.getDate())
    const currentDate = today.getFullYear().toString() + month + day;

    return (
      <Container>
        {this.props.games.map((game) => {
          let gameDay = game.Date;
          if (gameDay && parseInt(gameDay.split('T')[0].replace(/\-/g, '')) > parseInt(currentDate)) {
            return (
              <GameCard game={game} />
            )
          }
        })}
      </Container>
    );
  }

  render() {
    return (
      <div>
        {this.renderGames()}
      </div>
    )
  }
}

export default GamesIndex;
