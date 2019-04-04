import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
        <div>
          <Image src="assets/plain-grey.jpg" className="header-image" />
            <div class="centered">
              <h3> -Our Mission- </h3>
              <p>To play a critical part in the growth of small businesses and to experience the satisfaction that comes with
                seeing these businesses achieve their full potential.</p>
              <p>We provide essential services such as web and mobile development, SEO to ensure that your website appears
                even in the most popular searches as well as market research to keep you ahead of your competition by providing information
                on the latest trends.
              </p>
            </div>
          <Container>
          <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="about-pic"/>
                <h3>Markize</h3>
                <p>I am the CEO. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="about-pic"/>
                <h3>Kizako</h3>
                <p>I am the Chariman of the board. It is my responsibility to see that we grow exponentially as well as 
                  tapping into the amazing tech talents in the region</p>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/CEO.jpg" className="about-pic"/>
                <h3>Danny</h3>
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
        </div>
    )
  }
}