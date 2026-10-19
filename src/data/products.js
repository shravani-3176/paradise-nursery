export const productCategories = [
  {
    name: 'Indoor Plants',
    intro: 'Easygoing greens to make every room feel more like yours.',
    products: [
      {
        id: 'monstera-deliciosa',
        name: 'Monstera Deliciosa',
        description: 'A statement-making tropical favorite with beautifully split leaves.',
        price: 32,
        image: '/images/monstera.jpg',
        alt: 'Monstera leaves displayed in a glass vase',
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        description: 'Glossy, deep-green foliage that brings a little drama to a bright corner.',
        price: 28,
        image: '/images/leafy-home.jpg',
        alt: 'Potted rubber plant with broad leaves',
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        description: 'A graceful, compact palm that adds a soft tropical touch indoors.',
        price: 24,
        image: '/images/tropical-green.jpg',
        alt: 'Large tropical plant in a white planter',
      },
    ],
  },
  {
    name: 'Air-Purifying Plants',
    intro: 'Leafy companions selected for a fresher-feeling home.',
    products: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        description: 'Upright, sculptural leaves and a forgiving nature make care simple.',
        price: 26,
        image: '/images/potted-plant.jpg',
        alt: 'Close-up of dense green fern-like foliage',
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        description: 'Rich green leaves and elegant white blooms brighten a quiet nook.',
        price: 30,
        image: '/images/leafy-texture.jpg',
        alt: 'Close-up of layered green leaves',
      },
      {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        description: 'A trailing, adaptable vine that looks lovely on shelves or in a hanger.',
        price: 18,
        image: '/images/tropical-green.jpg',
        alt: 'Green tropical leaves in a planter',
        alt: 'Broad, glossy tropical leaves in a bright interior',
      },
    ],
  },
  {
    name: 'Succulents',
    intro: 'Small, sun-loving shapes for desks, windowsills, and gifts.',
    products: [
      {
        id: 'echeveria',
        name: 'Echeveria',
        description: 'A neat rosette of pastel-toned leaves for a sunny little spot.',
        price: 14,
        image: '/images/succulent.jpg',
        alt: 'Succulent rosette in a small pot',
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        description: 'A cheerful, sturdy succulent with plump leaves and a sculptural form.',
        price: 16,
        image: '/images/leafy-home.jpg',
        alt: 'Glossy green leaves on a compact indoor plant',
      },
    ],
  },
];

export const products = productCategories.flatMap((category) =>
  category.products.map((product) => ({ ...product, category: category.name })),
);
