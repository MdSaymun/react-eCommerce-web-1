import React from "react";
import { FaCodepen, FaFacebook, FaGithub, FaInstagram, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  const navLiks = [
    { path: "/", name: "Home", exact: true },
    { path: "/about", name: "About" },
    { path: "/shop", name: "Shop" },
    { path: "/blog", name: "Blog " },
    { path: "/contact", name: "Contact" },
  ];
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <section className=" lg:hidden block  sidebar-main">
      <div onClick={closeSidebar} className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`} />
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <h1 className="text-center py-3 font-semibold text-lg">MyStore</h1>
        <ul className=" ">
          {navLiks.map((item, i) => {
            return (
              <motion.div animate={isSidebarOpen ? "open" : "closed"} variants={variants} transition={{ ease: "easeInOut", duration: `${i}` }} key={i}>
                <NavLink activeClassName="text-blue-400" className=" hover:text-gray-600 block py-2 text-center text-gray-900" exact={item.exact} to={item.path}>
                  {item.name}
                </NavLink>
              </motion.div>
            );
          })}
        </ul>
        <button className="btn-close absolute top-0 right-0 p-2 font-light text-gray-600" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="social-icons flex items-center justify-center pt-8">
          <div className="icon px-2">
            <FaFacebook />
          </div>
          <div className="icon px-2">
            <FaGithub />
          </div>
          <div className="icon px-2">
            <FaInstagram />
          </div>
          <div className="icon px-2">
            <FaCodepen />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
