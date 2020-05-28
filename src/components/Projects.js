import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Projects() {
  return (
    <div className='projects'>
      <p>Projects</p>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className='text-center'>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href='#'>Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className='text-center'>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href='#'>Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
