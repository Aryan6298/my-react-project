import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/main-logo.png';

const TopBar = () => {
  return (
    <div className="bg-light py-2 border-bottom">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <Link
              to="/"
              className="d-inline-flex align-items-center text-decoration-none"
              style={{ cursor: 'pointer' }}
            >
              <img src={logo} alt="Logo" style={{ height: '50px' }} />
              <span
                className="ms-2 fw-bold fs-3"
                style={{ color: '#1f604b', cursor: 'pointer' }}
              >
                GEOCON SERVICES
              </span>
            </Link>
            <div
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#1f604b',
                marginLeft: '100px',
                marginTop: '-15px',
              }}
            >
              We Are Environment Friendly...
            </div>
          </Col>
          <Col md={6}>
            <a href="tel:+917693039555" className="text-decoration-none text-dark">
              <FaPhoneAlt className="me-2" />
              +91 76930-39555
            </a>
            ,{' '}
            <a href="tel:+919669954433" className="text-decoration-none text-dark">
              +91 96699-54433
            </a>
            <span className="mx-3">|</span>
            <a href="mailto:servicesgeocon@gmail.com" className="text-decoration-none text-dark">
              <FaEnvelope className="me-2" />
              servicesgeocon@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
