import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, Container, Grid, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import brew from '../images/brew.jpg';

class Breweries extends React.Component {
  state = {
      breweries: [],
      loaded: false
    }
componentDidMount() {
  axios.get(`/api/all_breweries?per_page=48&page=1`)
    .then( res => {
      console.log(res.data)
        this.setState({ breweries: res.data.entries, loaded: !this.state.loaded })
    })
  }
mapBreweries = () => {
    return this.state.breweries.map(brewery => {
        return(
          <Card as={Link} to={`/brewery/${brewery.id}`}>
             { this.displayEachBrewery(brewery) }
          </Card>
        )
      })
    }

displayEachBrewery = (brewery) => {
  return(
    <Container>
      <Segment>
        <Card centered Key={ brewery.id }>
          <Image src={brewery.images ? brewery.images.square_medium : brew} />
            <Card.Content>
              <Card.Header>
                {brewery.name}
              </Card.Header>
              <Card.Description>
                 Established: { brewery.established ?  brewery.established : "Not Available" }
              </Card.Description>
              <Link to={`/brewery/${brewery.id}`}>
                <Button color = "teal"> View More </Button>
              </Link>
              { brewery.website && <Button color = "blue" src={brewery.website}>Website</Button> }
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
        <h1>List of Breweries</h1>
      </Segment>
      <Segment basic>
        <Grid centered>
            <Card.Group stackable itemsPerRow={3}>
            { this.state.loaded ? this.mapBreweries() : null }
            </Card.Group>
        </Grid>
      </Segment>
    </Container>
    )
  }
}
export default Breweries;
// <Link to={`/brewery/$brewery.website`}>
//   <Button>Website</Button>
// </Link>
