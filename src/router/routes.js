import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import SingleProduct from "../pages/SingleProduct";
import About from "../pages/About";
import Error from "../pages/Error";
const router = [
  { path: "/", exact: true, component: Home },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/shop", component: Shop },
  { path: "/cart", component: Cart },
  { path: "/wishlist", component: Wishlist },
  { path: "/singleproduct/:productid", component: SingleProduct },
  { path: "/about", component: About },
  { path: "*", component: Error },
];

export default router;
