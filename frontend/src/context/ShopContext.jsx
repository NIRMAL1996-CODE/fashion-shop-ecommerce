import { createContext, useState } from "react";
import allProducts from "../data/allProducts.js";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // array of {id, quantity}

  // --- ADD TO CART FUNCTION ---
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const index = prev.findIndex((i) => i.id === itemId);
      if (index >= 0) {
        // item exists, increase quantity
        const newCart = [...prev];
        newCart[index].quantity += 1;
        return newCart;
      } else {
        // item not in cart, add new
        return [...prev, { id: itemId, quantity: 1 }];
      }
    });
  };

  // --- REMOVE FROM CART FUNCTION ---
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // --- TOTAL ITEMS COUNT ---
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // --- TOTAL CART AMOUNT ---
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const product = allProducts.find((p) => p.id === item.id); // fix variable name
      return total + (product ? product.new_price * item.quantity : 0);
    }, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
