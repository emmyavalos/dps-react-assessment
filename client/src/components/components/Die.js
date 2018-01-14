import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';
import d4 from '../images/d4.png';
import d5 from '../images/d5.png';
import d6 from '../images/d6.png';

const images = { d1, d2, d3, d4, d5, d6 };

const styles = {
  die: { marginLeft: '20px' }
}

const Die = ({ value }) => (
  <Grid.Column textAlign='center' width={3}>
    <Image
      style={styles.die}
      src={images[`d${value}`]}
      alt={`dice value ${value}`}
    />
  </Grid.Column>
)

export default Die;
