import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Container>
            <br />
            <Jumbotron>
                <h2>Welcome to Infispace</h2>
                <p>We are your number 1 software plugs. We stick to the
                    rules of the game.</p>      
              <Link to="/about">
                  <Button bsStyle="primary">Learn More</Button>
              </Link>
            </Jumbotron>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="profile-pic"/>
                <h3>Markize</h3>
                <p>I am the CEO. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="profile-pic"/>
                <h3>Kizako</h3>
                <p>I am the Chariman of the board. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="profile-pic"/>
                <h3>Danny</h3>
                <p>I am the Company Administrator. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
            </Row>
            
        </Container>
    )
  }
}
