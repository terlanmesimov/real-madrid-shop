import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// CONTEXT
import { HeaderContext } from "../utils/HeaderContext";
import { MainContext } from "../utils/MainContext";

const ShoppingCart = () => {
  const {
    openCart,
    setOpenCart,
    animateCartMenu,
    setAnimateCartMenu,
    openMenu,
    setOpenMenu,
    animateSubMenu,
    setAnimateSubMenu,
  } = useContext(HeaderContext);
  const { cartListData, setCartListData, totalCount, setTotalCount } =
    useContext(MainContext);

  useEffect(() => {
    const count = cartListData.reduce(
      (summary, current) => summary + current.quantity,
      0
    );
    setTotalCount(count);
  }, [cartListData]);
  return (
    <>
      <Link
        onClick={() => {
          if (openMenu === false) {
            setOpenCart(!openCart);
            setAnimateCartMenu(!animateCartMenu);
          } else if (openMenu === true) {
            setAnimateSubMenu(!animateSubMenu);
            setOpenMenu(!openMenu);
            setOpenCart(!openCart);
            setAnimateCartMenu(!animateCartMenu);
          }
          return;
        }}
        className="cart"
      >
        <div className="cart_icon">
          <svg
            className="icon icon-cart-empty"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="#636467"
          >
            <path
              d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
              fill="#636467"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="product_count">
          <span>{totalCount}</span>
        </div>
      </Link>
    </>
  );
};

export default ShoppingCart;
