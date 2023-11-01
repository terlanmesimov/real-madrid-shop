import { Link } from "react-router-dom";
// IMAGES (Collections - 1)
import collectionImageOne from "../../assets/images/collections_image_1.jpeg";
import collectionImageTwo from "../../assets/images/collections_image_2.jpeg";
import collectionImageThree from "../../assets/images/collections_image_3.jpeg";
import collectionImageFour from "../../assets/images/collections_image_4.jpeg";
// IMAGES (Collections - 2)
import collectionTwoImageOne from "../../assets/images/collections2_image_1.jpeg";
import collectionTwoImageTwo from "../../assets/images/collections2_image_2.jpeg";
import collectionTwoImageThree from "../../assets/images/collections2_image_3.jpeg";
import { useTranslation } from "react-i18next";

const CollectionsSection = ({ title, id, collections }) => {
  const { t } = useTranslation();
  return (
    <section className="collections_section">
      <div className="container">
        <div className="row">
          <div className="title">
            <div className="title_text">
              <h2>{title}</h2>
            </div>
            <div className="diogonal_lines deg45"></div>
          </div>
          <div className={`collections ${id === "one" ? "d-grid" : "d-flex"}`}>
            <div className="collection_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src={
                      id === "one" ? collectionImageOne : collectionTwoImageOne
                    }
                    alt="collection_image"
                  />
                </div>
                <div
                  className={`card_info ${id === "one" ? "p-20-30" : "p-20"}`}
                >
                  <h2>{collections[0]}</h2>
                  <Link to="/">
                    <span>{t("shopNow")}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="collection_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src={
                      id === "one" ? collectionImageTwo : collectionTwoImageTwo
                    }
                    alt="collection_image"
                  />
                </div>
                <div
                  className={`card_info ${id === "one" ? "p-20-30" : "p-20"}`}
                >
                  <h2>{collections[1]}</h2>
                  <Link to="/">
                    <span>{t("shopNow")}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="collection_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src={
                      id === "one"
                        ? collectionImageThree
                        : collectionTwoImageThree
                    }
                    alt="collection_image"
                  />
                </div>
                <div
                  className={`card_info ${id === "one" ? "p-20-30" : "p-20"}`}
                >
                  <h2>{collections[2]}</h2>
                  <Link to="/">
                    <span>{t("shopNow")}</span>
                  </Link>
                </div>
              </div>
            </div>
            {id === "one" && (
              <div className="collection_item">
                <div className="card">
                  <div className="card_image">
                    <img src={collectionImageFour} alt="collection_image" />
                  </div>
                  <div
                    className={`card_info ${id === "one" ? "p-20-30" : "p-20"}`}
                  >
                    <h2>{collections[3]}</h2>
                    <Link to="/">
                      <span>{t("shopNow")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
