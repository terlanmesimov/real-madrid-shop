import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => navigate(`/product_details/${product.id}`)}
    >
      <div className="card_image">
        <img
          className="first_image"
          src={`${process.env.REACT_APP_DOMAIN}/${product.productImage}`}
          alt="first img"
        />
        <img
          className="second_image"
          src={`${process.env.REACT_APP_DOMAIN}/${product.productImage}`}
          alt="second img"
        />
      </div>
      <div className="card_features">
        <div className="content">
          <p className="card_info">{product.name}</p>
          <span className="price">{product.price}€</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
