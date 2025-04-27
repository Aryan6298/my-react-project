import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: '#1f2a44',
    width: '100%',
    zIndex: 1030,
  };

  const linkStyle = {
    color: '#ffffff',
    margin: '0 10px',
    position: 'relative',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    color: '#00bcd4',
  };

  const linkHoverStyle = `
    .nav-link::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      left: 0;
      bottom: -4px;
      background-color: #ffffff;
      transition: all 0.3s ease;
    }
    .nav-link:hover::after {
      width: 100%;
    }
  `;

  const messageStyle = {
    color: '#ffffff',
    fontStyle: 'italic',
    fontSize: '1rem',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  };

  return (
    <>
      <style>{linkHoverStyle}</style>

      <Navbar expand="lg" style={navStyle} sticky="top">
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Left side - Nav links */}
          <Nav className="d-flex flex-row">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
              className="nav-link"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
              className="nav-link"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
              className="nav-link"
            >
              Contact
            </NavLink>
          </Nav>

          
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
