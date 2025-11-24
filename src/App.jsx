import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { CategoriesProvider } from './context/CategoriesContext';
import Navigation from './components/layout/Nav';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import theme from './theme/theme';

function App() {
  return (
    <CartProvider>
      <CategoriesProvider>
        <Router>
          <div style={{
            backgroundColor: theme.background,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Navigation />
            <div style={{ flex: 1, paddingTop: '70px' }}>
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </Router>
      </CategoriesProvider>
    </CartProvider>
  );
}

export default App;