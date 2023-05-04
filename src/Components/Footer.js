import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid bg="light" className="text-center text-lg-left">
      <Row className="justify-content-center">
        <Col lg="12" className="p-3 col-12" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()}
          <a className='text-dark' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
