import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// PROVIDER
import { HeaderContext } from "../utils/HeaderContext";
// COMPONENTS
import CartListItem from "./CartListItem";

const ShoppingCartMenu = () => {
  const { openCart, setOpenCart, animateCartMenu, setAnimateCartMenu } =
    useContext(HeaderContext);

  useEffect(() => {
    if (openCart === true) {
      document.body.style.overflow = "auto";
    }
  }, [openCart]);

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
        <h2 className="menu_title">Your shopping cart (17)</h2>
        <div className="totals">
          <h3>
            <span className="sub_total">Subtotal</span>
            <span className="total_price">€2,550.00 EUR</span>
          </h3>
          <p className="tax_note">
            Tax included and shipping costs are calculated on the payment
            screen.
          </p>
          <button className="cart_checkout">Pay order</button>
        </div>
        <ul className="product_list">
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
        </ul>
        <div className="cart_checkout">Pay order</div>
      </div>
      <div
        className={
          animateCartMenu
            ? "empty_menu animate__animated animate__fadeInRight animate__faster"
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
    </div>
  );
};

export default ShoppingCartMenu;
