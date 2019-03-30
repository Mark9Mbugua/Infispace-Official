import React, { Component } from 'react';
import { link } from 'react-roter-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Grid>
            <Jumbotron>
                <h2>Welcome to Infispace</h2>
                <p>We are your number 1 software plugs. We stick to the
                    rules of the game.</p>      
            </Jumbotron>
            <Link to="/about">
                <Button bsStyle="primary">About</Button>
            </Link>
        </Grid>
    )
  }
}
