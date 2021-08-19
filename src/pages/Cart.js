import React from "react";
import { Col, Row } from "react-bootstrap";
import { useGlobalContext } from "../utils/context";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cart = () => {
  const { state, hideCartItems, increment, decrement, handleCartItem } = useGlobalContext();
  const { cartData, total } = state;

  return (
    <div className=" py-20 section_cart" onMouseOver={hideCartItems}>
      <div className="section container">
        <h1 className="text-4xl font-bold text-center my-10 text-gray-700 uppercase">Cart</h1>
        {cartData.length < 1 ? (
          <div>
            <h1 className="text-4xl font-bold text-gray-700 text-center">Your cart is currently empty</h1>
          </div>
        ) : (
          <Row>
            <Col md={10}>
              <div className="cart-items-container">
                <div className="cart-item-table-heading grid-cols-4 place-items-center">
                  <div className="product-cart-heading">Product</div>
                  <div className="price-cart-heading">Price</div>
                  <div className="quantity-cart-heading">Quantity</div>
                  <div className="subtotal-cart-heading">Subtotal</div>
                </div>
                <hr className="my-3" />
                <Row>
                  {cartData.map((item, i) => {
                    const { image, title, price, id } = item;
                    const findItem = cartData.find((item) => item.id === id);
                    return (
                      <Col key={i} xs={12} className=" mb-3">
                        <div className="box-cart-item items-center grid-cols-4 w-full ">
                          <div className="image-cart-item-delete-btn flex items-center">
                            <button className="px-2 py-1 mx-2 text-red-500 text-2xl font-bold" onClick={() => handleCartItem(id)}>
                              <FaTimes />
                            </button>
                            <img src={image} alt="" className="w-16 mr-2" />
                            <h3 className="font-bold mx-2">
                              <Link to={`/singleproduct/${id}`}>{title}</Link>
                            </h3>
                          </div>
                          <div className="price text-center mb-2 md:mb-0">
                            <div className="px-2">${price}</div>
                          </div>
                          <div className="buttons-inc-dec-input flex items-center justify-center">
                            <button onClick={() => decrement(id)} className="decrement p-2 bg-gray-100">
                              <FaMinus />
                            </button>
                            <div className="px-2 py-1 bg-gray-100">{findItem && findItem.amount}</div>
                            <button onClick={() => increment(id)} className="increment p-2 bg-gray-100">
                              <FaPlus />
                            </button>
                          </div>
                          <div className="subTotal text-center font-bold">${findItem && findItem.amount * price}</div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
            <Col md={2}>
              <div className="total-cartitem-pirce-box bg-gray-200 rounded-md shadow-sm p-3">
                <div className="subtotal-cart-item-price flex justify-between font-bold">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <hr className="my-3" />
                <div className="total-cart-item-price flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <hr className="my-3" />
                <Link to="/checkout">
                  <button className="bg-gray-800 text-white rounded-md block w-2/3 py-2 px-3 mx-auto text-sm">Checkout</button>
                </Link>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Cart;
