# Aditi Art Studio - Admin Panel

## Overview
The Admin Panel provides functionality for managing artwork listings in the Aditi Art Studio application.

## Features

### 1. Add New Listing
- **Fields Required:**
  - Title (min 3 characters)
  - Category (dropdown selection)
  - Description (min 10 characters)
  - Price (positive number)
  - Image upload (JPG, PNG, GIF, max 5MB)

### 2. Manage Listings
- View all existing listings in a table format
- Each listing shows: Image, Title, Category, Price
- Action buttons for editing and deleting listings
- Delete confirmation dialog for safety

### 3. Authentication
- Simple login system with demo credentials
- Username: `admin`
- Password: `admin123`
- Protected routes using localStorage-based authentication

### 4. Data Management
- Listings are stored in localStorage for persistence
- Form validation for all required fields
- Success/error messaging system
- Image upload simulation with preview

## Components

### Core Components
- `AdminDashboard.jsx` - Main admin interface with tabs
- `ListingForm.jsx` - Form for adding new listings
- `ListingTable.jsx` - Table view for managing existing listings
- `AdminLogin.jsx` - Login interface
- `ProtectedRoute.jsx` - Route protection wrapper

### Context & Utilities
- `AdminContext.jsx` - State management for listings
- `adminUtils.js` - Validation and utility functions

## Design
- Uses the same color palette as the main application:
  - Primary: #064232
  - Secondary: #568F87
  - Accent: #F5BABB
  - Highlight: #FFF5F2
- Responsive layout using react-bootstrap Grid system
- Consistent styling with the main application

## Routes
- `/admin/login` - Admin login page
- `/admin` - Main admin dashboard (protected route)

## Development Notes
- In a production environment, authentication should be handled server-side
- Image uploads should be handled by a proper backend service
- Data should be stored in a database rather than localStorage