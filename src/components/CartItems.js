import React from "react";
import { Col, Row } from "react-bootstrap";
import { useGlobalContext } from "../utils/context";
import { Link } from "react-router-dom";
const CartItems = () => {
  const { state, isCartItemShow, handleCartItem } = useGlobalContext();
  const { cartData, total } = state;

  return (
    <div
      className={`cartItems-container shadow-xl fixed w-96 right-10 z-50 bg-white p-3 px-4 top-14 transition
     ${isCartItemShow ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      {cartData.length < 1 ? (
        <p className="text-center">no products in this cart</p>
      ) : (
        <Row className="flex-col">
          {cartData.map((item, i) => {
            return (
              <Col key={i}>
                <div className="cartItem-box py-2 ">
                  <div className="cart-item-image mr-3">
                    <img src={item.image} className="w-14" alt="" />
                  </div>
                  <div className="info-cart-item">
                    <h4 className="mb-1">{item.title}</h4>
                    <div className="item-price-amount text-gray-500">
                      <span className="mr-2">{item.amount}</span>X<span className="ml-2">${item.price}</span>
                    </div>
                  </div>
                  <button className="remove-cartItem bg-red-500 h-10 rounded-md text-white py-1 px-2" onClick={() => handleCartItem(item.id)}>
                    remove
                  </button>
                </div>
              </Col>
            );
          })}
          <hr className="mt-2" />
          <div className="subtotal-cartItems flex items-center justify-between">
            <h4 className="font-semibold">SubTotal:</h4>
            <span className="font-bold">${total}</span>
          </div>
          <div className="buttons-cartItems flex items-center justify-center ">
            <button className="view-car w-1/3 py-1 text-center mx-2 bg-blue-500 text-white">
              <Link to="/cart">View Cart</Link>
            </button>
            <button className="checkout w-1/3 py-1 text-center mx-2 bg-gray-300 ">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </Row>
      )}
    </div>
  );
};

export default CartItems;
