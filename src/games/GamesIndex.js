import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGames } from '../redux/actions/gameActions';
import GameCard from './GameCard.js';
import './GamesIndex.css'

class GamesIndex extends Component {

  constructor(props) {
    super(props)
      this.props.fetchGames();
  }

  renderGames(games) {
    const today = new Date();
    const month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)
    const day = (today.getDate() + 1) < 10 ? '0' + (today.getDate()) : (today.getDate())
    const currentDate = today.getFullYear().toString() + month + day;

    return (
      <section class='game-container'>
        {games.map((game) => {
          const gameDay = game.Date;
          if (
            gameDay &&
            parseInt(gameDay.split('T')[0].replace(/\-/g, '')) > parseInt(currentDate) &&
            !this.props.past
          ) {
            return (
                <GameCard game={game} />
            )
          } else if (
                    gameDay &&
                    parseInt(gameDay.split('T')[0].replace(/\-/g, '')) < parseInt(currentDate) &&
                    this.props.past
                  ){
            return (
              <GameCard game={game} />
            )
          }
        })}
      </section>
    );
  }

  render() {
    return (
      <div>
        {this.renderGames(this.props.games)}
      </div>
    )
  }
}

GamesIndex.propTypes = {
  fetchGames: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  games: state.games.items
});

export default connect(mapStateToProps, { fetchGames })(GamesIndex);
