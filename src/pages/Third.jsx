// src/components/Third.jsx

import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Professional Artist",
    quote: "This art studio has transformed my creative process. The quality of materials is exceptional.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Art Enthusiast",
    quote: "I've found everything I need for my projects here. Their customer service is outstanding!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Art Teacher",
    quote: "As an educator, I recommend this store to all my students. Great selection and prices.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Third = () => {
  return (
    <div style={{ 
      
      padding: "5rem 0" 
    }}>
      <Container>
        <motion.h2 
          className="text-center text-white mb-5 display-4 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} xs={12} md={6} lg={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  padding: "2rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  height: "100%"
                }}
              >
                <div className="text-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <h5 className="text-white">{testimonial.name}</h5>
                  <p className="text-muted">{testimonial.role}</p>
                </div>
                <p className="text-white text-center" style={{ fontStyle: "italic" }}>
                  "{testimonial.quote}"
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Third;