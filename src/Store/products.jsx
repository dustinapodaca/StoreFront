const initialState = [{
      name: 'Juniper Bonsai',
      category: 'bonsai-trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
      price: 49.99,
      inStock: 5,
    },
    {
      name: 'Chinese Elm Bonsai',
      category: 'bonsai-trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
      price: 149.99,
      inStock: 5,
    },
    {
      name: 'Brussels Bonsai',
      category: 'bonsai-trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
      price: 25.99,
      inStock: 5,
    },
    {
      name: 'Orchid',
      category: 'indoor-plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
      price: 11.99,
      inStock: 5,
    },
    {
      name: 'Fiddle Leaf Fig',
      category: 'indoor-plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
      price: 9.99,
      inStock: 5,
    },
    {
      name: 'Pothos Plant',
      category: 'indoor-plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
      price: 24.99,
      inStock: 5,
    },
    {
      name: 'Aloe Vera',
      category: 'succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
      price: 15.99,
      inStock: 5,
    },
    {
      name: 'Haworthia Succulent', 
      category: 'succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
      price: 21.99,
      inStock: 5,
    },
    {
      name: 'Echeveria Succulent',
      category: 'succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
      price: 8.99,
      inStock: 5,
    }];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return initialState.filter(product => product.category === payload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// export const reset = () => {
//   return {
//     type: "RESET",
//     payload: {},
//   };
// };

export default productsReducer;