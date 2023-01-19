import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//   {
//     id: 1,
//     name: "Juniper Bonsai",
//     category: "bonsai-trees",
//     description:
//       "A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.",
//     price: 49.99,
//     inStock: 5,
//   },
//   {
//     id: 2,
//     name: "Chinese Elm Bonsai",
//     category: "bonsai-trees",
//     description:
//       "A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.",
//     price: 149.99,
//     inStock: 5,
//   },
//   {
//     id: 3,
//     name: "Brussels Bonsai",
//     category: "bonsai-trees",
//     description:
//       "A bonsai tree is a living tree or shrub which has been grown in a way which gives the impression of being a full-sized, mature tree. An artistic representation of a full-sized tree in nature. Bonsai trees are generally grown in shallow ceramic pots.",
//     price: 25.99,
//     inStock: 5,
//   },
//   {
//     id: 4,
//     name: "Orchid",
//     category: "indoor-plants",
//     description:
//       "A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.",
//     price: 11.99,
//     inStock: 5,
//   },
//   {
//     id: 5,
//     name: "Fiddle Leaf Fig",
//     category: "indoor-plants",
//     description:
//       "A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.",
//     price: 9.99,
//     inStock: 5,
//   },
//   {
//     id: 6,
//     name: "Pothos Plant",
//     category: "indoor-plants",
//     description:
//       "A houseplant, sometimes known as a pot plant, potted plant, or an indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.",
//     price: 24.99,
//     inStock: 5,
//   },
//   {
//     id: 7,
//     name: "Aloe Vera",
//     category: "succulents",
//     description:
//       "Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.",
//     price: 15.99,
//     inStock: 5,
//   },
//   {
//     id: 8,
//     name: "Haworthia Succulent",
//     category: "succulents",
//     description:
//       "Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.",
//     price: 21.99,
//     inStock: 5,
//   },
//   {
//     id: 9,
//     name: "Echeveria Succulent",
//     category: "succulents",
//     description:
//       "Succulents are plants with fleshy, thickened leaves and/or swollen stems that store water. The word “succulent” comes from the Latin word sucus, meaning juice or sap. Succulents are able to survive on limited water resources, such as dew and mist, making them tolerant of drought.",
//     price: 8.99,
//     inStock: 5,
//   },
// ];

const SET_PRODUCTS = "SET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const setProducts = createAction(SET_PRODUCTS);
const addProduct = createAction(ADD_PRODUCT);

export const getProducts = () => async (dispatch, getState) => {
  let res = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(res.data.results));
};

export const addProducts = (product) => async (dispatch, getState) => {
  let res = await axios.post('https://api-js401.herokuapp.com/api/v1/products', product);
  dispatch(addProduct(res.data));
};

export const productsReducer = createReducer([], {
  [SET_PRODUCTS]: (state, action) => action.payload,
  [ADD_PRODUCT]: (state, action) => [...state, action.payload],
});


// const productsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "ACTIVE":
//       return initialState.filter(product => product.category === payload);
//     case "RESET":
//       return initialState
//     case "DECREMENT":
//       return state.map((product) => {
//         if (product.id === payload.id) {
//           return { ...product, inStock: product.inStock - 1 };
//         } else {
//           return product;
//         }
//       });
//     default:
//       return state;
//   }
// }

//action for decrementing stock when an item is added to the cart

export const decrementStock = (product) => {
  return {
    type: "DECREMENT",
    payload: product,
  };
};

// export const reset = () => {
//   return {
//     type: "RESET",
//     payload: {},
//   };
// };

export default productsReducer;