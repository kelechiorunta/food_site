import React from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FaFacebookFIcon = FaFacebookF as unknown as any;
const FaInstagramIcon = FaInstagram as unknown as any;
const FaTwitterIcon = FaTwitter as unknown as any;

const FooterEndSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: ' #252b42' }} className="text-white py-3 border-top">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <strong>Made With Love By Finland All Right Reserved</strong>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="d-inline-flex gap-3">
              <NavLink href="#" className="text-info fs-5">
                <FaFacebookFIcon />
              </NavLink>
              <NavLink href="#" className="text-info fs-5">
                <FaInstagramIcon />
              </NavLink>
              <NavLink href="#" className="text-info fs-5">
                <FaTwitterIcon />
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterEndSection;
