import React, { useState, useEffect } from "react";
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

  // reducer
  const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      const newItem = [...new Set([...state.cartData, action.paylaod])];
      return { ...state, cartData: newItem, alertCom: { alrtMsg: "one Item added to cart", showAlrt: true, alertType: "success" } };
    }
    if (action.type === "REMOVE_CART_ITEM") {
      const newItem = state.cartData.filter((item) => action.payload !== item.id);
      return { ...state, cartData: newItem, alertCom: { alrtMsg: "one Item deleted from cart", showAlrt: true, alertType: "error" } };
    }
    if (action.type === "GET_TOTAL") {
      const totalAmount = state.cartData.reduce(
        (itemTotal, item) => {
          let price = item.price;
          let amount = item.amount;
          let totalPrice = price * amount;
          itemTotal.amount += amount;
          itemTotal.total += totalPrice;
          return itemTotal;
        },
        { total: 0, amount: 0 }
      );
      let floatNum = totalAmount.total.toFixed(2);
      return { ...state, total: floatNum, amount: totalAmount.amount };
    }
    if (action.type === "ADD_TO_WISHLIST") {
      const newItem = [...new Set([...state.wishlistData, action.payload])];
      return { ...state, wishlistData: newItem, alertCom: { alrtMsg: " item added to wishlist", showAlrt: true, alertType: "success" } };
    }
    if (action.type === "REMOVE_WISHLIST_ITEM") {
      const newItem = state.wishlistData.filter((item) => action.payload !== item.id);
      // console.log(newItem);
      return { ...state, wishlistData: newItem, alertCom: { alrtMsg: " item remove from wishlist", showAlrt: true, alertType: "error" } };
    }
    if (action.type === "INCREMENT") {
      const newItem = state.cartData.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cartData: newItem };
    }
    if (action.type === "DECREMENT") {
      const newItem = state.cartData
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cartData: newItem };
    }
    if (action.type === "HIDE_ALERT") {
      return { ...state, alertCom: { alrtMsg: "", showAlrt: false, alertType: "" } };
    }
    throw new Error("No Action type is match");
  };
  const initialState = {
    cartData: [],
    wishlistData: [],
    amount: 0,
    total: 0,
    alertCom: { alrtMsg: "", showAlrt: false, alertType: "" },
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  /// add to cart
  const addToCart = (id) => {
    const findItem = data.find((item) => item.id === id);
    // console.log(findItem);
    dispatch({ type: "ADD_TO_CART", paylaod: findItem });
  };
  // remove form cart
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");

  const handleCartItem = (id) => {
    setIsDeleteModal(true);
    setDeleteMsg(`Are you want to delete ${state.cartData.find((item) => item.id === id).title}`);
    setDeleteId(id);
  };
  // hideModal
  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };
  // deleteModal
  const removeCartItem = () => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: deleteId });
    closeDeleteModal();
  };
  // get Total && amount
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartData]);
  // add to wishlist
  const addToWishlist = (id) => {
    const findItem = data.find((item) => item.id === id);
    dispatch({ type: "ADD_TO_WISHLIST", payload: findItem });
  };
  const removeWishlist = (id) => {
    dispatch({ type: "REMOVE_WISHLIST_ITEM", payload: id });
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
    let time = setInterval(() => {
      dispatch({ type: "HIDE_ALERT" });
    }, 3000);
    return () => clearInterval(time);
  }, [state.cartData, state.wishlistData]);
  // show cartItems
  const [isCartItemShow, setIsCartItemShow] = useState(false);
  const showCartItems = () => {
    setIsCartItemShow(true);
  };
  const hideCartItems = () => {
    setIsCartItemShow(false);
  };

  return (
    <AppContext.Provider
      value={{
        closeDeleteModal,
        deleteMsg,
        isDeleteModal,
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
