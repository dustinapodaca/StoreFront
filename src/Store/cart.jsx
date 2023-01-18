const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, cart: [...state.cart, payload] };
    case "REMOVE":
      return { ...state, cart: state.cart.filter((item) => item !== payload) };
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
