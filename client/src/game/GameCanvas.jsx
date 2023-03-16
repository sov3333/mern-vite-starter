import React, { Component } from 'react';
import PropTypes from 'prop-types';
import game from '../game';

class GameCanvas extends Component {
  componentDidMount() {
    game.canvas.id = 'game-canvas';
  }

  render() {
    return null;
  }
}

GameCanvas.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameCanvas;
