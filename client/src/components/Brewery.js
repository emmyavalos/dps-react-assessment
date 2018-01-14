import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Grid, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import brew from '../images/brew.jpg';

class Brewery extends React.Component {
  state = {
      brewery: [],
      loaded: false
    }

  componentDidMount() {
    axios.get(`/api/brewery/${name}`)
      console.log(res.data)
      .then( res => {
          this.setState({ brewery: res.data.entries, loaded: true })
      })
    }
}

export default Brewery;
