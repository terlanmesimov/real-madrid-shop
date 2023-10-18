import axios from "axios";
import { useEffect, useState } from "react";

const ShopifySection = ({ title, id , titleFontSize}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    await axios
      .get(process.env.REACT_APP_ALL_PRODUCTS)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <section
      className={`shopify_section ${id === "two" ? "m-30" : ""}${
        id === "three" ? "m-30-0-80" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="title">
            <div className="title_text">
              <h2 className={titleFontSize ? "f-size-35" : ""}>{title}</h2>
            </div>
            <div className="diogonal_lines deg45"></div>
          </div>
          <div className="cards">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className={`card ${id === "one" ? "mw-1" : ""}${
                    id === "two" ? "mw-2" : ""
                  }${id === "three" ? "mw-1" : ""}`}
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
                      <span className="price">
                        {`${id === "one" ? "A partir de" : ""} ${
                          product.price
                        }€`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifySection;
