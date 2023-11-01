import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const lng = localStorage.getItem("i18nextLng");
  const [currentLang, setCurrentLang] = useState(lng);

  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const [cartListData, setCartListData] = useState(cartData ? cartData : []);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartListData));
  }, [cartListData]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    await axios
      .get(process.env.REACT_APP_ALL_PRODUCTS)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const globalStates = {
    cartListData,
    setCartListData,
    totalCount,
    setTotalCount,
    totalPrice,
    setTotalPrice,
    currentLang,
    setCurrentLang,
    products,
  };

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};
