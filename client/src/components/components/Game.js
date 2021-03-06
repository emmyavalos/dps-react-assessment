import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Board from './Board';
import ScoreCard from './ScoreCard';

const styles = {
  fullHeight: { height: '100vh' },
  board: { backgroundColor: '#AAFFAA' },
  scores: { backgroundColor: '#9370DB' },
}

class Game extends Component {
  state = { roll: 0, dice: [...new Array(5)], keep: [] };

  rollDice = () => {
    let dice = this.state.dice.map( (element, index) => {
      return Math.floor(Math.random() * 6) + 1;
    })

    this.setState( state => {
      return { dice, roll: state.roll + 1 }
    });
  }

  render() {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={10} style={{ ...styles.fullHeight, ...styles.board }}>
            <Board />
          </Grid.Column>
          <Grid.Column width={6} style={{ ...styles.fullHeight, ...styles.scores }}>
            <ScoreCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Game;
