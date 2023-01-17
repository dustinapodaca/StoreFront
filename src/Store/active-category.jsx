const initialState = {
  activeCategory: '',
};

const activeCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
}

// export const activeCategory = (category) => {
//   return {
//     type: "ACTIVE",
//     payload: category,
//   };
// };

export default activeCategoryReducer;

