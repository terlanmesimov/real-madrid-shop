import { createContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({children}) => {
  const globalStates = {};
  return (
    <MainContext.Provider value={globalStates}>
        {children}
    </MainContext.Provider>
  );
};
