import { Link } from "react-router-dom";
import { useState } from "react";
// CONTEXT
import { HeaderContextProvider } from "../utils/HeaderContext";
// COMPONENTS
import AnnoncementBar from "../components/AnnoncementBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
// IMAGES
import cardFirstImage from "../assets/images/card_image_first.jpeg";
import cardSecondImage from "../assets/images/card_image_second.jpeg";

const ProductDetails = () => {
  // Sizes
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  // Quantity
  const [productCount, setProductCount] = useState(1);
  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <section className="product_details">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <Link to="/">HOME /</Link>
              <Link to="/shop">ALL /</Link>
              <Link> MEN'S HOODED SWEATSHIRT TEXT GREY</Link>
            </div>
            <div className="product">
              <div className="media">
                <div className="slide_track"></div>
                <div className="product_image"></div>
              </div>
              <div className="product_info">
                <h2 className="product_title">Men's Hoodie Grey/Purple Text</h2>
                <p className="product_price">40.00€</p>
                <div className="size_content">
                  <span className="size_title">SELECT SIZE</span>
                  <div className="sizes">
                    {sizes.map((size) => {
                      return (
                        <span
                          key={size}
                          className={`size ${
                            selectedSize === size ? "active" : ""
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="quantity_content">
                  <span className="title">QUANTITY</span>
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
                </div>
                <button className="add_to_cart">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shopify_section">
        <div className="container">
          <div className="row">
            <div className="title">
              <div className="title_text">
                <h2 className="f-size-35">PRODUCT DESCRIPTION</h2>
              </div>
              <div className="diogonal_lines deg45"></div>
            </div>
            <div className="text">
              <p>
                We don't give it a second thought and simply want it to be
                authentic. Two words that demonstrate a 120-year-old passion.
                Sweatshirt Real Madrid.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="shopify_section">
        <div className="container">
          <div className="row">
            <div className="title">
              <div className="title_text">
                <h2 className="f-size-35">YOU MIGHT ALSO LIKE</h2>
              </div>
              <div className="diogonal_lines deg45"></div>
            </div>
            <div className="cards">
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
              <div className="card mw-1">
                <div className="card_image">
                  <img
                    className="first_image"
                    src={cardFirstImage}
                    alt="first img"
                  />
                  <img
                    className="second_image"
                    src={cardSecondImage}
                    alt="second img"
                  />
                </div>
                <div className="card_features">
                  <div className="content">
                    <p className="card_info">
                      Mens Away Authentic Shirt 23/24 Navy
                    </p>
                    <span className="price">A partir de 150.00€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
