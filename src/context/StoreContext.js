import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";


const StoreContext = createContext() ;

const StoreContextProvider = ({children}) =>{
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    
  };



  const contextValue = {
    cartItems,
    food_list,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export function ContextState(){
  return useContext(StoreContext);
}

export default StoreContextProvider ;