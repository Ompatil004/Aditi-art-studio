import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import { useCategories } from "../context/CategoriesContext";

import bgSecondImage from "../assets/bg-second.png";

const Second = () => {
  const { categories, loading, error } = useCategories();

  const backgroundStyle = {
    backgroundImage: `url(${bgSecondImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
    padding: "4rem 0",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(5px)",
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    borderRadius: "15px",
    overflow: "hidden",
    color: "#ffffff",
    textAlign: "center",
    cursor: "pointer",
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <h2>Error loading categories</h2>
        <p>{error}</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </Container>
    );
  }

  return (
    <div style={backgroundStyle}>
      <Container>
        <h2 className="text-center text-white mb-5 display-4 fw-bold">Categories:</h2>
        <Row className="justify-content-center align-items-start">
          {categories.length === 0 ? (
            <div className="text-center text-white">
              <h3>No categories available yet</h3>
              <p>Check back soon or contact the administrator</p>
            </div>
          ) : (
            categories.map((category, index) => (
              <Col key={category.id || index} xs={12} md={6} lg={4} xl={3} className="mb-4">
                {/* ✅ Wrap Card inside Link to navigate */}
                <Link
                  to={`/category/${category.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0px 0px 20px 5px rgba(70, 129, 137, 0.5)`, // Using theme primary color (468189 in RGB)
                      borderColor: "rgba(70, 129, 137, 0.5)",
                    }}
                  >
                    <Card style={cardStyle} className="h-100">
                      <Card.Img
                        variant="top"
                        src={category.image || category.imageUrl}
                        alt={category.name}
                        style={{ height: "200px", objectFit: "cover" }}
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/300x200?text=No+Image';
                        }}
                      />
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <Card.Title className="m-0 fs-5 fw-normal">
                          {category.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Second;
