import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch, FiHeart } from "react-icons/fi";
import { FaBars, FaHeart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
const NavbarCom = () => {
  const { state, openSidebar, showCartItems } = useGlobalContext();
  const { amount, wishlistData } = state;
  const navLiks = [
    { path: "/", name: "Home", exact: true },
    { path: "/about", name: "About" },
    { path: "/shop", name: "Shop" },
    { path: "/blog", name: "Blog " },
    { path: "/contact", name: "Contact" },
  ];
  const [isSrcOpen, setIsSrcOpen] = useState(false);
  const [showNavOnScroll, setShowNavOnScroll] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.pageYOffset > 50) {
        setShowNavOnScroll(true);
      } else {
        setShowNavOnScroll(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, [showNavOnScroll]);
  return (
    <section className={`section_navbar absolute top-0 left-0 z-20 w-full  transition-all py-2 duration-500 ${showNavOnScroll ? "onScroll bg-gray-200 py-3" : "bg-transparent"}`}>
      <div className="section nav-center lg:place-items-center ">
        <div className="nav-header flex items-center ">
          <button className="block lg:hidden text-xl border rounded-sm p-2" onClick={openSidebar}>
            <FaBars />
          </button>
          <h1 className="text-2xl py-3 hidden lg:block">
            <Link to="/">My Store</Link>
          </h1>
        </div>
        <div className="navlinks-container">
          <ul className="lg:flex items-center justify-center hidden">
            {navLiks.map((item, i) => {
              return (
                <NavLink key={i} activeClassName="text-blue-400" className="pr-5 hover:text-gray-600" exact={item.exact} to={item.path}>
                  {item.name}
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="nav-icons ">
          <div className="icons flex items-center">
            <div className="mr-3 text-lg">
              <div className="src-box flex items-center">
                <input
                  type="text"
                  placeholder="search product here"
                  className={` placeholder-opacity-40 text-sm border-transparent mr-2 w-0 transition-all duration-500 shadow-sm focus:border-blue-400  ${
                    isSrcOpen && "w-full py-1 px-3"
                  }`}
                />
                <button onClick={() => setIsSrcOpen(!isSrcOpen)}>
                  <FiSearch />
                </button>
              </div>
            </div>
            <Link to="/wishlist">
              <button className="mr-3 fle flex items-center">
                {wishlistData.length > 0 ? <FaHeart /> : <FiHeart />}
                <span className="h-5 text-sm w-5 flex items-center justify-center -mt-2 rounded-full bg-gray-700 text-white">{wishlistData.length}</span>
              </button>
            </Link>
            <Link to="/cart">
              <button className="flex" onMouseOver={showCartItems}>
                <FiShoppingCart />
                <span className="h-5 text-sm w-5 flex items-center justify-center -mt-2 rounded-full bg-gray-700 text-white">{amount}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarCom;
