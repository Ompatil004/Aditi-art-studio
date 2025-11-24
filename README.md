# Art Studio E-commerce Application

This is a modern e-commerce application for selling art pieces with a Sanity.io-powered admin panel for content management.

## Features

- Browse and shop for various art pieces organized by categories and subcategories
- Cart functionality for managing selected items
- Product management with titles, descriptions, images, and pricing
- Inventory management with stock status tracking
- Responsive design optimized for all device sizes

## Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Bootstrap with custom theming
- **CMS**: Sanity.io for content management
- **Routing**: React Router DOM
- **State Management**: React Context API

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Art_Studio
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the `Art_Studio` directory with your Sanity project details:
   ```env
   VITE_SANITY_PROJECT_ID=your-sanity-project-id
   VITE_SANITY_DATASET=your-dataset-name
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Admin Panel Setup (Sanity CMS)

1. **Navigate to the Admin directory:**
   ```bash
   cd ../Admin
   ```

2. **Install Sanity dependencies:**
   ```bash
   npm install
   ```

3. **Create a Sanity project:**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Create a new project
   - Note down your project ID

4. **Update the Sanity configuration:**
   Edit `sanity.config.js` and replace `your-project-id-here` with your actual project ID

5. **Start the Sanity Studio:**
   ```bash
   npm run dev
   ```
   The CMS will be available at `http://localhost:3333`

## Admin Panel Capabilities

The Sanity.io CMS allows you to manage:

- **Products**: Add, edit, and update art pieces with titles, descriptions, prices, images, and stock status
- **Categories**: Organize products into main categories like Canvas Painting, Pichwai Painting, etc.
- **Subcategories**: Further organize products within categories (e.g., oil, acrylic under Canvas Painting)
- **Images**: Upload and manage product and category images
- **Stock Management**: Mark products as sold or in stock
- **Content Updates**: Modify product descriptions, titles, and other details

## Data Structure

The application uses the following content types defined in Sanity:

- `product`: Individual art pieces with title, description, price, images, categories, and stock status
- `category`: Top-level categories for organizing products
- `subcategory`: Subcategories that belong to categories

## Environment Variables

Create a `.env` file in the `Art_Studio` directory:

```env
VITE_SANITY_PROJECT_ID=your-sanity-project-id
VITE_SANITY_DATASET=your-dataset-name
```

## Running the Application

After setting up both the frontend and Sanity CMS:

1. Start the Sanity Studio in the `Admin` directory:
   ```bash
   cd ../Admin
   npm run dev
   ```

2. In a new terminal, start the frontend application in the `Art_Studio` directory:
   ```bash
   cd ../Art_Studio
   npm run dev
   ```

## Admin Panel Usage

1. Access the Sanity Studio at `http://localhost:3333`
2. Add new products by navigating to "Products" in the sidebar
3. Upload images for each product
4. Set descriptions, titles, prices, and categories
5. Update stock status (in stock/sold)
6. Create new categories and subcategories as needed

Changes made in the Sanity CMS will automatically reflect on the live website.

## Project Structure

```
Art_Studio/ (Frontend Application)
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── theme/
│   ├── utils/
│   │   ├── client.js (Sanity client)
│   │   └── api.js (API utility functions)
│   └── ...
├── .env.example
└── ...
Admin/ (Sanity CMS)
├── schemas/
├── structure.js
├── sanity.config.js
└── ...
```

## API Integration

The frontend uses the Sanity client to fetch:
- Categories and subcategories
- Products with their associated images
- Product details (title, description, price, stock status)
- Search functionality

## Troubleshooting

- If the application can't fetch data, ensure the Sanity CMS is running and your project ID is correct
- Verify that your `.env` file is properly configured with the correct Sanity project details
- Check that the Sanity schema matches the expected structure in the API utility functions

## Deployment

- The frontend can be deployed using any static hosting service (Vercel, Netlify, etc.)
- The Sanity CMS runs on Sanity's infrastructure but can be configured for custom domains
- Remember to update your environment variables with production values when deploying

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.