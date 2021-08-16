import React from "react";
import { useGlobalContext } from "../utils/context";

const Wishlist = () => {
  const { state } = useGlobalContext();
  const { wishlistData } = state;
  // console.log(wishlistData);
  return (
    <div className="py-20">
      <h1>Wishlist</h1>
    </div>
  );
};

export default Wishlist;
