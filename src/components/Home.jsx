import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Container>
            <br />
            <Jumbotron className="jumbo">
              <h2>Welcome to Infispace</h2>
              <p>Let us make you quality apps to grow you business faster</p> 
              <Row className="show-grid center">
                <Col xs={12} sm={4} className="homepic-wrapper">
                  <ButtonToolbar>
                      <Button bsStyle="primary" href="/about">Learn More</Button>
                      <div class="divider"/>
                      <Button bsStyle="primary" href="/about">Get Started</Button>
                  </ButtonToolbar>
                </Col>
            </Row>
            </Jumbotron>

            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/web-dev.jpg" className="profile-pic"/>
                <h3>Web/App Development</h3>
                <p>I am the CEO. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/seo2.jpg" className="profile-pic"/>
                <h3>SEO</h3>
                <p>I am the Chariman of the board. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/maintain.jpg" className="profile-pic"/>
                <h3>Maintainance</h3>
                <p>I am the Company Administrator. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
            </Row>
            <div className="icons-container">
              <div className="social-section">
                <div className="social">
                  <Image src="assets/fb.png" className="social-media"/>
                </div>
                <div className="social">
                  <Image src="assets/google.png" className="social-media"/>
                </div>
                <div className="social">
                  <Image src="assets/phone.png" className="social-media"/>
                </div>
                <div className="social">
                  <Image src="assets/skype.png" className="social-media"/>
                </div>
                <div className="social">
                  <Image src="assets/pintrest.png" className="social-media"/>
                </div>
              </div>
            </div>
            
        </Container>
    )
  }
}
