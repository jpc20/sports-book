import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './redux/actions/fetchGames';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesIndex from './games/GamesIndex.js';
import MyNav from './MyNav.js';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div className="App">
        <MyNav />
        <GamesIndex games={this.props.games}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games.items
});

export default connect(mapStateToProps, { fetchGames })(App);
