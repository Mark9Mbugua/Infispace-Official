import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
        <div>
          <Container className="billboard">
            <Image className="img"/>
            <h2>Portfolio</h2>
            <Row>
              <Col xs={12} sm={4} className="card-container">
                <Card className="cardy">
                  <Card.Body>
                    <Card.Title>Career Advice</Card.Title>
                    <Image src="assets/pp2.jpg" className="card-img"/>
                    <Card.Text>
                      A simple Django to do list web app
                    </Card.Text>
                    <Button variant="primary" href="https://ourrtodolist.herokuapp.com/">
                      Visit Site
                    </Button>
                  </Card.Body>
                </Card>  
              </Col>
              
              <Col xs={12} sm={4} className="card-container">
                <Card className="cardy">
                  <Card.Body>
                    <Card.Title>Infispace</Card.Title>
                    <Image src="assets/logo.png" className="card-img"/>
                    <Card.Text>
                      A tech company's Website
                    </Card.Text>
                    <Button variant="primary" href="https://infispace-ke.herokuapp.com/">
                      Visit Site
                    </Button>
                  </Card.Body>
                </Card>  
              </Col>

              <Col xs={12} sm={4} className="card-container">
                <Card className="cardy">
                  <Card.Body>
                    <Card.Title>Pixabay Image Finder </Card.Title>
                    <Image src="assets/pixabay.jpg" className="card-img"/>
                    <Card.Text>
                      Using Pixabay's API to retrieve photos
                    </Card.Text>
                    <Button variant="primary" href="https://pixabay-images.herokuapp.com/">
                      Visit Site
                    </Button>
                  </Card.Body>
                </Card>  
              </Col>
            </Row>
          </Container>

            <Container className="news">
              <h2>News</h2>
              <Row>
                <Col xs={12} sm={4} className="card-wrapper">
                  <Card className="cardy">
                    <Card.Body>
                      <Card.Title>Awesome Innovations</Card.Title>
                      <Image src="assets/innovations.jpg" className="card-pic"/>
                      <Card.Text>
                        Check out how brilliant people are achieving the 'impossible'.
                      </Card.Text>
                      <Button variant="primary" href="https://www.google.com/search?rlz=1C1CHBF_enKE831KE831&ei=laigXNerDYzoUJHbtsgM&q=brilliant+technological+innovations&oq=brilliant+technological+innovations&gs_l=psy-ab.3..33i160.1661682.1683797..1684077...5.0..2.1819.13760.2-18j9j2j4j0j1j1......0....1..gws-wiz.......0i71j35i39j0i67j0i131j0j0i20i263j0i22i30j0i13j0i13i30j33i21.j2UIbShw7tU">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>  
                </Col>

                <Col xs={12} sm={4} className="card-wrapper">
                  <Card className="cardy">
                    <Card.Body>
                      <Card.Title>Tech Trends</Card.Title>
                      <Image src="assets/about-us2.jpg" className="card-pic"/>
                      <Card.Text>
                        Check out the latest tech trends. Always set the best online front
                        for your business.
                      </Card.Text>
                      <Button variant="primary" href="https://www.google.com/search?q=tech+trends&rlz=1C1CHBF_enKE831KE831&oq=tech+tre&aqs=chrome.1.69i57j0l5.6301j0j7&sourceid=chrome&ie=UTF-8">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>  
                </Col>

                <Col xs={12} sm={4} className="card-wrapper">
                  <Card className="cardy">
                    <Card.Body>
                      <Card.Title>Market Trends</Card.Title>
                      <Image src="assets/market-trends.jpg" className="card-pic"/>
                      <Card.Text>
                        Check out the latest market trends and keep evolving.
                      </Card.Text>
                      <Button variant="primary" href="https://www.google.com/search?rlz=1C1CHBF_enKE831KE831&ei=M6-gXOW-MevjgweumJXgBg&q=market+trends&oq=market+trends&gs_l=psy-ab.3..0l4j0i20i263l2j0l4.60297.62747..64653...0.0..0.1178.4654.5-3j2j1......0....1..gws-wiz.......0i71.w9b6PZzWUPAttps://www.google.com/search?q=tech+trends&rlz=1C1CHBF_enKE831KE831&oq=tech+tre&aqs=chrome.1.69i57j0l5.6301j0j7&sourceid=chrome&ie=UTF-8">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>  
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
