# Aditi Art Studio - Admin Panel (Enhanced with Categories Sync)

## Overview
The Admin Panel provides functionality for managing artwork listings in the Aditi Art Studio application with real-time synchronization to the categories collection.

## Features

### 1. Add New Listing with Category Sync
- **Fields Required:**
  - Title (min 3 characters)
  - Category (dropdown selection from existing categories)
  - Description (min 10 characters)
  - Price (positive number)
  - Image upload (JPG, PNG, GIF, max 5MB)
- **Categories Integration:** New listings are automatically added to the selected category in the categories collection

### 2. Remove Listing with Category Sync
- Delete listings from the admin dashboard
- Automatic removal from the corresponding category in the categories collection
- Confirmation dialogs for safety

### 3. Manage Listings with Real-time Sync
- View all existing listings in a table format
- Listings reflect real-time changes from the categories collection
- Each listing shows: Image, Title, Category (including subcategory if applicable), Price
- Action buttons for editing and deleting listings

### 4. Authentication
- Simple login system with demo credentials
- Username: `admin`
- Password: `admin123`
- Protected routes using localStorage-based authentication

## Components

### Core Components
- `AdminDashboard.jsx` - Main admin interface with tabs
- `ListingForm.jsx` - Form for adding new listings with validation and category sync
- `ListingTable.jsx` - Table view for managing existing listings with real-time data from categories collection
- `AdminLogin.jsx` - Login interface
- `ProtectedRoute.jsx` - Route protection wrapper

### Context & Utilities
- `AdminContext.jsx` - State management for admin operations
- `CategoriesContext.jsx` - State management for the categories collection (synchronized with admin actions)
- `adminUtils.js` - Validation and utility functions for categories integration

## Data Synchronization

### How Categories Sync Works
- `CategoriesContext` manages the complete categories collection
- When a new listing is added via the admin panel, it's automatically added to the appropriate category
- When a listing is removed via the admin panel, it's automatically removed from the appropriate category
- All pages (Home, CategoryPage, etc.) now use data from `CategoriesContext`
- Real-time updates across the application without page refresh

### Categories Structure
- Main categories (id: 1-7) with direct products
- Sub-categories for Canvas Painting (id: 2) with nested products
- Proper handling of both structures in admin operations

## Routes
- `/admin/login` - Admin login page
- `/admin` - Main admin dashboard (protected route)

## Styling
- Uses the same color palette as the main application:
  - Primary: #064232
  - Secondary: #568F87
  - Accent: #F5BABB
  - Highlight: #FFF5F2
- Responsive layout using react-bootstrap Grid system
- Consistent styling with the main application

## Development Notes
- In a production environment, authentication should be handled server-side
- Image uploads should be handled by a proper backend service
- Data should be stored in a database rather than localStorage
- The categories collection is now the single source of truth for all product listings