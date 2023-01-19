import React from "react";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Store/cart/index.jsx";

const SimpleCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h5>Cart ({ cart.length }) </h5>
      {cart.map((product, index) => (
        <p key={`cart-${index}`}>
          {product.name}
          <Button variant="text" onClick={() => dispatch(removeFromCart(product))}>
            Remove
          </Button>
        </p>
      ))}
    </div>
  );
};

export default SimpleCart;


// const SimpleCart = (props) => {
//   const { cart, removeFromCart } = props;
//   return (
//     <div>
//       <h5>Cart ({ cart.length }) </h5>
//       <ul>
//         {cart.cart.map((product) => (
//           <li key={product.id}>
//             {product.name}
//             <button onClick={() => removeFromCart(product)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories,
//     products: state.products,
//     activeCategory: state.activeCategory,
//     cart: state.cart,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (product) => dispatch({ type: "REMOVE", payload: product }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);