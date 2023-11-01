import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../utils/MainContext";
import { useTranslation } from "react-i18next";

const ShopifySection = () => {
  const { products } = useContext(MainContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="shopify_section">
      <div className="container">
        <div className="row">
          <div className="title">
            <div className="title_text">
              <h2>{t("productDetailsPage.shopifySection.title")}</h2>
            </div>
            <div className="diogonal_lines deg45"></div>
          </div>
          <div className="cards">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="card"
                  onClick={() => {
                    navigate(`/product-details/${product.id}`);
                    window.location.reload();
                  }}
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
                        {"A partir de"} {product.price}€
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
