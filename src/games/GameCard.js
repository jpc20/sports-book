import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';
import './GameCard.css';

class GameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: null,
      underdog: null,
    }
  }
  componentDidMount() {
    if (this.props.game.AwayTeamMoneyLine < 0) {
      this.setState({
        favorite: this.props.game.AwayTeam + ' (' + this.props.game.AwayTeamMoneyLine + ')',
        underdog: this.props.game.HomeTeam + ' (+' + this.props.game.HomeTeamMoneyLine + ')'
      })
    } else {
      this.setState({
        favorite: this.props.game.HomeTeam + ' (' + this.props.game.HomeTeamMoneyLine + ')',
        underdog: this.props.game.AwayTeam + ' (+' + this.props.game.AwayTeamMoneyLine + ')'
      })
    }
  }
  render() {
    return (
      <div class='game-card'>
        <img src="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div>
          <div>{this.props.game.AwayTeam} vs. {this.props.game.HomeTeam}</div>
          <div>
            Favorite: {this.state.favorite}
            <br />
            Underdog: {this.state.underdog}
          </div>
        </div>
        <div>
          <small className="text-muted">Forecast: {this.props.game.ForecastDescription}</small>
        </div>
      </div>
    )
  }
}

export default GameCard;
