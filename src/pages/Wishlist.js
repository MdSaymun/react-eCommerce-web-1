import React from "react";
import { useGlobalContext } from "../utils/context";
import { FaHeart, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";

const Wishlist = () => {
  const { state, addToCart, increment, decrement, handleWishlistItem, hideCartItems } = useGlobalContext();
  const { wishlistData, cartData } = state;

  return (
    <section className="py-20 wishlist-section-main h-screen" onMouseOver={hideCartItems}>
      <div className="section md:container">
        <h1 className="my-10 font-bold text-4xl text-center uppercase">Wishlist</h1>
        {wishlistData.length < 1 ? (
          <div>
            <h1 className="text-center text-2xl font-bold mb-3">The Wishlist is Currently empty</h1>
            <p className="text-center">
              Click the
              <span className="ml-2">
                <FaHeart className="inline-block mr-2" />
              </span>
              icon to add products
            </p>
          </div>
        ) : (
          <div className="section_wishlist w-3/4 mx-auto">
            <Row className="wishlist-item-title mb-2">
              <Col xs={4} className="title-product ">
                Product
              </Col>
              <Col xs={4} className="title-price text-center ml-3">
                Price
              </Col>
            </Row>
            <hr className="mb-3 hidden sm:block" />
            <Row>
              {wishlistData.map((item) => {
                const { image, title, price, id } = item;
                const findItem = cartData.find((item) => item.id === id);
                return (
                  <Col xs={12} className=" mb-3">
                    <div className="box-wishlist-item flex-wrap flex flex-col md:flex-row justify-between items-center">
                      <div className="image-wishlist-delete-btn flex items-center flex-wrap">
                        <button className="px-2 py-1 mx-2 text-red-500 font-bold text-2xl" onClick={() => handleWishlistItem(id)}>
                          <FaTimes />
                        </button>

                        <img src={image} alt="" className="w-16" />
                        <h3 className="font-bold mx-2">{title}</h3>
                      </div>
                      <div className="price text-center mb-2 md:mb-0">
                        <div className="px-2">${price}</div>
                      </div>
                      {cartData.find((item) => item.id === id) ? (
                        <div className="buttons-inc-dec-input flex items-center justify-center">
                          <button onClick={() => decrement(id)} className="decrement p-2 bg-gray-100">
                            <FaMinus />
                          </button>
                          <div className="p-2">{findItem && findItem.amount}</div>
                          <button onClick={() => increment(id)} className="increment p-2 bg-gray-100">
                            <FaPlus />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => addToCart(id)} className="text-center bg-blue-500 py-1 px-4 mx-auto rounded-full flex items-center text-white hover:bg-opacity-70">
                          <span className="mr-2">Add To Cart</span> <FiShoppingCart />
                        </button>
                      )}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
