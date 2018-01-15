import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Image, Segment } from 'semantic-ui-react';
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
        console.log(res)
        this.setState({ beer: res.data.entries[0], loaded: !this.state.loaded })
    })
  }

  displayBeer = () => {
    const { beer } = this.state
    debugger
    return (
      <Container>
          <Segment textAlign='center'>
            <h1>More About this Beer</h1>
              <Card>
               <Image src={beer.labels ? beer.labels.medium : generic} />
                <Card.Content>
                  <Card.Header>
                    {beer.name}
                  </Card.Header>
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
      <div>
        {this.state.loaded ? this.displayBeer() : null}
      </div>

    )
  }

}

export default Beer;
