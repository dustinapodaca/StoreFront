const initialState = {
    bonsaiProducts: [{
      name: 'bonsai-tree-1',
      category: 'bonsai-trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
      price: 49.99,
      inStock: 5,
    },
    {
      name: 'bonsai-tree-2',
      category: 'bonsai-trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
      price: 149.99,
      inStock: 5,
    },
    {
      name: 'bonsai-tree-3',
      category: 'bonsai-trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
      price: 25.99,
      inStock: 5,
    }],
  indoorPlantsProducts: [{
      name: 'indoor-plant-1',
      category: 'indoor-plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
      price: 11.99,
      inStock: 5,
    },
    {
      name: 'indoor-plant-2',
      category: 'indoor-plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
      price: 9.99,
      inStock: 5,
    },
    {
      name: 'indoor-plant-3',
      category: 'indoor-plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
      price: 24.99,
      inStock: 5,
    }],
  succulentProducts: [{
      name: 'succulent-1',
      category: 'succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
      price: 15.99,
      inStock: 5,
    },
    {
      name: 'succulent-2',
      category: 'succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
      price: 21.99,
      inStock: 5,
    },
    {
      name: 'succulent-3',
      category: 'succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
      price: 8.99,
      inStock: 5,
    }],
  activeCategory: '',
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return { ...state, activeCategory: payload };
    case "FILTER":
      let filteredProducts = state[payload].filter((product) => {
        return product.category === state.activeCategory;
      });
      return { ...state, filteredProducts: filteredProducts };
    default:
      return state;
  }
}

export default productsReducer;