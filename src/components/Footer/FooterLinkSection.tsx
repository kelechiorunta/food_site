import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const FaPhoneAltIcon = FaPhoneAlt as unknown as any;
const FaMapMarkerAltIcon = FaMapMarkerAlt as unknown as any;
const FaEnvelopeIcon = FaEnvelope as unknown as any;

const FooterLinkSection: React.FC = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: ' #252b42' }}>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col style={{ textAlign: 'right' }} sm={5} md={4} xs={12} lg={2}>
            <h5 className="d-flex justify-content-lg-end">Company Info</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-lg-end">About Us</li>
              <li className="d-flex justify-content-lg-end">Carrier</li>
              <li className="d-flex justify-content-lg-end">We are hiring</li>
              <li className="d-flex justify-content-lg-end">Blog</li>
            </ul>
          </Col>

          <Col style={{ textAlign: 'right' }} sm={5} md={4} xs={12} lg={2}>
            <h5 className="d-flex justify-content-lg-end">Legal</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-lg-end">About Us</li>
              <li className="d-flex justify-content-lg-end">Carrier</li>
              <li className="d-flex justify-content-lg-end">We are hiring</li>
              <li className="d-flex justify-content-lg-end">Blog</li>
            </ul>
          </Col>

          <Col style={{ textAlign: 'right' }} sm={5} md={4} xs={12} lg={2}>
            <h5 className="d-flex justify-content-lg-end">Features</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-lg-end text-left">Business Marketing</li>
              <li className="d-flex justify-content-lg-end">User Analytic</li>
              <li className="d-flex justify-content-lg-end">Live Chat</li>
              <li className="d-flex justify-content-lg-end">Unlimited Support</li>
            </ul>
          </Col>

          <Col style={{ textAlign: 'right' }} sm={5} md={4} xs={12} lg={2}>
            <h5 className="d-flex justify-content-lg-end">Resources</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-lg-end">IOS & Android</li>
              <li className="d-flex justify-content-lg-end">Watch a Demo</li>
              <li className="d-flex justify-content-lg-end">Customers</li>
              <li className="d-flex justify-content-lg-end">API</li>
            </ul>
          </Col>

          <Col sm={5} md={4} xs={12} lg={4}>
            <h5 className="d-flex justify-content-lg-end">Get In Touch</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2 justify-content-lg-end">
                <FaPhoneAltIcon /> (480) 555-0103
              </li>
              <li className="d-flex align-items-center gap-2 mt-2 justify-content-lg-end">
                <FaMapMarkerAltIcon /> 4517 Washington Ave.
              </li>
              <li className="d-flex align-items-center gap-2 mt-2 justify-content-lg-end">
                <FaEnvelopeIcon /> debra.holt@example.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterLinkSection;
