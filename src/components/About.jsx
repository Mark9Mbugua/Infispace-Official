import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
        <div>
          <Image src="assets/bg-image.jpg" className="header-image" />
          <Container>
            <Col xs={12} sm={8} smOffset={2}>
              <Image src="assets/CEO.jpg" className="about-profile-pic" rounded />
              <h3>Who we are</h3>
              <p>Our goal is to play a critical part in the growth of small businesses and to experience the satisfaction that comes with
                seeing these businesses attain their full potential.</p>
              <p>We provide essential services such as web and mobile development, SEO to ensure that your website appears
                even in the most popular searches an market research to keep you ahead of your competition by providing information
                on the latest trends.
              </p>
              <p>Our goal is to play a critical part in the growth of small businesses and to experience the satisfaction that comes with
                seeing these businesses attain their full potential.</p>
              <p>We provide essential services such as web and mobile development, SEO to ensure that your website appears
                even in the most popular searches an market research to keep you ahead of your competition by providing information
                on the latest trends.
              </p>

            </Col>
          </Container>
        </div>
    )
  }
}