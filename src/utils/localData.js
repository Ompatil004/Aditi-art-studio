// Local data for the Art Studio application with image references
export const localCategories = [
  {
    id: 1,
    name: 'Paithani Theme Based Painting',
    description: 'Beautiful paintings inspired by Paithani silk sarees',
    image: '/src/assets/products/Paithani_Theme_Based_Painting/category.jpg',
    products: [
      {
        id: 'prod1',
        name: 'Traditional Paithani Art',
        description: 'Beautiful traditional Paithani painting with intricate details',
        price: '₹12,500',
        image: '/src/assets/products/Paithani_Theme_Based_Painting/traditional-paithani.jpg',
        category: 'Paithani Theme Based Painting',
        inStock: true
      },
      {
        id: 'prod2',
        name: 'Modern Paithani Fusion',
        description: 'Contemporary take on traditional Paithani patterns',
        price: '₹8,900',
        image: '/src/assets/products/Paithani_Theme_Based_Painting/modern-paithani.jpg',
        category: 'Paithani Theme Based Painting',
        inStock: true
      }
    ],
    subCategories: null
  },
  {
    id: 2,
    name: 'Canvas Painting',
    description: 'Oil, Acrylic, and 3D Acrylic paintings on canvas',
    image: '/src/assets/products/Canvas_Painting/category.jpg',
    products: [],
    subCategories: [
      {
        id: 'subcat1',
        name: 'Oil Paintings',
        description: 'Traditional oil paintings with rich colors',
        image: '/src/assets/products/Canvas_Painting/Oil_Paintings/category.jpg',
        products: [
          {
            id: 'prod9',
            name: 'Classic Landscape Oil',
            price: '₹12,500',
            image: '/src/assets/products/Canvas_Painting/Oil_Paintings/landscape-oil.jpg',
            description: 'Traditional oil painting with classic landscape elements'
          },
          {
            id: 'prod10',
            name: 'Portrait in Oil',
            price: '₹9,800',
            image: '/src/assets/products/Canvas_Painting/Oil_Paintings/portrait-oil.jpg',
            description: 'Beautiful portrait painted in traditional oil technique'
          }
        ]
      },
      {
        id: 'subcat2',
        name: 'Acrylic Paintings',
        description: 'Vibrant acrylic paintings on canvas',
        image: '/src/assets/products/Canvas_Painting/Acrylic_Paintings/category.jpg',
        products: [
          {
            id: 'prod11',
            name: 'Abstract Acrylic',
            price: '₹7,200',
            image: '/src/assets/products/Canvas_Painting/Acrylic_Paintings/abstract-acrylic.jpg',
            description: 'Vibrant abstract painting with bold acrylic colors'
          },
          {
            id: 'prod12',
            name: 'Nature Acrylic',
            price: '₹8,500',
            image: '/src/assets/products/Canvas_Painting/Acrylic_Paintings/nature-acrylic.jpg',
            description: 'Colorful nature scene painted with acrylic colors'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Texture Wall Art',
    description: 'Three-dimensional wall art with rich textures',
    image: '/src/assets/products/Texture_Wall_Art/category.jpg',
    products: [
      {
        id: 'prod5',
        name: 'Textured Stone Art',
        description: 'Three-dimensional artwork with stone texture effect',
        price: '₹15,000',
        image: '/src/assets/products/Texture_Wall_Art/textured-stone.jpg',
        category: 'Texture Wall Art',
        inStock: true
      },
      {
        id: 'prod6',
        name: 'Metallic Texture Piece',
        description: 'Contemporary wall art with metallic texture',
        price: '₹11,500',
        image: '/src/assets/products/Texture_Wall_Art/metallic-texture.jpg',
        category: 'Texture Wall Art',
        inStock: true
      }
    ],
    subCategories: null
  },
  {
    id: 4,
    name: 'Gifting Options',
    description: 'Perfect art pieces for special occasions',
    image: '/src/assets/products/Gifting_Options/category.jpg',
    products: [
      {
        id: 'prod7',
        name: 'Festive Art Gift',
        description: 'Perfect art piece for festive gifting',
        price: '₹5,500',
        image: '/src/assets/products/Gifting_Options/festive-gift.jpg',
        category: 'Gifting Options',
        inStock: true
      },
      {
        id: 'prod8',
        name: 'Wedding Collection',
        description: 'Elegant art piece for wedding gifts',
        price: '₹13,200',
        image: '/src/assets/products/Gifting_Options/wedding-collection.jpg',
        category: 'Gifting Options',
        inStock: true
      }
    ],
    subCategories: null
  }
];

export const localProducts = [
  {
    id: 'prod1',
    name: 'Traditional Paithani Art',
    description: 'Beautiful traditional Paithani painting with intricate details',
    price: '₹12,500',
    image: '/src/assets/products/Paithani_Theme_Based_Painting/traditional-paithani.jpg',
    category: 'Paithani Theme Based Painting',
    inStock: true
  },
  {
    id: 'prod2',
    name: 'Modern Paithani Fusion',
    description: 'Contemporary take on traditional Paithani patterns',
    price: '₹8,900',
    image: '/src/assets/products/Paithani_Theme_Based_Painting/modern-paithani.jpg',
    category: 'Paithani Theme Based Painting',
    inStock: true
  },
  {
    id: 'prod3',
    name: 'Abstract Canvas Art',
    description: 'Vibrant abstract painting on canvas with acrylic colors',
    price: '₹7,200',
    image: '/src/assets/products/Canvas_Painting/abstract-canvas.jpg',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod4',
    name: 'Landscape Canvas',
    description: 'Beautiful landscape painting with nature elements',
    price: '₹9,800',
    image: '/src/assets/products/Canvas_Painting/landscape-canvas.jpg',
    category: 'Canvas Painting',
    inStock: false
  },
  {
    id: 'prod5',
    name: 'Textured Stone Art',
    description: 'Three-dimensional artwork with stone texture effect',
    price: '₹15,000',
    image: '/src/assets/products/Texture_Wall_Art/textured-stone.jpg',
    category: 'Texture Wall Art',
    inStock: true
  },
  {
    id: 'prod6',
    name: 'Metallic Texture Piece',
    description: 'Contemporary wall art with metallic texture',
    price: '₹11,500',
    image: '/src/assets/products/Texture_Wall_Art/metallic-texture.jpg',
    category: 'Texture Wall Art',
    inStock: true
  },
  {
    id: 'prod7',
    name: 'Festive Art Gift',
    description: 'Perfect art piece for festive gifting',
    price: '₹5,500',
    image: '/src/assets/products/Gifting_Options/festive-gift.jpg',
    category: 'Gifting Options',
    inStock: true
  },
  {
    id: 'prod8',
    name: 'Wedding Collection',
    description: 'Elegant art piece for wedding gifts',
    price: '₹13,200',
    image: '/src/assets/products/Gifting_Options/wedding-collection.jpg',
    category: 'Gifting Options',
    inStock: true
  },
  {
    id: 'prod9',
    name: 'Classic Landscape Oil',
    price: '₹12,500',
    image: '/src/assets/products/Canvas_Painting/Oil_Paintings/landscape-oil.jpg',
    description: 'Traditional oil painting with classic landscape elements',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod10',
    name: 'Portrait in Oil',
    price: '₹9,800',
    image: '/src/assets/products/Canvas_Painting/Oil_Paintings/portrait-oil.jpg',
    description: 'Beautiful portrait painted in traditional oil technique',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod11',
    name: 'Abstract Acrylic',
    price: '₹7,200',
    image: '/src/assets/products/Canvas_Painting/Acrylic_Paintings/abstract-acrylic.jpg',
    description: 'Vibrant abstract painting with bold acrylic colors',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod12',
    name: 'Nature Acrylic',
    price: '₹8,500',
    image: '/src/assets/products/Canvas_Painting/Acrylic_Paintings/nature-acrylic.jpg',
    description: 'Colorful nature scene painted with acrylic colors',
    category: 'Canvas Painting',
    inStock: true
  }
];