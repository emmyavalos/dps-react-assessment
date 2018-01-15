import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import generic from '../images/beer.jpg';

class Beer extends React.Component {
    state = {
      beer: {},
      loaded: false
    }

componentDidMount() {
  axios.get(`/api/mybeer/${this.props.match.params.id}`)
    .then( res => {
        this.setState({ beer: res.data.entries[0], loaded: !this.state.loaded })
    })
  }

  displayBeer = () => {
    const { beer } = this.state
    return (
      <Container>
          <Segment textAlign='center'>
            <Header>{beer.name}</Header>
              <Card raised fluid>
               <Image centered src={beer.labels ? beer.labels.medium : generic} />
                <Card.Content>
                  <Card.Description>
                      {beer.description}
                  </Card.Description>
                </Card.Content>
            </Card>
          </Segment>
      </Container>
    )
  }

  render() {
    return(
      <Segment>
        {this.state.loaded ? this.displayBeer() : null}
      </Segment>

    )
  }

}

export default Beer;
