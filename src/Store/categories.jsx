const initialState = [
    {
      name: 'bonsai-trees',
      displayName: 'Bonsai Trees',
      description:
        'A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.',
    },
    {
      name: 'indoor-plants',
      displayName: 'Indoor Plants',
      description:
        'A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.',
    },
    {
      name: 'succulents',
      displayName: 'Succulents',
      description:
        'Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.',
    }];

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
}

export default categoriesReducer;
