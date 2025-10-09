import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FooterLinkSection from './FooterLinkSection';
import FooterEndSection from './FooterEndSection';

const Footer: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        padding: '40px 105px',
        backgroundColor: ' #252b42',
        maxHeight: '100%', //488
        height: '100%',
        width: '100%',
        color: 'white'
      }}
      className="d-flex flex-column"
    >
      <Row
        style={{
          padding: 45,
          color: 'white',
          width: '100%',
          maxWidth: 1250
        }}
        className="align-items-center justify-content-evenly m-auto p-2 w-100"
      >
        <Col md={12} lg={12} xl className="d-flex flex-column m-auto w-100">
          <h3 style={{ textAlign: 'left', maxWidth: 909, width: '100%' }}>
            Consulting Agency For Your Business
          </h3>
          <p style={{ textAlign: 'left', width: '100%' }}>The quick fox jumps over the lazy dog</p>
        </Col>
        <Col md={12} lg className=" d-flex justify-content-lg-end m-auto">
          <Button variant="primary" style={{ padding: '15px 40px' }}>
            Contact Us
          </Button>
        </Col>
      </Row>

      <Row>
        <FooterLinkSection />
      </Row>
      <Row>
        <FooterEndSection />
      </Row>
    </Container>
  );
};

export default Footer;
