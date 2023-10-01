const ShoppingCartMenu = ({ openCart, setOpenCart }) => {
  return (
    <div className="context">
      <div className="menu">
        <span onClick={() => setOpenCart(!openCart)} class="menu_close">
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
    </div>
  );
};

export default ShoppingCartMenu;
