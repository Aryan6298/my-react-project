import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../src/assets/main-logo.png';

const TopBar = () => {
  return (
    <div className="bg-light py-2 border-bottom">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
            <span className="ms-2 fw-bold fs-3" style={{ color: '#1f604b ' }}>GEOCON SERVICES</span>
            {/* Add the message below the company name */}
            <div className="" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#1f604b', marginLeft: '100px', marginTop: '-15px' }}>
  We Are Environment Friendly...
</div>


          </Col>
          <Col md={6}>
            <FaPhoneAlt className="me-2" /> 76930-39555 , 96699-54433
            <span className="mx-3">|</span>
            <FaEnvelope className="me-2" /> servicesgeocon@gmail.com
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
