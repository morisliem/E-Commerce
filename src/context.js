import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import productItem from "./list";
import pictures from "./listImg";

const AppContext = React.createContext();

const allCategories = [
  "Show all",
  ...new Set(productItem.map((item) => item.category)),
];

const initiateState = {
  loading: true,
  product: productItem,
  category: allCategories,
  image: pictures,
  index: 0,
  cart: [],
  total: 0,
  amount: 0,
  alert: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initiateState);

  const filterItem = (id) => {
    dispatch({ type: "FILTER_ITEM", payload: { id, pictures } });
  };

  const filterCategory = (category) => {
    dispatch({ type: "FILTER_CATEGORY", payload: { category, productItem } });
  };

  const setPicture = (index, type) => {
    dispatch({ type: "SET_PICTURE", payload: { index, type } });
  };

  const loading = (type) => {
    dispatch({ type: "LOADING", payload: type });
  };

  const addToCart = (price, name, img, id) => {
    dispatch({ type: "ADD_TO_CART", payload: { price, name, img, id } });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  const setShoppingCartStatus = () => {
    dispatch({ type: "SHOPPING_CART_STATUS" });
  };

  const setHomePageStatus = () => {
    dispatch({ type: "HOMEPAGE_STATUS" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  useEffect(() => {
    const lastIndex = state.image.length - 1;
    if (state.index < 0) {
      setPicture(lastIndex, "set");
    }
    if (state.index > lastIndex) {
      setPicture(0, "set");
    }
  }, [state.index, state.image]);

  useEffect(() => {
    let slider = setInterval(() => {
      setPicture(state.index + 1, "next");
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [state.index]);

  useEffect(() => {
    setTimeout(() => {
      loading(false);
    }, 1000);
  }, [state.loading]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        filterItem,
        filterCategory,
        setPicture,
        addToCart,
        remove,
        clearCart,
        toggleAmount,
        setShoppingCartStatus,
        setHomePageStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
