import React from "react";
import Product from "./Product";
import Categories from "./Categories";
import ShoppingCart from "./CartContainer";
import { useGlobalContext } from "./context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Navbar from "./Navbar";
import Error from "./Error";

const App = () => {
  const { cart } = useGlobalContext();
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <section className="menu">
            <div className="title">
              <h2>Our product</h2>
              <div className="underline"></div>
              <Categories />
              {/* {cart.length === 0 ? <Product /> : <ShoppingCart />} */}
              <Product />
            </div>
          </section>
        </Route>
        <Route path="/shopping_cart">
          <ShoppingCart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
