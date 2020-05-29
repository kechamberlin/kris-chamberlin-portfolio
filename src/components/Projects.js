import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Law from '../images/ag-law-screenshot.png';
import Gig from '../images/gig-dig-screenshot.png';

function Projects() {
  return (
    <div className='projects'>
      <div className='germania-font'>Projects</div>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className='text-center' style={{ border: 'solid orangered' }}>
              <a
                href='https://kechamberlin.github.io/ag-law/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card.Img variant='top' src={Law} className='project-image' />
              </a>
              <Card.Body>
                <Card.Title>AG Law</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link
                  href='https://github.com/kechamberlin/ag-law'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub Repository
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className='text-center' style={{ border: 'solid orangered' }}>
              <a
                href='https://kechamberlin.github.io/gig-dig/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card.Img variant='top' src={Gig} className='project-image' />
              </a>
              <Card.Body>
                <Card.Title>GigDig</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link
                  href='https://github.com/kechamberlin/gig-dig'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub Repository
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
