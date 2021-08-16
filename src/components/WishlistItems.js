import React from "react";
import { useGlobalContext } from "../utils/context";

const WishlistItems = () => {
  const { state } = useGlobalContext();
  const { wishlistData } = state;
  return (
    <div>
      <h1>Wishlist items</h1>
    </div>
  );
};

export default WishlistItems;
