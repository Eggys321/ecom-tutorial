import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(cartItemsFromLocalStorage);
  let handleAddToCart = (product) => {
    const productSelected = cart.find(
      (singleCart) => singleCart.id === product.id
    );
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem.id === product.id
            ? {
                ...productSelected,
                quantity: productSelected.quantity + 1,
              }
            : oneItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // function below is for handleIncrease for d cart section
  function handleIncrease(product) {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      )
    }
  }
// function below is for handleDecrease for d cart section
function handleDecrease(product) {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected.quantity === 1) {
      setCart(cart.filter((oneItem) => oneItem.id !== product.id))
    } else {
      setCart(
        cart.map((dd) =>
          dd.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      )
    }
  }
   // reduce ftn for d cart section
   const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  )
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={{
    handleAddToCart,
    cart,
    setCart,
    handleIncrease,
    handleDecrease,
    totalPrice
    }}>
        {children}

  </CartContext.Provider>;
};

export default CartContext;
