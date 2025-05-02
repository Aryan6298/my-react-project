import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <TopBar />
      <NavigationBar />

      <style>{`
        .contact-heading {
          font-weight: 700;
          font-size: 3rem;
          color: #1f2a44;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
          transition: color 0.3s ease;
        }

        .contact-heading:hover {
          color: #0d6efd;
        }

        .contact-card {
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease-in-out;
        }

        .contact-card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          transform: translateY(-8px);
        }

        .contact-icon {
          margin-right: 10px;
          color: #0d6efd;
          transition: color 0.3s ease;
        }

        .contact-icon:hover {
          color: #0056b3;
        }

        .contact-info-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .contact-info-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-info-item-delay {
          transition-delay: 0.3s;
        }

        .contact-card-body {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
        }

        .lead {
          font-size: 1.25rem;
          font-weight: 400;
          color: #6c757d;
          margin-bottom: 30px;
        }

        .contact-info {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .contact-info:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <Container className="my-5">
        <h1 className="text-center contact-heading mb-4" data-aos="fade-down">
          Get In Touch
        </h1>
        <p className="text-muted text-center mb-5" data-aos="fade-up">
          We are here to assist you. Feel free to reach out anytime!
        </p>

        <Row className="justify-content-center">
          {/* Contact Info */}
          <Col md={6} data-aos="fade-up">
            <Card className="contact-card bg-white">
              <Card.Body className="contact-card-body">
                <h3 className="text-primary mb-4">Contact Information</h3>
                <p className="lead">We are available 7 days a week!</p>

                <div className="contact-info mt-4">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h6>
                      <FaMapMarkerAlt className="contact-icon" /> Address
                    </h6>
                    <p className="text-muted mb-3">
                    84/3, NEAR KANKESHWARI INFOTECH GATE, NANDA NAGAR,
                    INDORE, Indore, Madhya Pradesh, 452019.
                    </p>
                  </div>

                  <div
                    className="contact-info-item contact-info-item-delay"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h6>
                      <FaEnvelope className="contact-icon" /> Mail ID
                    </h6>
                    <p className="text-muted mb-3">
                      <a href="mailto:servicesgeocon@gmail.com">
                        servicesgeocon@gmail.com
                      </a>
                    </p>
                  </div>

                  <div
                    className="contact-info-item contact-info-item-delay"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <h6>
                      <FaPhoneAlt className="contact-icon" /> Phone
                    </h6>
                    <p className="text-muted">
  <div><a href="tel:+919827788586">+91 9827788586</a></div>
  <div><a href="tel:+919039363465">+91 9039363465</a></div>
</p>

                  </div>
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
