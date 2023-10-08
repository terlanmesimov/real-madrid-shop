import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = currentScrollPos < prevScrollPos;
      if (window.scrollY > 200 && document.body.style.overflow !== "hidden") {
        if (scrollingUp) {
          setIsHeaderOpen(true);
        } else {
          setIsHeaderOpen(false);
        }
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const globalStates = {
    openCart,
    setOpenCart,
    animate,
    setAnimate,
    isHeaderOpen,
  };
  return (
    <HeaderContext.Provider value={globalStates}>
      {children}
    </HeaderContext.Provider>
  );
};
