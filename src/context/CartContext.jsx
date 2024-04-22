import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItemsFromLocalStorage);
  const [cartQty, setCartQty] = useState(1);
  // const [address,setAddress] = useState([
  //   {name:"ss"},
  //   {age:""},
  //   {state:""},
  //   {sex:""},
  // ])
  // console.log(JSON.parse(localStorage.getItem("address")));
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
    );
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    }
  }
  // practice code got inc qty
  const addQty = () => {
    setCartQty((prev) => prev + 1);
  };
  // practice code got rem qty
  const remQty = () => {
    setCartQty((prev) => (prev === 1 ? 1 : prev - 1));
  };
  // function below is for handleDecrease for d cart section
  function handleDecrease(product) {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected.quantity === 1) {
      setCart(cart.filter((oneItem) => oneItem.id !== product.id));
    } else {
      setCart(
        cart.map((dd) =>
          dd.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      );
    }
  }
  // function handleDecrease(product) {
  //     const productSelected = cart.find(
  //       (singleCartItem) => singleCartItem.id === product.id
  //     )
  //     if (productSelected.quantity === 1) {
  //       setCart(
  //         cart.map((dd) =>
  //           dd.id === product.id
  //             ? { ...productSelected, quantity: productSelected.quantity = 1 }
  //             : dd
  //         )
  //       )    } else {
  //       setCart(
  //         cart.map((dd) =>
  //           dd.id === product.id
  //             ? { ...productSelected, quantity: productSelected.quantity - 1 }
  //             : dd
  //         )
  //       )
  //     }
  //   }
  // reduce ftn for d cart section
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // localStorage.setItem("address",JSON.stringify(address))
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cart,
        setCart,
        handleIncrease,
        handleDecrease,
        totalPrice,
        cartQty,
        setCartQty,
        remQty,
        addQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
