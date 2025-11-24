import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useCategories } from '../context/CategoriesContext';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <h2>Error loading products</h2>
        <p>{error}</p>
        <Button variant="primary" as={Link} to="/">Go Home</Button>
      </Container>
    );
  }

  // Filter out categories that have no products at all (neither direct nor in subcategories)
  // Log all categories to see what we have
  console.log('All categories from context:', categories);
  
  const categoriesWithProducts = categories.filter(category => {
    // Check if category has direct products
    const hasDirectProducts = category.products && category.products.length > 0;
    
    // Check if category has subcategories with products
    const hasSubcategoryProducts = category.subCategories && 
      category.subCategories.some(sub => sub.products && sub.products.length > 0);
    
    // Log for debugging
    console.log(`Category ${category.name}: Direct products: ${hasDirectProducts} (count: ${category.products ? category.products.length : 0}), Subcategory products: ${hasSubcategoryProducts}`);
    if (category.products && category.products.length > 0) {
      console.log(`  Direct products:`, category.products.map(p => p.name));
    }
    if (category.subCategories) {
      console.log(`  Subcategories:`, category.subCategories.map(sc => ({ name: sc.name, productCount: sc.products ? sc.products.length : 0 })));
    }
    
    return hasDirectProducts || hasSubcategoryProducts;
  });

  if (categoriesWithProducts.length === 0) {
    return (
      <Container className="text-center py-5">
        <h2>No products available yet</h2>
        <p>Check back soon or contact us for custom orders</p>
        <Button variant="primary" as={Link} to="/">Go Home</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Art Collection</h1>
      <p className="text-center text-muted mb-5">Browse our hand-painted artworks organized by category</p>
      
      {categoriesWithProducts.map((category) => {
        // Check if category has products or subcategories with products
        const hasDirectProducts = category.products && category.products.length > 0;
        const hasSubcategoryProducts = category.subCategories && 
          category.subCategories.some(sub => sub.products && sub.products.length > 0);
        
        if (!hasDirectProducts && !hasSubcategoryProducts) {
          return null; // Skip empty categories
        }

        return (
          <div key={category.id} className="mb-5">
            <h2 className="mb-4 pb-2 border-bottom">{category.name}</h2>
            
            {/* Direct products (no subcategory) */}
            {hasDirectProducts && (
              <div className="mb-4">
                <h4 className="mb-3">Featured Artworks</h4>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                  {category.products.map((product) => (
                    <Col key={product.id}>
                      <Card className="h-100 shadow-sm hover-effect" style={{ border: 'none', transition: 'transform 0.2s' }}>
                        {product.image && (
                          <Card.Img 
                            variant="top" 
                            src={product.image} 
                            style={{ height: '200px', objectFit: 'cover' }} 
                            onError={(e) => {
                              e.target.src = 'https://placehold.co/300x200?text=No+Image';
                            }}
                          />
                        )}
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text className="flex-grow-1 text-muted">
                            {product.description ? product.description.substring(0, 100) + '...' : 'Beautiful hand-painted artwork'}
                          </Card.Text>
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="h5 text-primary">{product.price}</span>
                              <Button 
                                variant="outline-primary" 
                                size="sm"
                                disabled={true} // Temporarily disabled since we don't have individual product pages
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            {/* Subcategories and their products */}
            {category.subCategories && category.subCategories.length > 0 && (
              <div>
                {category.subCategories.map((subcategory) => (
                  subcategory.products && subcategory.products.length > 0 && (
                    <div key={subcategory.id} className="mb-4">
                      <h4 className="mb-3">{subcategory.name}</h4>
                      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {subcategory.products.map((product) => (
                          <Col key={product.id}>
                            <Card className="h-100 shadow-sm hover-effect" style={{ border: 'none', transition: 'transform 0.2s' }}>
                              {product.image && (
                                <Card.Img 
                                  variant="top" 
                                  src={product.image} 
                                  style={{ height: '200px', objectFit: 'cover' }} 
                                  onError={(e) => {
                                    e.target.src = 'https://placehold.co/300x200?text=No+Image';
                                  }}
                                />
                              )}
                              <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text className="flex-grow-1 text-muted">
                                  {product.description ? product.description.substring(0, 100) + '...' : 'Beautiful hand-painted artwork'}
                                </Card.Text>
                                <div className="mt-auto">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="h5 text-primary">{product.price}</span>
                                    <Button 
                                      variant="outline-primary" 
                                      size="sm"
                                      disabled={true} // Temporarily disabled since we don't have individual product pages
                                    >
                                      View Details
                                    </Button>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Shop;