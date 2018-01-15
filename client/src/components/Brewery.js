import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import brew from '../images/brew.jpg';

class Brewery extends React.Component {
  state = {
    brewery: {},
    loaded: false
  }

componentDidMount() {
    axios.get(`/api/mybrewery/${this.props.match.params.id}`)
      .then( res => {
          this.setState({ brewery: res.data.entries[0], loaded: !this.state.loaded })
      })
    }

displayBrewery = () => {
  const { brewery } = this.state
  return (
    <Container>
        <Segment textAlign='center'>
          <Header>{brewery.name}</Header>
            <Card raised fluid>
             <Image centered src={brewery.images ? brewery.images.square_medium : brew} />
              <Card.Content>
                <Card.Description>
                    {brewery.description}
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
        {this.state.loaded ? this.displayBrewery() : null}
      </Segment>
    )
  }
}

export default Brewery;
