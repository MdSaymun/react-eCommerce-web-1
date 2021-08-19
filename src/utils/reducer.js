//localStorage
export const initialState = {
  cartData: [],
  wishlistData: [],
  amount: 0,
  total: 0,
  alertCom: { alrtMsg: "", showAlrt: false, alertType: "" },
};
export const initializer = (initialValue = initialState) => JSON.parse(localStorage.getItem("localState")) || initialValue;

// reducer
export const reducer = (state, action) => {
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
    const newItem = state.wishlistData.filter((item) => item.id !== action.payload);
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
  if (action.type === "SINGLE_ADD_TO_CART") {
    const newItem = [
      ...state.cartData.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + +action.value };
        }
        return item;
      }),
    ];
    const addItem = state.cartData.find((item) => item.id === action.payload.id) ? newItem : [...state.cartData, action.payload];
    const newAlert = !state.cartData.find((item) => item.id === action.payload.id);
    return {
      ...state,
      cartData: addItem,
      alertCom: newAlert
        ? { alrtMsg: "one Item added to cart", showAlrt: true, alertType: "success" }
        : { alrtMsg: `${action.value} x items have been added to your cart`, showAlrt: true, alertType: "success" },
    };
    // return { ...state };
  }
  throw new Error("No Action type is match");
};
