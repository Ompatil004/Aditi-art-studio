import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Toast } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useCategories } from '../context/CategoriesContext';
import theme from '../theme/theme';

const SubCategoryPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { categories } = useCategories(); // Use categories from context

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [quantities, setQuantities] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const updateQuantity = (productId, amount) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[productId] || 1) + amount);
      return { ...prev, [productId]: newQty };
    });
  };

  const resetQuantity = (productId) => {
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    // Add the product multiple times according to the selected quantity
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    setToastMessage(`${qty} x ${product.name} added to cart!`);
    setShowToast(true);
    resetQuantity(product.id); // Reset quantity after adding to cart
    setAddedToCart(prev => ({ ...prev, [product.id]: true })); // Mark product as added to cart
    // Auto-hide the toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };
  
  // Find the subcategory by ID across all categories
  let subCategory = null;
  let parentCategory = null;
  
  for (const category of categories) {
    if (category.subCategories) {
      const foundSubCat = category.subCategories.find(sub => sub.id == id);
      if (foundSubCat) {
        subCategory = foundSubCat;
        parentCategory = category;
        break;
      }
    }
  }
  
  if (!subCategory) {
    return (
      <Container style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: theme.background, minHeight: '100vh' }}>
        <h1 style={{ color: theme.text, marginBottom: '1rem' }}>Sub Category Not Found</h1>
        <p style={{ color: theme.text }}>The requested sub category could not be found.</p>
        <Button 
          style={{ 
            backgroundColor: theme.accent, 
            borderColor: theme.accent,
            color: theme.text,
            borderRadius: '30px'
          }}
          as={Link}
          to="/"
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container style={{ padding: '4rem 0 2rem', backgroundColor: theme.background, minHeight: '100vh' }}>
      <h1 style={{ 
        color: theme.text, 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontFamily: 'serif'
      }}>
        {subCategory.name}
      </h1>
      
      <Row xs={1} sm={2} md={3} className="g-4">
        {(subCategory.products || []).map((product) => (
          <Col key={product.id}>
            <Card 
              style={{ 
                height: '100%', 
                borderRadius: '10px',
                boxShadow: `0 4px 8px ${theme.shadow}`,
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="h-100"
            >
              <Card.Img 
                variant="top" 
                src={product.image || 'https://placehold.co/300x200?text=No+Image'} 
                style={{ height: '200px', objectFit: 'cover' }} 
                onError={(e) => {
                  e.target.src = 'https://placehold.co/300x200?text=No+Image';
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ color: theme.text, fontFamily: 'serif' }}>
                  {product.name}
                </Card.Title>
                <Card.Text style={{ color: theme.text, fontWeight: 'bold' }}>
                  {product.price || 'Price on request'}
                </Card.Text>
                <div className="mt-auto">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(product.id, -1);
                        }}
                        style={{
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          padding: '0',
                          fontSize: '0.9rem'
                        }}
                      >
                        -
                      </Button>
                      <span className="mx-2" style={{ color: theme.text }}>
                        {quantities[product.id] || 1}
                      </span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(product.id, 1);
                        }}
                        style={{
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          padding: '0',
                          fontSize: '0.9rem'
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    style={{
                      backgroundColor: addedToCart[product.id] ? theme.highlight : theme.accent,
                      borderColor: addedToCart[product.id] ? theme.highlight : theme.accent,
                      color: theme.text,
                      borderRadius: '30px',
                      width: '100%'
                    }}
                    onClick={() => {
                      if (addedToCart[product.id]) {
                        // If product was added, navigate to cart
                        window.location.href = '/cart';
                      } else {
                        handleAddToCart(product);
                      }
                    }}
                  >
                    {addedToCart[product.id] ? 'Go to Cart' : 'Add to Cart'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button 
          style={{ 
            backgroundColor: theme.accent, 
            borderColor: theme.accent,
            color: theme.text,
            borderRadius: '30px'
          }}
          as={Link}
          to={`/category/${parentCategory ? parentCategory.id : 1}`}
        >
          Back to Category
        </Button>
      </div>
      {/* Toast notification for add to cart */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          minWidth: '250px'
        }}
      >
        <Toast.Header style={{ backgroundColor: theme.accent, color: theme.text }}>
          <strong className="me-auto">Cart Update</strong>
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: theme.card, color: theme.text }}>
          {toastMessage}
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default SubCategoryPage;