import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const { data, state, handleWishlistItem, addToWishlist, singleAddToCart } = useGlobalContext();
  const { wishlistData } = state;
  const params = useParams();
  const { productid } = params;
  const findItem = data.find((item) => +productid === item.id);
  const { image, price, title, description, category, id } = findItem;
  const [value, setValue] = useState(1);
  return (
    <div className="section_singleProduct_page py-20">
      <div className="section md:container">
        <div className="single-product mt-20 w-full">
          <Row>
            <Col md={4}>
              <div className="image-single-product w-3/4 mx-auto">
                <img src={image} alt="" className="w-full" />
              </div>
            </Col>
            <Col md={8}>
              <div className="breadcumb my-3">
                <Link to="/">Home</Link>/<span className="text-gray-500 ">{title}</span>
              </div>
              <div className="info-single-product">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="w-2/3 text-gray-600 mb-3">{description}</p>
                <h2 className="text-2xl mb-3 font-bold">${price}</h2>
              </div>
              <div className="buttons-single-productsPage items-center ">
                <div className="increment-decrement-input">
                  <button disabled={value < 2 ? true : false} className="item-decrement p-1  bg-gray-100 rounded-l-sm text-lg" onClick={() => setValue(+value - 1)}>
                    -
                  </button>
                  <input type="text" className="p-1 bg-gray-100 text-lg w-10 text-center focus:outline-none" value={value} onChange={(e) => setValue(e.target.value)} />
                  <button className="item-increment p-1 bg-gray-100 rounded-r-sm text-lg" onClick={() => setValue(+value + 1)}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => singleAddToCart(id, value)}
                  className="singlepage-add-to-cart-btn text-white bg-blue-500 py-2 px-4 rounded-full w-40 flex items-center justify-center"
                >
                  <FiShoppingCart className="mr-2 cursor-pointer" /> Add to cart
                </button>
                <div className="is-item-wishlist px-4">
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
              </div>
              <p className="mt-4 text-sm">Category: {category}</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
