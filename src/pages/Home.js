import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import SliderHome from "../components/SliderHome";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { animateScroll as scroll } from "react-scroll";
import { useGlobalContext } from "../utils/context";
import SingleProduct from "../components/SingleProduct";
import Modal from "../components/Modal";
// animation on scroll
// fake store api
let url = "https://fakestoreapi.com/products?limit=3";
AOS.init({
  duration: 1200,
});
// smooth scroll
const scrollToTop = () => {
  scroll.scrollToTop();
};
const Home = () => {
  const { data, isModalOpen, hideCartItems } = useGlobalContext();
  const [products, setProducts] = React.useState([]);

  // category filter
  const [index, setIndex] = React.useState(0);
  const [newData, setNewData] = React.useState(data);
  const newCategory = ["All", ...new Set(data.map((cat) => cat.category))];
  const handleCategory = (cat) => {
    if (cat === "All") {
      setNewData(data);
    } else {
      const filterProducts = data.filter((item) => item.category === cat);
      setNewData(filterProducts);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(url);
      const response = await request.json();
      if (response) {
        setProducts(response);
      } else {
        setProducts([]);
      }
    };
    fetchData();
  }, []);

  const [isTopOpen, setIsTopOpen] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsTopOpen(true);
      } else {
        setIsTopOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="section_home" onMouseOver={hideCartItems}>
        <div className="slider-home-center lg:h-screen ">
          <div className="slider-home h-full">
            <SliderHome />
          </div>
        </div>
        <div className="section home-center">
          <div className="md:container">
            <div className="featured_products my-10">
              <Row>
                {products.map((item, i) => {
                  const { category, image } = item;
                  let trend = "new Trend";
                  return (
                    <Col lg={4} md={6} key={i}>
                      <div className="product-box relative p-4">
                        <img src={image} alt="" className="mx-auto" />
                        <div className="info-product">
                          <h3 className="mb-2">{trend}</h3>
                          <h4 className="mb-2 text-gray-600 capitalize">{category}</h4>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div className="products-overview">
              <h1 className="mb-3 text-2xl font-bold uppercase">Product Overview</h1>
              <div className="category-menu mb-3">
                <Row className="items-center ">
                  <Col md={8} className="flex flex-wrap">
                    {newCategory.map((cat, i) => {
                      return (
                        <div
                          onClick={() => {
                            handleCategory(cat);
                            setIndex(i);
                          }}
                          key={i}
                          className={`category-name px-3 border py-2 mx-2 my-2 ${i === index && "bg-blue-500 text-white"}`}
                        >
                          {cat}
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              </div>
              <Row>
                {newData.map((item, i) => {
                  return <SingleProduct {...item} key={i} />;
                })}
              </Row>
            </div>
          </div>
          {isModalOpen && (
            <div className="modal-component inset-0 absolute">
              <Modal />
            </div>
          )}
        </div>
        <button
          onClick={scrollToTop}
          className={`font-bold text-xl text-white fixed lg:bottom-10 lg:right-10 rig4 right-4 bottom-4 z-10 bg-gray-500 py-2 px-3 transition ${
            isTopOpen ? "visible opacity-100" : "invisible opacity-0"
          } `}
        >
          ^
        </button>
      </div>
    </>
  );
};

export default Home;
