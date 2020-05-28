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
      <Container>
        <Row>
          <Col lg={4}>
            <Card
              className='text-center'
              style={{
                color: 'black',
                backgroundColor: 'gray'
              }}
            >
              <Card.Body>
                <Image
                  className='portrait'
                  src={Me}
                  fluid
                  style={{ height: '15rem', width: '15rem' }}
                />
                <Card.Title>Front-End Web Developer</Card.Title>
                <Card.Text>Irvine, California</Card.Text>
                <Card.Text>kris.elliott.chamberlin@gmail.com</Card.Text>
                <Button
                  href='https://www.linkedin.com/in/kris-chamberlin/'
                  target='_blank'
                  variant='danger'
                >
                  LinkedIn
                </Button>
                <Button
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
              style={{ color: 'black', backgroundColor: 'gray' }}
            >
              <Card.Body>
                <Card.Title>About Me</Card.Title>
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
                <Badge variant='danger'>React</Badge>
                <Badge variant='danger'>React</Badge>
                <Badge variant='danger'>React</Badge>
                <Badge variant='danger'>React</Badge>
                <Badge variant='danger'>React</Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
