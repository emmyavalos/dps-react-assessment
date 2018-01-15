import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, Container, Grid, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import generic from '../images/generic.jpg';

class Beers extends React.Component {
  state = {
      beers: [],
      loaded: false
    }

componentDidMount() {
  axios.get(`/api/all_beers?per_page50&page=1`)
    .then( res => {
      console.log(res.data)
        this.setState({ beers: res.data.entries, loaded: true })
    })
  }

mapBeers = () => {
    return this.state.beers.map(beer => {
        return(
          <Card>
             { this.displayEachBeer(beer) }
          </Card>
        )
      })
    }

displayEachBeer = (beer) => {
  return(
    <Container>
      <Segment>
        <Card centered Key={ beer.id }>
         <Image src={beer.labels ? beer.labels.medium : generic} />
          <Card.Content>
            <Card.Header>
              {beer.name}
            </Card.Header>
            <Link to={`/beer/${beer.id}`}>
              <Button color = "teal"> View More </Button>
            </Link>
          </Card.Content>
        </Card>
      </Segment>
    </Container>

  )
}


render() {
  return(
    <Container>
      <Segment basic textAlign='center'>
        <h1>List of Beers</h1>
      </Segment>
      <Segment basic>
        <Grid centered>
            <Card.Group stackable itemsPerRow={3}>
              { this.state.loaded ? this.mapBeers() : null }
            </Card.Group>
        </Grid>
      </Segment>
    </Container>
    )
  }
}



export default Beers;
