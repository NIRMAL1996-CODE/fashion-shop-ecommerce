
import { createContext, useState } from "react";
import allProducts from "../data/allProducts.js";

export const ShopContext  =createContext(null);

const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // --- ADD TO CART FUNCTION ---
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const prevQty = prev[itemId] || 0; // get previous quantity or 0
      return { ...prev, [itemId]: prevQty + 1 }; // add 1
    });
  };

  // --- REMOVE FROM CART FUNCTION ---
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const prevQty = prev[itemId] || 0;
      if (prevQty <= 1) {
        const newCart = { ...prev };
        delete newCart[itemId]; // remove completely if 0
        return newCart;
      }
      return { ...prev, [itemId]: prevQty - 1 }; // subtract 1
    });
  };

  // --- TOTAL ITEMS COUNT ---
  const getTotalCartItems = () => {
    let total = 0;
    for (const id in cartItems) {
      total += cartItems[id];
    }
    return total;
  };

  // --- TOTAL CART AMOUNT ---
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const id in cartItems) {
      const product = allProducts.find((p) => p.id === Number(id));
      if (product) totalAmount += product.new_price * cartItems[id];
    }
    return totalAmount;
  };
  return (
    <ShopContext.Provider value={{ 
      allProducts ,
      cartItems,
      addToCart, 
      removeFromCart, 
      getTotalCartItems,
      getTotalCartAmount
      }}>
      {children}
    </ShopContext.Provider>
  ) 
};

export default ShopProvider;

