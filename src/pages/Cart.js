import React from "react";
import { useGlobalContext } from "../utils/context";

const Cart = () => {
  const { state, hideCartItems } = useGlobalContext();
  const { cartData } = state;
  // console.log(cartData);
  return (
    <div className="py-20" onMouseOver={hideCartItems}>
      <h1>Cart page</h1>
    </div>
  );
};

export default Cart;
