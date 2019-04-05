import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
        <div>
          <Container className="container-fluid">
            <Container className="background">
              <Row>
                <Col lg={7}>
                  <h3> -Our Mission- </h3>
                  <p>To play a part in the growth of small businesses and to experience the satisfaction that comes with
                      seeing them grow to achieve their full potential. We provide essential services which are web and mobile
                      development, Search Engine Optimization(SEO) and market research.</p>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container>
          <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="about-pic"/>
                <h3>Markize</h3>
                <p>CEO</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/person.jpg" className="about-pic"/>
                <h3>Kizako</h3>
                <p>Chairman and CTO</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/person.jpg" className="about-pic"/>
                <h3>Danny</h3>
                <p>Company Administrator</p>
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
        </div>
    )
  }
}