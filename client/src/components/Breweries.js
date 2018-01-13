import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
    <Segment>
      <Card Key={ brewery.id }>
        <Image src={brewery.images} />
        <Card.Content>
          <Card.Header>
            {brewery.name}
          </Card.Header>
          <Link to={`/brewery/${brewery.name}`}>
            <Button> View STUFF </Button>
          </Link>
        </Card.Content>
      </Card>
    </Segment>

  )
}


render() {
  return(
    <Segment>
      <h1>List of Breweries</h1>
      <Card.Group itemsPerRow={4}>
        { this.displayEachBrewery() }
      </Card.Group>
          { this.state.loaded ? this.mapBreweries() : null }
    </Segment>
    )
  }
}


export default Breweries;
