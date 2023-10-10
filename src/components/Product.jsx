// IMAGES 
import productFirstImage from "../assets/images/product_fisrt_image.jpeg";
import productSecondImage from "../assets/images/product_second_image.jpeg";


const Product = () => {
  return (
    <div className="card">
      <div className="card_image">
        <img className="first_image" src={productFirstImage} alt="first img" />
        <img className="second_image" src={productSecondImage} alt="second img" />
      </div>
      <div className="card_features">
        <div className="content">
          <p className="card_info">Mens Away Authentic Shirt 23/24 Navy</p>
          <span className="price">A partir de 150.00€</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
