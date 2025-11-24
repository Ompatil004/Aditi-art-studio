import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import theme from '../theme/theme';

const About = () => {
  return (
    <div style={{ backgroundColor: theme.background, minHeight: '100vh', padding: '4rem 0' }}>
      <Container>
        <Row>
          <Col lg={12} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontFamily: 'serif', 
              fontSize: '2.5rem', 
              color: theme.text, 
              marginBottom: '1rem' 
            }}>
              About Aditi Art Studio
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: theme.text, 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              Discover a curated collection of hand-painted artworks that celebrate the rich tradition of Indian art forms. 
              Each piece is meticulously crafted by skilled artisans, bringing timeless beauty and cultural heritage into your living space.
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} style={{ marginBottom: '2rem' }}>
            <Card 
              style={{ 
                height: '100%', 
                borderRadius: '10px',
                boxShadow: `0 4px 8px ${theme.shadow}`,
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                padding: '2rem'
              }}
            >
              <Card.Body>
                <Card.Title style={{ 
                  fontFamily: 'serif', 
                  color: theme.text, 
                  marginBottom: '1rem' 
                }}>
                  Our Story
                </Card.Title>
                <Card.Text style={{ color: theme.text }}>
                  Founded with a passion for preserving India's rich artistic heritage, Aditi Art Studio collaborates with skilled artisans across the country to bring traditional art forms into contemporary spaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} style={{ marginBottom: '2rem' }}>
            <Card 
              style={{ 
                height: '100%', 
                borderRadius: '10px',
                boxShadow: `0 4px 8px ${theme.shadow}`,
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                padding: '2rem'
              }}
            >
              <Card.Body>
                <Card.Title style={{ 
                  fontFamily: 'serif', 
                  color: theme.text, 
                  marginBottom: '1rem' 
                }}>
                  Our Mission
                </Card.Title>
                <Card.Text style={{ color: theme.text }}>
                  Each piece in our collection represents hours of meticulous handwork, using techniques passed down through generations. We believe in celebrating the beauty of imperfection and the unique character of handmade art.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button 
            style={{ 
              backgroundColor: theme.accent, 
              borderColor: theme.accent,
              color: theme.text,
              borderRadius: '30px'
            }}
            as="a"
            href="/"
          >
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default About;