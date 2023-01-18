const initialState = 'all';

const activeCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return payload;
    case "RESET":
      return initialState;
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

