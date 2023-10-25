import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// CONTEXT
import { MainContext } from "../utils/MainContext";

const CartListItem = ({ itemData }) => {
  // Quantity
  const [productCount, setProductCount] = useState(itemData.quantity);
  const { cartListData, setCartListData } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    const updatedData = {
      ...itemData,
      quantity: productCount,
    };
    const updatedArray = cartListData.map((item) => {
      if (item.id === updatedData.id) {
        return updatedData;
      } else {
        return item;
      }
    });
    setCartListData(updatedArray);
  }, [productCount]);

  const removeProduct = () => {
    const updatedArray = cartListData.filter(
      (product) => product.id !== itemData.id
    );
    setCartListData(updatedArray);
  };

  return (
    <div className="list_item">
      <div className="product_image">
        <img
          src={`${process.env.REACT_APP_DOMAIN}/${itemData.productImage}`}
          alt="cart item"
        />
      </div>
      <div className="product_details">
        <h4
          className="product_name"
          onClick={() => {
            navigate(`/product-details/${itemData.id}`);
            window.location.reload();
          }}
        >
          {itemData.name}
        </h4>
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
          <span
            id={itemData.id}
            onClick={removeProduct}
            className="remove_icon"
          >
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
        <span className="price">{itemData.price * productCount}€</span>
      </div>
    </div>
  );
};

export default CartListItem;
