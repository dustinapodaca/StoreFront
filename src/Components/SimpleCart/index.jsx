import React from "react";
import { connect } from "react-redux";

const SimpleCart = (props) => {
  const { cart } = props;
  return (
    <div>
      <h5>Cart ({ cart.cart.length }) </h5>
      <ul>
        {cart.cart.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => props.removeFromCart(product)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
    activeCategory: state.activeCategory,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch({ type: "REMOVE", payload: product }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);