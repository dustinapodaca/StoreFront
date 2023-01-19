const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return [...state, payload];
    case "REMOVE":
      return state.filter((product) => product.id !== payload.id);
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};

export default cartReducer;
