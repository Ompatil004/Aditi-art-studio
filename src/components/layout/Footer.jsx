import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import theme from '../../theme/theme';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: theme.primary,
      color: theme.textLight,
      padding: '3rem 0 1rem',
      marginTop: 'auto'
    }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ color: theme.textLight, marginBottom: '1rem' }}>
              Aditi Art Studio
            </h5>
            <p style={{ color: theme.textLight }}>
              Discover a curated collection of hand-painted artworks that celebrate the rich tradition of Indian art forms.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ color: theme.textLight, marginBottom: '1rem' }}>
              Quick Links
            </h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/"
                  style={{ color: theme.textLight, textDecoration: 'none' }}
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/shop"
                  style={{ color: theme.textLight, textDecoration: 'none' }}
                >
                  Shop
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/about"
                  style={{ color: theme.textLight, textDecoration: 'none' }}
                >
                  About
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/contact"
                  style={{ color: theme.textLight, textDecoration: 'none' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: theme.textLight, marginBottom: '1rem' }}>
              Connect With Us
            </h5>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.textLight, fontSize: '1.5rem' }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.textLight, fontSize: '1.5rem' }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.textLight, fontSize: '1.5rem' }}
              >
                <FaTwitter />
              </a>
            </div>
            <p style={{ color: theme.textLight, fontSize: '0.9rem' }}>
              aditiartstudio25@gmail.com<br />
              +91 9511801233
            </p>
          </Col>
        </Row>
        <hr style={{ borderColor: theme.accent, margin: '1.5rem 0' }} />
        <Row>
          <Col className="text-center">
            <p style={{ color: theme.textLight, fontSize: '0.9rem', marginBottom: 0 }}>
              &copy; {new Date().getFullYear()} Aditi Art Studio. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;