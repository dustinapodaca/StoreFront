import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from "./categories.jsx";
import productsReducer from "./products.jsx";
import activeCategoryReducer from "./active-category.jsx";
import cartReducer from "./cart/index.jsx";
import thunk from "./middleware/thunk.js";

let storeReducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
  cart: cartReducer,
});

const store = () => createStore(storeReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
