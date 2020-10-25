import React, { Component } from 'react';
import helmet from '../assets/helmet.jpg'
import { Link } from "react-router-dom";
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
  renderImage() {
    if (this.props.game.AwayTeam == 'SF' || this.props.game.HomeTeam == 'SF') {
      return (
        <div class='helmet-faceoff'>
          <img src={ helmet } class='helmet-home'/>
          <img src={ helmet } class='helmet-away'/>
        </div>
      )
    } else {
      return <img src="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    }
  }
  render() {
    return (
      <Link to={{
        pathname: `/game/${this.props.game.GameKey}`,
        state: {gameProps: this.props.game}
        }}>
        <div class='game-card'>
          <div>
            {this.renderImage()}
            <div class='title'>{this.props.game.AwayTeam} vs. {this.props.game.HomeTeam}</div>
            <div class='odds'>
              Favorite: {this.state.favorite}
              <br />
              Underdog: {this.state.underdog}
            </div>
          </div>
          <div>
            <small className="text-muted">Forecast: {this.props.game.ForecastDescription}</small>
          </div>
        </div>
      </Link>
    )
  }
}

export default GameCard;
