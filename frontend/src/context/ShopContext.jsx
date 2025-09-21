
import { createContext } from "react";
import allProducts from "../data/allProducts.js";
export const ShopContext  =createContext(null);

const ShopProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={{allProducts}}>
      {children}
    </ShopContext.Provider>
  ) 
};

export default ShopProvider;

