import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <>
      <TopBar />
      <NavigationBar />

      <style>{`
        .contact-heading {
          font-weight: 700;
          font-size: 2.5rem;
          color: #1f2a44;
        }

        .form-control {
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 8px rgba(13, 110, 253, 0.3);
        }

        .submit-button {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .submit-button:hover {
          transform: scale(1.05);
          background-color: #0b5ed7;
        }

        .contact-card {
          border-radius: 15px;
          transition: all 0.3s ease-in-out;
        }

        .contact-card:hover {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }

        .contact-icon {
          margin-right: 8px;
          color: #0d6efd;
        }
      `}</style>

      <Container className="my-5">
        <h1 className="text-center contact-heading mb-4" data-aos="fade-down">
          Have Questions? Drop A Line
        </h1>
        <p className="text-muted text-center mb-5" data-aos="fade-up">
          Your email address will not be published. Required fields are marked *
        </p>

        <Row>
          {/* Contact Form */}
          <Col md={8} data-aos="fade-right">
            <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>Complete Name *</Form.Label>
                <Form.Control type="text" required placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control type="email" required placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formSubject">
                <Form.Label>Subject *</Form.Label>
                <Form.Control type="text" required placeholder="Enter subject" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formDescription">
                <Form.Label>Description *</Form.Label>
                <Form.Control as="textarea" rows={4} required placeholder="Write your message here..." />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg" className="submit-button">
                  Submit Now
                </Button>
              </div>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mt-5 mt-md-0" data-aos="fade-left">
            <Card className="h-100 shadow-sm contact-card bg-white p-3">
              <Card.Body>
                <h3 className="mb-4 text-primary">Get In Touch</h3>
                <p className="lead">We are at your disposal 7 days a week!</p>

                <div className="mt-4">
                  <h6><FaMapMarkerAlt className="contact-icon" /> Address</h6>
                  <p className="text-muted mb-3">
                    84, Nanda Nagar<br />
                    Indore - 452011
                  </p>

                  <h6><FaEnvelope className="contact-icon" /> Mail ID</h6>
                  <p className="text-muted mb-3">servicesgeocon@gmail.com</p>

                  <h6><FaPhoneAlt className="contact-icon" /> Phone</h6>
                  <p className="text-muted">
                    +91 9827788586<br />
                    9039363465
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ContactPage;
