import React from 'react';
import Me from '../images/my-picture.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function About() {
  return (
    <div className='about'>
      <div style={{ marginTop: '10rem' }}></div>
      <Container>
        <Row>
          <Col lg={4}>
            <Card
              className='text-center'
              style={{
                color: 'white',
                backgroundColor: '#333333',
                border: 'solid orangered'
              }}
            >
              <Card.Body>
                <Image
                  className='portrait'
                  rounded
                  src={Me}
                  fluid
                  style={{ height: '15rem', width: '15rem' }}
                />
                <Card.Title>Front-End Web Developer</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> Irvine, California
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> kris.elliott.chamberlin@gmail.com
                </Card.Text>
                <Button
                  style={{
                    background: 'linear-gradient(to top, #ff8a00, #da1b60)'
                  }}
                  href='https://www.linkedin.com/in/kris-chamberlin/'
                  target='_blank'
                  variant='danger'
                >
                  LinkedIn
                </Button>
                <Button
                  style={{
                    background: 'linear-gradient(to top, #ff8a00, #da1b60)'
                  }}
                  href='https://github.com/kechamberlin'
                  target='_blank'
                  variant='danger'
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className='text-center'
              style={{
                color: 'white',
                backgroundColor: '#333333',
                border: 'solid orangered'
              }}
            >
              <Card.Body>
                <Card.Title className='germania-font'><h1>About Me</h1> </Card.Title>
                <Card.Text>
                  After graduating Magna Cum Laude with a History degree from
                  the University of California, Santa Barbara, I decided to
                  challenge myself and attended a Full-Stack Web Development
                  boot camp at UC Irvine. There, I discovered my love for
                  Front-End programming and design.
                </Card.Text>
                <Card.Text>
                  When I'm not coding, I enjoy pursuing my passions for video
                  games, creative writing, attending concerts, and making
                  memories with my girlfriend Aleah.
                </Card.Text>
                <Card.Title>Skills</Card.Title>
                <h4>
                  <Badge variant='danger'>React</Badge>
                  <Badge variant='danger'>React</Badge>
                  <Badge variant='danger'>React</Badge>
                  <Badge variant='danger'>React</Badge>
                  <Badge variant='danger'>React</Badge>
                </h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
