import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: "#1f2a44" }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

          {/* About Section */}
          <div className="col" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: "blue" }}>
              About Us
            </h5>
            <p style={{ color: "white" }}>
              Geocon Services have skilled and talented professionals that include Engineers, Environmental Scientists, Geologists, Hydrogeologists, GIS analysts, Groundwater Experts, and Technicians.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: "blue" }}>
              Contact Us
            </h5>
            <p style={{ color: "white" }}><FaPhone className="me-2" />  76930-39555 
             </p>
             <p style={{ color: "white" }}><FaPhone className="me-2" /> 
             96699-54433</p>
            <p style={{ color: "white" }}><FaEnvelope className="me-2" />servicesgeocon@gmail.com</p>
          </div>

          {/* Social + Map Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: "blue" }}>
              Connect with Us
            </h5>
            <div className="d-flex gap-2 mb-3">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaLinkedinIn />
              </a>
            </div>
            <div>
        
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7334.709203119248!2d77.44349640698731!3d23.193744315866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c438941ae25cb%3A0x7a27309f61f3b592!2sGeocon%20Services!5e0!3m2!1sen!2sin!4v1745213063170!5m2!1sen!2sin"
              width="100%"
                 height="150"
                style={{ border: 0 }}
                 allowfullscreen=""
                  loading="lazy" 
                     title="Our Location"
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
            </div>
          </div>

          {/* Address Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: "blue" }}>
              Our Address
            </h5>
            <p style={{ color: "white" }}>
              <FaMapMarkerAlt className="me-2" />
              84/3, NEAR KANKESHWARI INFOTECH GATE, NANDA NAGAR, <br />
              INDORE, Indore, Madhya Pradesh, 452019.
            </p>
            <p style={{ color: "white" }}>
              <FaMapMarkerAlt className="me-2" />
              Branch address: B61, <br />
              vidhyanagar Narmadapuram road Bhopal 462026
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-1" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} Geocon Services. All rights reserved.
          </p>
          <a href="#privacy" className="text-white me-3">Privacy Policy</a>
          <a href="#terms" className="text-white">Terms of Service</a>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .footer-heading:hover {
            transform: translateY(-5px);
            color: #f8f9fa;
          }

          .footer-heading {
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
