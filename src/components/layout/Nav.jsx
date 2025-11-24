import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Navbar, Nav as BootstrapNav, NavDropdown, Button } from "react-bootstrap";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useCart } from '../../context/CartContext';
import { useCategories } from '../../context/CategoriesContext';
import logo from "../../assets/logo.png";
import theme from '../../theme/theme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { categories: allCategories } = useCategories();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const goBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const showBackButton = location.pathname !== "/";

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: theme.primary,
        padding: '0.5rem 0',
        boxShadow: `0 2px 10px ${theme.shadow}`
      }}
    >
      <Container>
        {showBackButton && (
          <Button
            onClick={goBack}
            style={{
              backgroundColor: theme.accent,
              borderColor: theme.accent,
              color: theme.text,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px'
            }}
          >
            <FaArrowLeft />
          </Button>
        )}

        <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
          <span style={{ color: theme.textLight, fontWeight: 'bold', fontSize: '1.5rem' }}>
            Aditi Art Studio
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: theme.accent,
            borderColor: theme.accent
          }}
        />

        <Navbar.Collapse in={isOpen}>
          <BootstrapNav className="me-auto">
            {navItems.map((item, index) => (
              <BootstrapNav.Link
                key={index}
                as={Link}
                to={item.path}
                style={{
                  color: theme.textLight,
                  margin: '0 10px',
                  fontWeight: '500'
                }}
              >
                {item.name}
              </BootstrapNav.Link>
            ))}

            <NavDropdown
              title="Categories"
              id="categories-dropdown"
              style={{
                color: theme.textLight,
                margin: '0 10px'
              }}
            >
              {allCategories.map((category, index) => (
                <div key={index}>
                  <NavDropdown.Header
                    style={{
                      color: theme.textLight,
                      backgroundColor: theme.primary,
                      fontWeight: 'bold'
                    }}
                  >
                    {category.name}
                  </NavDropdown.Header>

                  <NavDropdown.Item
                    as={Link}
                    to={`/category/${category.id}`}
                    style={{
                      color: theme.text,
                      fontWeight: '500'
                    }}
                  >
                    All {category.name}
                  </NavDropdown.Item>

                  {/* Render subcategories if they exist */}
                  {category.subCategories && category.subCategories.length > 0 && (
                    <>
                      {category.subCategories.map((subCategory, subIndex) => (
                        <NavDropdown.Item
                          key={`sub-${subIndex}`}
                          as={Link}
                          to={`/subcategory/${subCategory.id}`}
                          style={{
                            color: theme.text,
                            paddingLeft: '30px'
                          }}
                        >
                          {subCategory.name}
                        </NavDropdown.Item>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </NavDropdown>
          </BootstrapNav>

          <BootstrapNav>
            <BootstrapNav.Link
              as={Link}
              to="/cart"
              style={{
                color: theme.textLight,
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <FaShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: theme.accent,
                  color: theme.text,
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {getTotalItems()}
                </span>
              )}
            </BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;