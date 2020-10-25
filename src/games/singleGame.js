import React, { Component } from 'react';

class singleGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      game: {}
    }
  }

  componentDidMount() {
    this.setState({ game: this.props.location.state.gameProps})
  }

  render() {
    return (
      <h1>{this.state.game.GameKey}</h1>
      )
    }
}

export default singleGame;
