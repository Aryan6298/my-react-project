import React from "react";
import { Link } from "react-router-dom"
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

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    <FaPhone className="me-2" style={{ color: 'white', transform: 'rotate(90deg)' }} />
    <a href="tel:+917693039555" style={{ color: 'white', textDecoration: 'none' }}>
      +91 76930-39555
    </a>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    <FaPhone className="me-2" style={{ color: 'white', transform: 'rotate(90deg)' }} />
    <a href="tel:+919669954433" style={{ color: 'white', textDecoration: 'none' }}>
      +91 96699-54433
    </a>
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaEnvelope className="me-2" style={{ color: 'white' }} />
    <a href="mailto:servicesgeocon@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
      servicesgeocon@gmail.com
    </a>
  </div>
</div>

{/* Social + Map Section */}
<div className="col" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
  <h5 className="fw-bold mb-3 footer-heading" style={{ color: "blue" }}>
    Connect with Us
  </h5>
  <div className="d-flex gap-2 mb-3">
    <a
      href="https://www.facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-light btn-sm rounded-circle"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://twitter.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-light btn-sm rounded-circle"
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-light btn-sm rounded-circle"
    >
      <FaLinkedinIn />
    </a>
  </div>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7334.709203119248!2d77.44349640698731!3d23.193744315866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c438941ae25cb%3A0x7a27309f61f3b592!2sGeocon%20Services!5e0!3m2!1sen!2sin!4v1745213063170!5m2!1sen!2sin"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Our Location"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

        {/* Address Section */}
<div className="col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
  <h5 className="fw-bold mb-3 footer-heading" style={{ color: "blue" }}>
    Our Address
  </h5>

  <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
  <FaMapMarkerAlt className="me-2 mt-2" style={{ color: "white" }} />
    <p style={{ color: "white", margin: 0 }}>
      84/3, NEAR KANKESHWARI INFOTECH GATE, NANDA NAGAR, <br />
      INDORE, Indore, Madhya Pradesh, 452019.
    </p>
  </div>

  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <FaMapMarkerAlt className="me-2 mt-2" style={{ color: "white" }} />
    <p style={{ color: "white", margin: 0 }}>
      Branch Address: B61, <br />
      Vidhyanagar, Narmadapuram Road, Bhopal – 462026
    </p>
  </div>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
  <p className="mb-1" style={{ color: "white" }}>
    &copy; {new Date().getFullYear()} Geocon Services. All rights reserved.
  </p>
  
  {/* Update the anchor to Link for React Router navigation */}
  <Link to="/termsofservices" className="text-white">
    Terms of Service
  </Link>
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
