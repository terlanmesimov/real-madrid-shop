import { useState } from "react";

import image from "../assets/images/card_image_first.jpeg";

const CartListItem = () => {
  // Quantity
  const [productCount, setProductCount] = useState(1);
  return (
    <div className="list_item">
      <div className="product_image">
        <img src={image} alt="cart item" />
      </div>
      <div className="product_details">
        <h4 className="product_name">Men's T-shirt crest Broken White</h4>
        <div className="quantity_and_remove">
          <div className="quantity">
            <span
              className="decrement"
              onClick={() => {
                if (productCount <= 1) return;
                setProductCount(productCount - 1);
              }}
            >
              -
            </span>
            <span className="count">{productCount}</span>
            <span
              className="increment"
              onClick={() => setProductCount(productCount + 1)}
            >
              +
            </span>
          </div>
          <span className="remove_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-remove"
            >
              <path
                d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
                fill="currentColor"
              ></path>
              <path
                d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="product_price">
        <span className="price">35€</span>
      </div>
    </div>
  );
};

export default CartListItem;
