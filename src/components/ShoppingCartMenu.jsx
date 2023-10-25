import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// CONTEXT
import { HeaderContext } from "../utils/HeaderContext";
import { MainContext } from "../utils/MainContext";
import { Auth } from "../utils/AuthContext";
// COMPONENTS
import CartListItem from "./CartListItem";

const ShoppingCartMenu = () => {
  const { t } = useTranslation();
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
          <h2 className="menu_title">
            {t("header.shoppingCartMenu.yourShoppingCart")} ({totalCount})
          </h2>
          <div className="totals">
            <h3>
              <span className="sub_total">
                {t("header.shoppingCartMenu.subTotal")}
              </span>
              <span className="total_price">€{totalPrice} EUR</span>
            </h3>
            <p className="tax_note">{t("header.shoppingCartMenu.taxNote")}</p>
            <button
              className="cart_checkout"
              onClick={() => {
                navigate(hasToken ? "" : "/register");
              }}
            >
              {t("header.shoppingCartMenu.payOrder")}
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
            {t("header.shoppingCartMenu.payOrder")}
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
                    : "animate__animated animate__fadeOutRight animate__faster"
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
          <h2 className="menu_title">
            {t("header.shoppingCartMenu.yourCart")}
          </h2>
          <div className="menu_info">
            <h2 className="empty_message">
              {t("header.shoppingCartMenu.emptyMessage")}
            </h2>
            <Link to="/shop">
              {t("header.shoppingCartMenu.continueShopping")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartMenu;
