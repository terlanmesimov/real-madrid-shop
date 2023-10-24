import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const [cartListData, setCartListData] = useState(cartData ? cartData : []);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartListData));
  }, [cartListData]);

  const globalStates = {
    cartListData,
    setCartListData,
    totalCount,
    setTotalCount,
    totalPrice,
    setTotalPrice,
  };

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};
