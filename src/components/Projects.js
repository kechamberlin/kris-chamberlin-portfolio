import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Law from '../images/ag-law-screenshot.png';
import Gig from '../images/gig-dig-screenshot.png';
import News from '../images/newsflash-screenshot.png';
import CivPic from '../images/one-more-turn-screenshot.png';
// import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <div className="projects">
      <div className="germania-font">Projects</div>
      <Container>
        <Row>
          <Col lg={4}>
            <Card
              className="text-center"
              style={{
                border: 'solid orangered',
                backgroundColor: '#333333',
                color: 'white',
              }}
            >
              <Card.Title>
                <h4>One More Turn</h4>
              </Card.Title>
              <a
                href="https://onemoreturn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  fluid="true"
                  variant="top"
                  src={CivPic}
                  className="project-image"
                />
              </a>
              <Card.Body>
                <span>
                  <a
                    className="repo-link"
                    href="https://github.com/kechamberlin/one-more-turn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository <i className="lni lni-link"></i>
                  </a>
                </span>
                {/* <Button
                  style={{
                    background: 'linear-gradient(to top, #ff8a00, #da1b60)'
                  }}
                  href='https://github.com/kechamberlin/ag-law'
                  target='_blank'
                  variant='danger'
                >
                  GitHub Repository
                </Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card
              className='text-center'
              style={{
                border: 'solid orangered',
                backgroundColor: '#333333',
                color: 'white'
              }}
            >
              <Card.Title>
                <h4>AG Law</h4>
              </Card.Title>
              <a
                href='https://kechamberlin.github.io/ag-law/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card.Img fluid='true' variant='top' src={Law} className='project-image' />
              </a>
              <Card.Body>
                <span>
                  <a
                    className='repo-link'
                    href='https://github.com/kechamberlin/ag-law'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Repository <i className='lni lni-link'></i>
                  </a>
                </span>
                {/* <Button
                  style={{
                    background: 'linear-gradient(to top, #ff8a00, #da1b60)'
                  }}
                  href='https://github.com/kechamberlin/ag-law'
                  target='_blank'
                  variant='danger'
                >
                  GitHub Repository
                </Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card
              className='text-center'
              style={{
                border: 'solid orangered',
                backgroundColor: '#333333',
                color: 'white'
              }}
            >
              <Card.Title>
                <h4>GigDig</h4>
              </Card.Title>
              <a
                href='https://kechamberlin.github.io/gig-dig/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card.Img variant='top' src={Gig} className='project-image' />
              </a>
              <Card.Body>
                {/* <Button
                  style={{
                    background: 'linear-gradient(to top, #ff8a00, #da1b60)'
                  }}
                  href='https://github.com/kechamberlin/gig-dig'
                  target='_blank'
                  variant='danger'
                >
                  GitHub Repository
                </Button> */}
                <span>
                  <a
                    className='repo-link'
                    href='https://github.com/kechamberlin/gig-dig'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Repository <i className='lni lni-link'></i>
                  </a>
                </span>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card
              className='text-center'
              style={{
                border: 'solid orangered',
                backgroundColor: '#333333',
                color: 'white'
              }}
            >
              <Card.Title>
                <h4>NewsFlash</h4>
              </Card.Title>
              <a
                href='https://kc-newsflash.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card.Img variant='top' src={News} className='project-image' />
              </a>
              <Card.Body>
                {/* <Button
                  style={{
                    background: 'linear-gradient(to top, #ff8a00, #da1b60)'
                  }}
                  href='https://github.com/kechamberlin/news-flash'
                  target='_blank'
                  variant='danger'
                >
                  GitHub Repository
                </Button> */}
                <span>
                  <a
                    className='repo-link'
                    href='https://github.com/kechamberlin/news-flash'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Repository <i className='lni lni-link'></i>
                  </a>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
