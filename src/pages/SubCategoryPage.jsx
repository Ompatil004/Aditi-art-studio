import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useCategories } from '../context/CategoriesContext';
import theme from '../theme/theme';

const SubCategoryPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { categories } = useCategories(); // Use categories from context
  
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
                  <Button 
                    style={{ 
                      backgroundColor: theme.accent, 
                      borderColor: theme.accent,
                      color: theme.text,
                      borderRadius: '30px',
                      width: '100%'
                    }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
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
    </Container>
  );
};

export default SubCategoryPage;