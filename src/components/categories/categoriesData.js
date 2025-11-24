
const categories = [
  {
    id: 1,
    name: "Paithani theme based painting",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070",
    accentColor: "rgba(255, 165, 0, 0.4)",
    products: [
      {
        id: 3001,
        name: "Royal Peacock Paithani",
        price: "₹25,000",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      },
      {
        id: 3002,
        name: "Lotus Garden Motif",
        price: "₹28,000",
        image: "https://images.unsplash.com/photo-1579783900882-c0d387a1773d",
      },
    ],
  },
  {
    id: 2,
    name: "Canvas Painting",
    image: "https://images.unsplash.com/photo-1506744038165-bb217c46d2a4?q=80&w=2070",
    accentColor: "rgba(60, 179, 113, 0.4)",
    subCategories: [
      {
        id: 201,
        name: "oil",
        image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d7?q=80&w=1974",
        accentColor: "rgba(72, 209, 204, 0.5)",
        products: [
          { id: 1001, name: "Mountain Vista", price: "₹15,000", image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b" },
          { id: 1002, name: "Coastal Sunset", price: "₹22,000", image: "https://images.unsplash.com/photo-1502657877623-f66bf489d236" },
        ],
      },
      {
        id: 202,
        name: "Acrylic",
        image: "https://images.unsplash.com/photo-1617503752587-77ae1212626e?q=80&w=1964",
        accentColor: "rgba(238, 130, 238, 0.5)",
        products: [
          { id: 2001, name: "Abstract Flow", price: "₹9,500", image: "https://images.unsplash.com/photo-1536924940846-222ab78e28de" },
          { id: 2002, name: "Vibrant Strokes", price: "₹11,000", image: "https://images.unsplash.com/photo-1536922246289-88c42f957773" },
        ],
      },
      {
        id: 203,
        name: "3D Painting with acralic",
        image: "https://images.unsplash.com/photo-1513360371669-44941380365b?q=80&w=2070",
        accentColor: "rgba(30, 144, 255, 0.5)",
        products: [
          { id: 4001, name: "Raised Petals", price: "₹19,500", image: "https://images.unsplash.com/photo-1618331835718-fa6d488a1f7a" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Texture wall art",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
    accentColor: "rgba(255, 99, 71, 0.4)",
    products: [
      { id: 5001, name: "Impasto Waves", price: "₹16,000", image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17" },
      { id: 5002, name: "Earthen Plaster Art", price: "₹21,000", image: "https://images.unsplash.com/photo-1561069934-eee225952461" },
    ],
  },
  {
    id: 4,
    name: "Gifting options",
    image: "https://images.unsplash.com/photo-1558227917-a02e2652a20f?q=80&w=2070",
    accentColor: "rgba(106, 90, 205, 0.4)",
    products: [
      { id: 7001, name: "Hand-painted Mug Set", price: "₹2,500", image: "https://images.unsplash.com/photo-1598971937299-906048ec4213" },
      { id: 7002, name: "Miniature Canvas", price: "₹4,000", image: "https://images.unsplash.com/photo-1542838132-350bf66c2483" },
    ],
  },
  {
    id: 5,
    name: "Pichwai Painting",
    image: "https://images.unsplash.com/photo-1599839441113-d08915e61f2f?q=80&w=2070",
    accentColor: "rgba(0, 191, 255, 0.4)",
    products: [
      { id: 6001, name: "Kamadhenu Cow", price: "₹35,000", image: "https://images.unsplash.com/photo-1604938837225-5047824987a3" },
    ],
  },
  {
    id: 6,
    name: "Charcoal Painting",
    image: "https://images.unsplash.com/photo-1582234038676-43b9ef6c413b?q=80&w=2070",
    accentColor: "rgba(255, 20, 147, 0.4)",
    products: [
      { id: 8001, name: "Monochrome Portrait", price: "₹18,000", image: "https://images.unsplash.com/photo-1569466333538-20a5135a3988" },
    ],
  },
  {
    id: 7,
    name: "Tailor made wall art",
    image: "https://images.unsplash.com/photo-1543465137-b67c3315a6b7?q=80&w=2070",
    accentColor: "rgba(218, 165, 32, 0.4)",
    products: [
      { id: 9001, name: "Custom Abstract Piece", price: "Inquire for price", image: "https://images.unsplash.com/photo-1552554623-745a76a8b733" },
    ],
  },
];

export default categories;
