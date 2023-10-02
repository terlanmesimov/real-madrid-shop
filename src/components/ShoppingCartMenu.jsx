import { Link } from "react-router-dom";

const ShoppingCartMenu = ({ openCart, setOpenCart, animate, setAnimate }) => {
  return (
    <div className={animate ? "context open" : "context close"}>
      <div
        className={
          animate
            ? "menu animate__animated animate__fadeInRight animate__faster"
            : "menu animate__animated animate__fadeOutRight animate__faster"
        }
      >
        <span
          onClick={() => {
            setAnimate(!animate);
            setTimeout(() => {
              setOpenCart(!openCart);
            }, 500);
          }}
          class="menu_close"
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
          <li className="product"></li>
          <li className="product"></li>
        </ul>
      </div>
      <div
        className={
          animate
            ? "empty_menu animate__animated animate__fadeInRight animate__faster"
            : "empty_menu animate__animated animate__fadeOutRight animate__faster"
        }
      >
        <span
          onClick={() => {
            setAnimate(!animate);
            setTimeout(() => {
              setOpenCart(!openCart);
            }, 500);
          }}
          class="menu_close"
        >
          ✕
        </span>
        <h2 className="menu_title">Your Cart</h2>
        <div className="menu_info">
          <h2 className="empty_message">Your shopping cart is empty</h2>
          <Link to="/">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartMenu;
