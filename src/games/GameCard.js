import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

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
    console.log(this.state);
  }
  render() {
    return (
      <Card style={{width: '30rem', margin: 'auto'}}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title>{this.props.game.AwayTeam} vs. {this.props.game.HomeTeam}</Card.Title>
          <Card.Text>
            Favorite: {this.state.favorite}
            <br />
            Underdog: {this.state.underdog}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Forecast: {this.props.game.ForecastDescription}</small>
        </Card.Footer>
      </Card>
    )
  }
}

export default GameCard;
