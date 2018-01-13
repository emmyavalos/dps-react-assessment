import React, { Component } from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';

class Breweries extends React.Component {

componentDidMount() {
  axios.get(`/api/all_breweries?per_page16&page=1`)
    .then( res => console.log(res.data) )
}

  render() {
    return(
      <Segment>
         <h1>List of Breweries</h1>
      </Segment>
    )
  }
}

export default Breweries;
