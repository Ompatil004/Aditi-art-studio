import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import theme from '../theme/theme';
import { useCategories } from '../context/CategoriesContext';
import { getRandomBackground, getRandomBackgrounds } from '../utils/backgroundHelper';

const Home = () => {
  const [email, setEmail] = useState('');
  const [heroBg, setHeroBg] = useState('');
  const [testimonialBg, setTestimonialBg] = useState('');
  const { categories, loading, error } = useCategories();

  // For random backgrounds, we'll use static fallback if no categories are available
  const [categoryBgs, setCategoryBgs] = useState([]);

  useEffect(() => {
    // Set random backgrounds when component mounts
    setHeroBg(getRandomBackground());
    setTestimonialBg(getRandomBackground());

    // Set background images for the categories
    if (categories.length > 0) {
      setCategoryBgs(getRandomBackgrounds(categories.length));
    } else {
      // Fallback to some backgrounds if loading or no categories
      setCategoryBgs(getRandomBackgrounds(7));
    }
  }, [categories.length]);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "The Paithani painting I purchased is absolutely stunning. The attention to detail is remarkable and it has transformed my living space.",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      text: "Ordered a custom piece and the artist captured my vision perfectly. The quality is exceptional and the colors are vibrant.",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Sunita Patel",
      text: "My family was amazed by the quality of the Pichwai painting. It beautifully represents the traditional art form with modern touches.",
      location: "Ahmedabad"
    }
  ];

  // Social media links
  const socialMediaLinks = [
    { name: "Instagram", url: "https://instagram.com", icon: "📸" },
    { name: "Facebook", url: "https://facebook.com", icon: "f" },
    { name: "Twitter", url: "https://twitter.com", icon: "t" }
  ];

  useEffect(() => {
    // Set random backgrounds when component mounts
    setHeroBg(getRandomBackground());
    setCategoryBgs(getRandomBackgrounds(categories.length));
    setTestimonialBg(getRandomBackground());
  }, []);

  return (
    <div style={{ backgroundColor: theme.background, minHeight: '100vh', padding: '0' }}>
      {/* Hero / About the store section */}
      <section
        style={{
          backgroundColor: theme.primary,
          padding: '4rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Random background image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 0
          }}
        />

        {/* Overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(70, 129, 137, 0.7)', // Primary color overlay for readability (468189 in RGB)
            zIndex: 1
          }}
        />

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontFamily: 'serif',
            fontSize: '2.5rem',
            color: theme.textLight,
            marginBottom: '1rem'
          }}>
            Aditi Art Studio
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: theme.textLight,
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Discover a curated collection of hand-painted artworks that celebrate the rich tradition of Indian art forms.
            Each piece is meticulously crafted by skilled artisans, bringing timeless beauty and cultural heritage into your living space.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button
              style={{
                backgroundColor: theme.accent,
                borderColor: theme.accent,
                borderRadius: '30px',
                color: theme.text
              }}
              size="lg"
              as={Link}
              to="/shop"
            >
              Explore Artworks
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              style={{ borderRadius: '30px' }}
              as={Link}
              to="/about"
            >
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* Categories section */}
      <section style={{ padding: '4rem 0' }}>
        <Container>
          <h2 style={{
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: '2rem',
            color: theme.text,
            marginBottom: '3rem'
          }}>
            Our Collections
          </h2>

          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <div className="text-center py-5">
              <h3>Error loading categories</h3>
              <p>{error}</p>
            </div>
          ) : (
            <Row xs={1} md={2} lg={3} className="g-4">
              {categories.length === 0 ? (
                <div className="text-center py-5">
                  <h3>No categories available yet</h3>
                  <p>Check back soon for our beautiful collections</p>
                </div>
              ) : (
                categories.map((category, index) => (
                  <Col key={category.id || index}>
                    <Card
                      style={{
                        height: '100%',
                        borderRadius: '10px',
                        boxShadow: `0 4px 8px ${theme.shadow}`,
                        border: `1px solid ${theme.border}`,
                        backgroundColor: theme.card,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      className="h-100"
                    >
                      {/* Random background for category card */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '200px',
                          backgroundImage: `url(${categoryBgs[index] || category.image || category.imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: 0.7,
                          zIndex: 0
                        }}
                        onError={(e) => {
                          e.target.style.backgroundImage = "url('https://via.placeholder.com/300x200?text=No+Image')";
                        }}
                      />

                      {/* Overlay for text readability */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '200px',
                          backgroundColor: 'rgba(119, 172, 162, 0.8)', // Secondary color overlay (77ACA2 in RGB)
                          zIndex: 1
                        }}
                      />

                      <Card.Body className="d-flex flex-column" style={{ position: 'relative', zIndex: 2 }}>
                        <Card.Title style={{ fontFamily: 'serif', color: theme.text }}>
                          {category.name}
                        </Card.Title>
                        <Card.Text style={{ color: theme.text }}>
                          {category.description || 'Beautiful handcrafted artworks'}
                        </Card.Text>
                        <Button
                          style={{
                            backgroundColor: theme.accent,
                            borderColor: theme.accent,
                            color: theme.text,
                            borderRadius: '30px'
                          }}
                          className="mt-auto"
                          as={Link}
                          to={`/category/${category.id}`}
                        >
                          View Collection
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          )}
        </Container>
      </section>

      {/* About section */}
      <section style={{
        backgroundColor: theme.secondary,
        padding: '4rem 0'
      }}>
        <Container>
          <Row>
            <Col lg={6} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h2 style={{
                  fontFamily: 'serif',
                  fontSize: '2rem',
                  color: theme.text,
                  marginBottom: '1.5rem'
                }}>
                  About Aditi Art Studio
                </h2>
                <p style={{ fontSize: '1.1rem', color: theme.text, lineHeight: '1.7' }}>
                  Founded with a passion for preserving India's rich artistic heritage, Aditi Art Studio collaborates with skilled artisans across the country to bring traditional art forms into contemporary spaces.
                </p>
                <p style={{ fontSize: '1.1rem', color: theme.text, lineHeight: '1.7' }}>
                  Each piece in our collection represents hours of meticulous handwork, using techniques passed down through generations. We believe in celebrating the beauty of imperfection and the unique character of handmade art.
                </p>
                <p style={{ fontSize: '1.1rem', color: theme.text, lineHeight: '1.7' }}>
                  Our commitment is to quality, authenticity, and providing our customers with art that tells a story and connects them to India's artistic traditions.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1594633312681-425c7b97ccd1)',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: `0 4px 8px ${theme.shadow}`
              }}></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Links section */}
      <section style={{ padding: '4rem 0', backgroundColor: theme.light }}>
        <Container>
          <h2 style={{
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: '2rem',
            color: theme.text,
            marginBottom: '2rem'
          }}>
            Connect With Us
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: theme.text,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Follow us on social media for inspiration, updates on new collections, and behind-the-scenes glimpses of our creative process
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {socialMediaLinks.map((social, index) => (
              <Button
                key={index}
                style={{
                  backgroundColor: theme.accent,
                  borderColor: theme.accent,
                  color: theme.text,
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
                size="lg"
                onClick={() => window.open(social.url, '_blank')}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact section */}
      <section style={{
        backgroundColor: theme.primary,
        padding: '4rem 0',
        color: theme.textLight
      }}>
        <Container>
          <h2 style={{
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: '2rem',
            color: theme.textLight,
            marginBottom: '2rem'
          }}>
            Contact Us
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: theme.textLight,
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Have questions about our art pieces or need custom artwork? Reach out to us and we'll be happy to assist you.
          </p>
          <Row>
            <Col md={6} lg={4}>
              <ListGroup variant="flush" style={{ marginBottom: '2rem' }}>
                <ListGroup.Item style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: theme.textLight
                }}>
                  <h5 style={{ fontFamily: 'serif', color: theme.textLight }}>Address</h5>
                  <p style={{ color: theme.textLight }}>
                    123 Art Gallery Lane<br />
                    Koregaon Park, Pune<br />
                    Maharashtra 411001
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} lg={4}>
              <ListGroup variant="flush" style={{ marginBottom: '2rem' }}>
                <ListGroup.Item style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: theme.textLight
                }}>
                  <h5 style={{ fontFamily: 'serif', color: theme.textLight }}>Email</h5>
                  <p style={{ color: theme.textLight }}>aditiartstudio25@gmail.com</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} lg={4}>
              <ListGroup variant="flush" style={{ marginBottom: '2rem' }}>
                <ListGroup.Item style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: theme.textLight
                }}>
                  <h5 style={{ fontFamily: 'serif', color: theme.textLight }}>Phone</h5>
                  <p style={{ color: theme.textLight }}>+91 9511801233</p>
                </ListGroup.Item>
              </ListGroup>
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
              onClick={() => window.open('https://wa.me/919511801233', '_blank')}
            >
              Message on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* Reviews / Testimonials section */}
      <section style={{ padding: '4rem 0', backgroundColor: theme.light, position: 'relative' }}>
        {/* Random background image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${testimonialBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 0
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Container>
            <h2 style={{
              textAlign: 'center',
              fontFamily: 'serif',
              fontSize: '2rem',
              color: theme.text,
              marginBottom: '3rem'
            }}>
              What Our Customers Say
            </h2>
            <Carousel indicators={true} controls={true}>
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <Card style={{
                    border: `1px solid ${theme.border}`,
                    boxShadow: `0 4px 8px ${theme.shadow}`,
                    borderRadius: '10px',
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for the overlay
                    backdropFilter: 'blur(5px)'
                  }}>
                    <Card.Body>
                      <p style={{
                        fontSize: '1.1rem',
                        fontStyle: 'italic',
                        color: theme.text,
                        marginBottom: '1.5rem'
                      }}>
                        "{testimonial.text}"
                      </p>
                      <Card.Title style={{ fontFamily: 'serif', color: theme.text }}>
                        {testimonial.name}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {testimonial.location}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: theme.primary,
        color: theme.textLight,
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <Container>
          <p>&copy; {new Date().getFullYear()} Aditi Art Studio. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: theme.textLight }}>
            Bringing traditional Indian art forms to contemporary spaces
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;