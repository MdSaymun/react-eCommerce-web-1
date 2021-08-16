import React from "react";
import { useGlobalContext } from "./utils/context";
import Loading from "./components/Loading";
import "./styles/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "./router/routes";
import NavbarCom from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Alert from "./components/Alert";
import CartItems from "./components/CartItems";
import DeleteModal from "./components/DeleteModal";
const App = () => {
  const { loading, state, isDeleteModal } = useGlobalContext();
  const { alertCom, cartData } = state;

  if (loading) {
    return (
      <div>
        <h1 className="text-center">
          <Loading />
        </h1>
      </div>
    );
  }

  return (
    <Router>
      <NavbarCom />
      {isDeleteModal && <DeleteModal />}
      {alertCom.showAlrt && <Alert />}
      {cartData.length > 0 && <CartItems />}
      <Sidebar />
      <Switch>
        {router.map((route, i) => {
          return <Route key={i} exact={route.exact} path={route.path} component={route.component} />;
        })}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
