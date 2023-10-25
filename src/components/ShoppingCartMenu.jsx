import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// CONTEXT
import { HeaderContext } from "../utils/HeaderContext";
import { MainContext } from "../utils/MainContext";
import { Auth } from "../utils/AuthContext";
// COMPONENTS
import CartListItem from "./CartListItem";

const ShoppingCartMenu = () => {
  const navigate = useNavigate();
  const { openCart, setOpenCart, animateCartMenu, setAnimateCartMenu } =
    useContext(HeaderContext);
  const { hasToken } = useContext(Auth);

  const {
    cartListData,
    setCartListData,
    totalCount,
    setTotalCount,
    totalPrice,
    setTotalPrice,
  } = useContext(MainContext);
  useEffect(() => {
    if (openCart === true) {
      document.body.style.overflow = "auto";
    }
  }, [openCart]);

  useEffect(() => {
    const updatedTotalPrice = cartListData.reduce(
      (summary, current) => summary + current.quantity * current.price,
      0
    );
    setTotalPrice(updatedTotalPrice);
  }, [cartListData]);

  return (
    <div className={`cart_context ${animateCartMenu ? "open" : "close"}`}>
      <div
        className="overlay"
        onClick={() => {
          setAnimateCartMenu(!animateCartMenu);
          setTimeout(() => {
            setOpenCart(!openCart);
          }, 500);
        }}
      ></div>
      {cartListData.length !== 0 && (
        <div
          className={`menu animate__animated animate__faster ${
            animateCartMenu ? "animate__fadeInRight" : "animate__fadeOutRight"
          }`}
        >
          <span
            onClick={() => {
              setAnimateCartMenu(!animateCartMenu);
              setTimeout(() => {
                setOpenCart(!openCart);
              }, 500);
            }}
            className="menu_close"
          >
            ✕
          </span>
          <h2 className="menu_title">Your shopping cart ({totalCount})</h2>
          <div className="totals">
            <h3>
              <span className="sub_total">Subtotal</span>
              <span className="total_price">€{totalPrice} EUR</span>
            </h3>
            <p className="tax_note">
              Tax included and shipping costs are calculated on the payment
              screen.
            </p>
            <button
              className="cart_checkout"
              onClick={() => {
                navigate(hasToken ? "" : "/register");
              }}
            >
              Pay order
            </button>
          </div>
          <ul className="product_list">
            {cartListData.map((item) => {
              return <CartListItem key={item.id} itemData={item} />;
            })}
          </ul>
          <div
            className="cart_checkout"
            onClick={() => {
              navigate(hasToken ? "" : "/register");
            }}
          >
            Pay order
          </div>
        </div>
      )}
      {cartListData.length === 0 && (
        <div
          className={
            animateCartMenu
              ? `empty_menu ${
                  openCart
                    ? ""
                    : "animate__animated animate__fadeInRight animate__faster"
                }`
              : "empty_menu animate__animated animate__fadeOutRight animate__faster"
          }
        >
          <span
            onClick={() => {
              setAnimateCartMenu(!animateCartMenu);
              setTimeout(() => {
                setOpenCart(!openCart);
              }, 500);
            }}
            className="menu_close"
          >
            ✕
          </span>
          <h2 className="menu_title">Your Cart</h2>
          <div className="menu_info">
            <h2 className="empty_message">Your shopping cart is empty</h2>
            <Link to="/shop">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartMenu;
