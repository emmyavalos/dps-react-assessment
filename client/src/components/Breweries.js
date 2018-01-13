import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, Container, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import brew from '../images/brew.jpg';

class Breweries extends React.Component {
  state = {
      breweries: [],
      loaded: false
    }

componentDidMount() {
  axios.get(`/api/all_breweries?per_page10&page=1`)
    .then( res => {
        this.setState({ breweries: res.data.entries, loaded: true })
    })
  }

mapBreweries = () => {
    return this.state.breweries.map(brewery => {
        return(
          <div>
             {  this.displayEachBrewery(brewery)  }
          </div>
        )
      })
    }

displayEachBrewery = (brewery) => {
  return(
    <Container>
      <Segment>
        <Card Key={ brewery.id }>
          <Image src={brewery.images ? brewery.images.medium : brew} />
          <Card.Content>
            <Card.Header>
              {brewery.name}
            </Card.Header>
            <Card.Description>
                {brewery.description}
            </Card.Description>
            <Link to={`/brewery/${brewery.name}`}>
              <Button> View More </Button>
            </Link>
            <Link to={`/brewery/$brewery.website`}>
              <Button>Website</Button>
            </Link>
          </Card.Content>
        </Card>
      </Segment>
    </Container>

  )
}


render() {
  return(
    <div>
        <h1>List of Breweries</h1>
        { this.state.loaded ? this.mapBreweries() : null }
        <Card.Group itemsPerRow={4}>
          { this.mapBreweries() }
        </Card.Group>
    </div>
    )
  }
}


export default Breweries;
