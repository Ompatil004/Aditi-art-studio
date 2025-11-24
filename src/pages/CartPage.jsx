import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import theme from '../theme/theme';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const navigate = useNavigate();

  // Function to convert price string to number
  const convertPrice = (priceString) => {
    if (typeof priceString === 'number') return priceString;
    if (typeof priceString === 'string') {
      // Remove currency symbols and commas, then convert to number
      return parseFloat(priceString.replace(/[₹$,]/g, '').replace(/\s/g, ''));
    }
    return 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = () => {
    // Validate inputs
    if (!orderDetails.name || !orderDetails.address || !orderDetails.phone) {
      alert('Please fill in all fields');
      return;
    }

    // Format order details for WhatsApp
    let message = `*New Order from ${orderDetails.name}*\n\n`;
    message += `*Contact Info:*\n`;
    message += `Phone: ${orderDetails.phone}\n`;
    message += `Address: ${orderDetails.address}\n\n`;
    message += `*Order Details:*\n`;

    items.forEach(item => {
      const itemPrice = convertPrice(item.price);
      message += `- ${item.name}: ${item.quantity} x ${item.price} = ₹${(itemPrice * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Total: ₹${getTotalPrice().toFixed(2)}*`;

    // Open WhatsApp with order details
    const phoneNumber = '919511801233'; // Your seller number

    // Properly encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message).replace(/\n/g, '%0A').trim();

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Clear cart after checkout
    clearCart();
    setShowModal(false);
    navigate('/');
  };

  return (
    <Container className="py-5" style={{ backgroundColor: theme.background, minHeight: '100vh' }}>
      <h2 className="text-center mb-5 fw-bold" style={{ color: theme.text }}>Your Cart</h2>

      {items.length === 0 ? (
        <div className="text-center py-5">
          <h4 style={{ color: theme.text, marginBottom: '2rem' }}>Your cart is empty</h4>
          <Button
            style={{
              backgroundColor: theme.accent,
              borderColor: theme.accent,
              color: theme.text,
              borderRadius: '30px'
            }}
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <Row>
            <Col lg={8}>
              {items.map((item, index) => (
                <div key={item.id} className="mb-4">
                  <Card
                    style={{
                      borderRadius: '10px',
                      boxShadow: `0 4px 8px ${theme.shadow}`,
                      border: `1px solid ${theme.border}`,
                      backgroundColor: theme.card,
                    }}
                  >
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={3}>
                          <Card.Img
                            src={item.image}
                            style={{
                              height: '100px',
                              width: '100%',
                              objectFit: 'cover',
                              borderRadius: '8px'
                            }}
                            alt={item.name}
                          />
                        </Col>
                        <Col md={5}>
                          <Card.Title style={{ color: theme.text }}>{item.name}</Card.Title>
                          <Card.Text style={{ color: theme.text }}>
                            Price: <strong>{item.price}</strong>
                          </Card.Text>
                        </Col>
                        <Col md={4} className="d-flex align-items-center justify-content-end">
                          <div className="d-flex align-items-center">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              style={{
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                padding: '0'
                              }}
                            >
                              -
                            </Button>
                            <span className="mx-3" style={{ color: theme.text }}>{item.quantity}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              style={{
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                padding: '0'
                              }}
                            >
                              +
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              className="ms-3"
                              onClick={() => removeFromCart(item.id)}
                              style={{
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                padding: '0'
                              }}
                            >
                              ×
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>
            <Col lg={4}>
              <Card
                style={{
                  borderRadius: '10px',
                  boxShadow: `0 4px 8px ${theme.shadow}`,
                  border: `1px solid ${theme.border}`,
                  backgroundColor: theme.card,
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center" style={{ color: theme.text }}>Order Summary</Card.Title>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: theme.text }}>Subtotal:</span>
                    <span style={{ color: theme.text }}>₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: theme.text }}>Shipping:</span>
                    <span style={{ color: theme.text }}>Free</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <span style={{ color: theme.text }}>Tax:</span>
                    <span style={{ color: theme.text }}>₹0.00</span>
                  </div>
                  <hr style={{ borderColor: theme.border }} />
                  <div className="d-flex justify-content-between mb-4">
                    <strong style={{ color: theme.text }}>Total:</strong>
                    <strong style={{ color: theme.text }}>₹{getTotalPrice().toFixed(2)}</strong>
                  </div>

                  <Button
                    className="w-100 py-3"
                    onClick={() => setShowModal(true)}
                    style={{
                      backgroundColor: theme.accent,
                      borderColor: theme.accent,
                      color: theme.text,
                      borderRadius: '30px',
                      fontWeight: 'bold'
                    }}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    variant="outline-secondary"
                    className="w-100 mt-3"
                    onClick={() => navigate('/')}
                    style={{
                      borderRadius: '30px'
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Order Details Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={orderDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button
                onClick={handleCheckout}
                style={{
                  backgroundColor: theme.accent,
                  borderColor: theme.accent,
                  color: theme.text
                }}
              >
                Confirm Order
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default CartPage;