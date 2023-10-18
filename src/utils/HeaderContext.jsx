import { createContext, useEffect, useState } from "react";
export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  // Shopping Cart Open Close
  const [openCart, setOpenCart] = useState(false);
  const [animateCartMenu, setAnimateCartMenu] = useState(false);
  // Header Sub Menu Open Close
  const [openMenu, setOpenMenu] = useState(false);
  const [animateSubMenu, setAnimateSubMenu] = useState(false);
  // Header Animation On Scroll
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
    animateCartMenu,
    setAnimateCartMenu,
    openMenu,
    setOpenMenu,
    animateSubMenu,
    setAnimateSubMenu,
    isHeaderOpen,
  };
  return (
    <HeaderContext.Provider value={globalStates}>
      {children}
    </HeaderContext.Provider>
  );
};
