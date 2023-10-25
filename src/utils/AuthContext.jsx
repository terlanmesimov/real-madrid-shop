import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Auth = createContext();

export const AuthContextProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(true);
  const [userData, setUserData] = useState({});
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token !== null) {
      await axios
        .post(process.env.REACT_APP_CHECK_LOGIN, { token })
        .then((response) => {
          setHasToken(true);
          setUserData(response.data);
        })
        .catch((error) => {
          console.warn(error);
          setHasToken(false);
        });
    } else {
      setHasToken(false);
    }
  };

  const globalStates = {
    newUserData,
    setNewUserData,
    hasToken,
    setHasToken,
    userData,
    setUserData,
  };
  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
