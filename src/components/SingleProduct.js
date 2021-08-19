import React from "react";
import { Col } from "react-bootstrap";
import { FaEye, FaHeart, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "../utils/context";
import { Link } from "react-router-dom";
const SingleProduct = ({ title, price, image, id }) => {
  const { openModal, addToCart, addToWishlist, state, increment, decrement, handleWishlistItem } = useGlobalContext();
  const { wishlistData, cartData } = state;
  const findItem = cartData.find((item) => item.id === id);
  return (
    <>
      <Col data-aos="zoom-in" lg={3} md={6}>
        <div className="box-product mx-2 my-5 px-3 py-3 ">
          <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="product-info mt-3">
            <Link to={`/singleproduct/${id}`}>
              <h3 className="font-bold mb-2 text-lg hover:text-blue-600">{title}</h3>
            </Link>
            <small className="text-base">${price}</small>
            <div className="buttons-single-product">
              <button onClick={() => openModal(id)} className="quick-view-btn">
                <FaEye />
              </button>
              {wishlistData.find((item) => item.id === id) ? (
                <button onClick={() => handleWishlistItem(id)} className="wishlist-btn-active">
                  <FaHeart />
                </button>
              ) : (
                <button onClick={() => addToWishlist(id)} className="wishlist-btn">
                  <FaRegHeart />
                </button>
              )}
            </div>
            <div className="buttons-product">
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
                <button onClick={() => addToCart(id)} className="add-to-cart-btn text-center bg-blue-500 py-1 px-4 mx-auto rounded-full">
                  <span className="mr-2">Add To Cart</span> <FiShoppingCart />
                </button>
              )}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default SingleProduct;
