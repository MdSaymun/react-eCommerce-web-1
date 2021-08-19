import React, { useState, useEffect, useReducer } from "react";
import { reducer, initializer, initialState } from "./reducer";
export const AppContext = React.createContext();
const url = "https://fakestoreapi.com/products";
const AppProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result) {
        const newItem = result.map((item) => {
          return { ...item, amount: 1 };
        });
        setData(newItem);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  ///

  // sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState(null);

  const openModal = (id) => {
    setIsModalOpen(true);
    setProductId(id);
  };
  const closeModal = () => {
    setProductId(null);
    setIsModalOpen(false);
  };
  //

  const [state, dispatch] = useReducer(reducer, initialState, initializer);
  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(state));
  }, [state]);

  /// add to cart
  const addToCart = (id) => {
    const findItem = data.find((item) => item.id === id);
    // console.log(findItem);
    dispatch({ type: "ADD_TO_CART", paylaod: findItem });
  };
  // remove form cart
  const [deleteId, setDeleteId] = useState(null);
  const [isCartDeleteModal, setIsCartDeleteModal] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const [isWislistDelete, setIsWislistDelete] = useState(false);

  const handleCartItem = (id) => {
    setIsCartDeleteModal(true);
    setDeleteMsg(`Are you want to delete ${state.cartData.find((item) => item.id === id).title} from cart`);
    setDeleteId(id);
  };
  // hideModal
  const closeDeleteModal = () => {
    setIsCartDeleteModal(false);
    setIsWislistDelete(false);
    setDeleteId(null);
  };
  // deleteModal
  const removeCartItem = () => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: deleteId });
    closeDeleteModal();
    setDeleteId(null);
  };
  // get Total && amount
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartData]);
  //wishlist
  // add to wishlist

  const addToWishlist = (id) => {
    const findItem = data.find((item) => item.id === id);
    dispatch({ type: "ADD_TO_WISHLIST", payload: findItem });
  };
  const removeWishlist = () => {
    dispatch({ type: "REMOVE_WISHLIST_ITEM", payload: deleteId });
    closeDeleteModal();
    setDeleteId(null);
    setIsWislistDelete(false);
  };
  const handleWishlistItem = (id) => {
    setIsWislistDelete(true);
    setDeleteMsg(`Are you want to remove ${state.wishlistData.find((item) => item.id === id).title} from wishlist`);
    setDeleteId(id);
  };

  // increment and decrement
  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  // hide alert
  useEffect(() => {
    let time = setTimeout(() => {
      dispatch({ type: "HIDE_ALERT" });
    }, 3000);
    return () => clearTimeout(time);
  }, [state.cartData, state.wishlistData]);
  // show cartItems
  const [isCartItemShow, setIsCartItemShow] = useState(false);
  const showCartItems = () => {
    setIsCartItemShow(true);
  };
  const hideCartItems = () => {
    setIsCartItemShow(false);
  };

  // add to cart singleProduct
  const singleAddToCart = (id, value) => {
    const findItem = data.map((item) => item.id === id && { ...item, amount: item.amount + value - 1 });
    const newItem = findItem && findItem.find((item) => id === item.id);
    dispatch({ type: "SINGLE_ADD_TO_CART", payload: newItem, value });
  };
  return (
    <AppContext.Provider
      value={{
        singleAddToCart,
        handleWishlistItem,
        closeDeleteModal,
        deleteMsg,
        isCartDeleteModal,
        isWislistDelete,
        handleCartItem,
        removeCartItem,
        isCartItemShow,
        showCartItems,
        hideCartItems,
        increment,
        decrement,
        state,
        addToCart,
        addToWishlist,
        removeWishlist,
        data,
        loading,
        productId,
        openModal,
        closeModal,
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
export default AppProvider;
