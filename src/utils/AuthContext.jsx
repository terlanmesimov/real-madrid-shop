import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export const AuthContextProvider = ({ children }) => {
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const globalStates = { newUserData, setNewUserData };
  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
