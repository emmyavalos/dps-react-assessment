import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Die from './Die';

class Board extends Component {
  render() {
    return(
      <Grid>
        <Grid.Row>
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
        </Grid.Row>
      </Grid>
    )
  }
}

export default Board;
