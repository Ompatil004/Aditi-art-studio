// Local data for the Art Studio application with image references
const paithani1 = "/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0006.jpg";
const paithani2 = "/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0009.jpg";
const paithani3 = "/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0012.jpg";
const paithani4 = "/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0018.jpg";
const canvas1 = "/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg";
const canvas2 = "/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg";
const texture1 = "/products/Texture_Wall_Art/IMG-20250924-WA0007.jpg";
const texture2 = "/products/Texture_Wall_Art/IMG-20250924-WA0010.jpg";
const texture3 = "/products/Texture_Wall_Art/IMG-20250924-WA0014.jpg";
const texture4 = "/products/Texture_Wall_Art/IMG-20250924-WA0017.jpg";
const gift1 = "/products/Gifting_Options/IMG-20250924-WA0005.jpg";
const gift2 = "/products/Gifting_Options/IMG-20250924-WA0011.jpg";
const gift3 = "/products/Gifting_Options/IMG-20250924-WA0013.jpg";

export {
  paithani1, paithani2, paithani3, paithani4,
  canvas1, canvas2,
  texture1, texture2, texture3, texture4,
  gift1, gift2, gift3
};

export const localCategories = [
  {
    id: 1,
    name: 'Paithani Theme Based Painting',
    description: 'Beautiful paintings inspired by Paithani silk sarees',
    image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0006.jpg',
    products: [
      {
        id: 'prod1',
        name: 'Traditional Paithani Art',
        description: 'Beautiful traditional Paithani painting with intricate details',
        price: '₹12,500',
        image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0006.jpg',
        category: 'Paithani Theme Based Painting',
        inStock: true
      },
      {
        id: 'prod2',
        name: 'Modern Paithani Fusion',
        description: 'Contemporary take on traditional Paithani patterns',
        price: '₹8,900',
        image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0009.jpg',
        category: 'Paithani Theme Based Painting',
        inStock: true
      },
      {
        id: 'prod13',
        name: 'Royal Paithani Elegance',
        description: 'Elegant royal-themed Paithani painting',
        price: '₹14,200',
        image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0012.jpg',
        category: 'Paithani Theme Based Painting',
        inStock: true
      },
      {
        id: 'prod14',
        name: 'Contemporary Paithani Design',
        description: 'Modern interpretation of traditional Paithani patterns',
        price: '₹11,800',
        image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0018.jpg',
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
    image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
    products: [
      {
        id: 'prod3',
        name: 'Abstract Canvas Art',
        description: 'Vibrant abstract painting on canvas with acrylic colors',
        price: '₹7,200',
        image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
        category: 'Canvas Painting',
        inStock: true
      },
      {
        id: 'prod4',
        name: 'Landscape Canvas',
        description: 'Beautiful landscape painting with nature elements',
        price: '₹9,800',
        image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
        category: 'Canvas Painting',
        inStock: false
      }
    ],
    subCategories: [
      {
        id: 'subcat1',
        name: 'Oil Paintings',
        description: 'Traditional oil paintings with rich colors',
        image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
        products: [
          {
            id: 'prod9',
            name: 'Classic Landscape Oil',
            price: '₹12,500',
            image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
            description: 'Traditional oil painting with classic landscape elements'
          },
          {
            id: 'prod10',
            name: 'Portrait in Oil',
            price: '₹9,800',
            image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
            description: 'Beautiful portrait painted in traditional oil technique'
          }
        ]
      },
      {
        id: 'subcat2',
        name: 'Acrylic Paintings',
        description: 'Vibrant acrylic paintings on canvas',
        image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
        products: [
          {
            id: 'prod11',
            name: 'Abstract Acrylic',
            price: '₹7,200',
            image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
            description: 'Vibrant abstract painting with bold acrylic colors'
          },
          {
            id: 'prod12',
            name: 'Nature Acrylic',
            price: '₹8,500',
            image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
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
    image: '/products/Texture_Wall_Art/IMG-20250924-WA0007.jpg',
    products: [
      {
        id: 'prod5',
        name: 'Textured Stone Art',
        description: 'Three-dimensional artwork with stone texture effect',
        price: '₹15,000',
        image: '/products/Texture_Wall_Art/IMG-20250924-WA0007.jpg',
        category: 'Texture Wall Art',
        inStock: true
      },
      {
        id: 'prod6',
        name: 'Metallic Texture Piece',
        description: 'Contemporary wall art with metallic texture',
        price: '₹11,500',
        image: '/products/Texture_Wall_Art/IMG-20250924-WA0010.jpg',
        category: 'Texture Wall Art',
        inStock: true
      },
      {
        id: 'prod15',
        name: 'Wood Texture Art',
        description: 'Beautiful wall art with realistic wood texture',
        price: '₹12,800',
        image: '/products/Texture_Wall_Art/IMG-20250924-WA0014.jpg',
        category: 'Texture Wall Art',
        inStock: true
      },
      {
        id: 'prod16',
        name: 'Marble Finish Wall Art',
        description: 'Elegant marble texture finish wall artwork',
        price: '₹14,500',
        image: '/products/Texture_Wall_Art/IMG-20250924-WA0017.jpg',
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
    image: '/products/Gifting_Options/IMG-20250924-WA0005.jpg',
    products: [
      {
        id: 'prod7',
        name: 'Festive Art Gift',
        description: 'Perfect art piece for festive gifting',
        price: '₹5,500',
        image: '/products/Gifting_Options/IMG-20250924-WA0005.jpg',
        category: 'Gifting Options',
        inStock: true
      },
      {
        id: 'prod8',
        name: 'Wedding Collection',
        description: 'Elegant art piece for wedding gifts',
        price: '₹13,200',
        image: '/products/Gifting_Options/IMG-20250924-WA0011.jpg',
        category: 'Gifting Options',
        inStock: true
      },
      {
        id: 'prod17',
        name: 'Corporate Gifting Set',
        description: 'Professional art pieces perfect for corporate gifting',
        price: '₹9,800',
        image: '/products/Gifting_Options/IMG-20250924-WA0013.jpg',
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
    image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0006.jpg',
    category: 'Paithani Theme Based Painting',
    inStock: true
  },
  {
    id: 'prod2',
    name: 'Modern Paithani Fusion',
    description: 'Contemporary take on traditional Paithani patterns',
    price: '₹8,900',
    image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0009.jpg',
    category: 'Paithani Theme Based Painting',
    inStock: true
  },
  {
    id: 'prod3',
    name: 'Abstract Canvas Art',
    description: 'Vibrant abstract painting on canvas with acrylic colors',
    price: '₹7,200',
    image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod4',
    name: 'Landscape Canvas',
    description: 'Beautiful landscape painting with nature elements',
    price: '₹9,800',
    image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
    category: 'Canvas Painting',
    inStock: false
  },
  {
    id: 'prod5',
    name: 'Textured Stone Art',
    description: 'Three-dimensional artwork with stone texture effect',
    price: '₹15,000',
    image: '/products/Texture_Wall_Art/IMG-20250924-WA0007.jpg',
    category: 'Texture Wall Art',
    inStock: true
  },
  {
    id: 'prod6',
    name: 'Metallic Texture Piece',
    description: 'Contemporary wall art with metallic texture',
    price: '₹11,500',
    image: '/products/Texture_Wall_Art/IMG-20250924-WA0010.jpg',
    category: 'Texture Wall Art',
    inStock: true
  },
  {
    id: 'prod7',
    name: 'Festive Art Gift',
    description: 'Perfect art piece for festive gifting',
    price: '₹5,500',
    image: '/products/Gifting_Options/IMG-20250924-WA0005.jpg',
    category: 'Gifting Options',
    inStock: true
  },
  {
    id: 'prod8',
    name: 'Wedding Collection',
    description: 'Elegant art piece for wedding gifts',
    price: '₹13,200',
    image: '/products/Gifting_Options/IMG-20250924-WA0011.jpg',
    category: 'Gifting Options',
    inStock: true
  },
  {
    id: 'prod9',
    name: 'Classic Landscape Oil',
    price: '₹12,500',
    image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
    description: 'Traditional oil painting with classic landscape elements',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod10',
    name: 'Portrait in Oil',
    price: '₹9,800',
    image: '/products/Canvas_Painting/Oil_Paintings/IMG-20250924-WA0008.jpg',
    description: 'Beautiful portrait painted in traditional oil technique',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod11',
    name: 'Abstract Acrylic',
    price: '₹7,200',
    image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
    description: 'Vibrant abstract painting with bold acrylic colors',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod12',
    name: 'Nature Acrylic',
    price: '₹8,500',
    image: '/products/Canvas_Painting/Acrylic_Paintings/IMG-20250924-WA0015.jpg',
    description: 'Colorful nature scene painted with acrylic colors',
    category: 'Canvas Painting',
    inStock: true
  },
  {
    id: 'prod13',
    name: 'Royal Paithani Elegance',
    description: 'Elegant royal-themed Paithani painting',
    price: '₹14,200',
    image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0012.jpg',
    category: 'Paithani Theme Based Painting',
    inStock: true
  },
  {
    id: 'prod14',
    name: 'Contemporary Paithani Design',
    description: 'Modern interpretation of traditional Paithani patterns',
    price: '₹11,800',
    image: '/products/Paithani_Theme_Based_Painting/IMG-20250924-WA0018.jpg',
    category: 'Paithani Theme Based Painting',
    inStock: true
  },
  {
    id: 'prod15',
    name: 'Wood Texture Art',
    description: 'Beautiful wall art with realistic wood texture',
    price: '₹12,800',
    image: '/products/Texture_Wall_Art/IMG-20250924-WA0014.jpg',
    category: 'Texture Wall Art',
    inStock: true
  },
  {
    id: 'prod16',
    name: 'Marble Finish Wall Art',
    description: 'Elegant marble texture finish wall artwork',
    price: '₹14,500',
    image: '/products/Texture_Wall_Art/IMG-20250924-WA0017.jpg',
    category: 'Texture Wall Art',
    inStock: true
  },
  {
    id: 'prod17',
    name: 'Corporate Gifting Set',
    description: 'Professional art pieces perfect for corporate gifting',
    price: '₹9,800',
    image: '/products/Gifting_Options/IMG-20250924-WA0013.jpg',
    category: 'Gifting Options',
    inStock: true
  }
];