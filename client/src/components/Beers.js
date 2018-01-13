import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card,  Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
      beers: [],
      loaded: false
    }

componentDidMount() {
  axios.get(`/api/all_beers?per_page10&page=1`)
    .then( res => {
        (console.log({ beers: res.data.entries, loaded: true }))
    })
  }

mapBeers = () => {
    return this.state.beers.map(beer => {
        return(
          <div>
             {  this.displayEachBeer(beer)  }
          </div>
        )
      })
    }

displayEachBeer = (beer) => {
  return(
    <Segment>
      <Card Key={ beer.id }>
        <Image src={beer.labels} />
        <Card.Content>
          <Card.Header>
            {beer.name}
          </Card.Header>
          <Link to={`/beer/${beer.name}`}>
            <Button> View Moar </Button>
          </Link>
        </Card.Content>
      </Card>
    </Segment>

  )
}


render() {
  return(
    <div>
      <h1>List of Beers</h1>
          { this.state.loaded ? this.mapBeers() : null }
    </div>
    )
  }
}


export default Beers;
