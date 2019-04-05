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
              <p>Invest in tech for consistent growth.</p> 
              <Row className="show-grid center">
                <Col xs={12} sm={4} className="homepic-wrapper">
                  <ButtonToolbar>
                      <Button className="primary" href="/about">Learn More</Button>
                  </ButtonToolbar>
                </Col>
            </Row>
            </Jumbotron>

            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/web-dev.jpg" className="profile-pic"/>
                <h3>App Development</h3>
                <p>We build quality web and mobile applications. We give a priority to scalability
                   because we aim to achieve consistent business growth.</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/seo2.jpg" className="profile-pic"/>
                <h3>SEO</h3>
                <p>We have the expertise to direct traffic to your web application and make it appear on the first 
                  pages of popular searches in what is popularly known as Search Engine Optimization(SEO).
                </p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/in-services.jpg" className="profile-pic"/>
                <h3>Maintenance</h3>
                <p>We maintain your web application for free for the first three months after going live! Hurry! Offer
                  is going to end soon.
                </p>
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
