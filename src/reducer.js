const reducer = (state, action) => {
  if (action.type === "FILTER_ITEM") {
    let specific_picture = action.payload.pictures.filter(
      (item) => item.id === action.payload.id
    );
    return {
      ...state,
      product: state.product.filter((item) => item.id === action.payload.id),
      image: specific_picture[0].image,
      loading: true,
    };
  }

  if (action.type === "FILTER_CATEGORY") {
    if (action.payload.category === "Show all") {
      return {
        ...state,
        product: action.payload.productItem,
      };
    } else if (action.payload.category === "Shopping cart") {
      return {
        ...state,
        product: [],
      };
    } else {
      const newProduct = action.payload.productItem.filter(
        (item) => item.category === action.payload.category
      );
      return {
        ...state,
        product: newProduct,
      };
    }
  }

  if (action.type === "SET_PICTURE") {
    if (action.payload.type === "next") {
      return {
        ...state,
        index: state.index + 1,
      };
    } else if (action.payload.type === "previous") {
      return {
        ...state,
        index: state.index - 1,
      };
    } else {
      return {
        ...state,
        index: action.payload.index,
      };
    }
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (action.type === "ADD_TO_CART") {
    let con = false;
    let newCart = {
      img: action.payload.img,
      price: action.payload.price,
      name: action.payload.name,
      id: action.payload.id,
      amount: 1,
    };

    for (var i of state.cart) {
      if (i.id === action.payload.id) {
        con = true;
        break;
      }
    }

    if (con === true) {
      return {
        ...state,
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, newCart],
      };
    }
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount != 0);
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = amount * price;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      total,
      amount,
    };
  }

  if (action.type === "HOMEPAGE_STATUS") {
    return {
      ...state,
      homepage_status: false,
    };
  }

  if (action.type === "SHOPPING_CART_STATUS") {
    return {
      ...state,
      shopping_cart_status: false,
    };
  }
};

export default reducer;
