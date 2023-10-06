import { Link } from "react-router-dom";
// IMAGES (Hero)
import heroBg from "../assets/images/hero_bg.jpeg";
// IMAGES (Shopify)
import cardFirstImage from "../assets/images/card_image_first.jpeg";
import cardSecondImage from "../assets/images/card_image_second.jpeg";
// IMAGES (Collections)
import collectionImageOne from "../assets/images/collections_image_1.jpeg";
import collectionImageTwo from "../assets/images/collections_image_2.jpeg";
import collectionImageThree from "../assets/images/collections_image_3.jpeg";
import collectionImageFour from "../assets/images/collections_image_4.jpeg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_bg">
          <img src={heroBg} alt="hero bg" />
        </div>
        <div className="content">
          <h1 className="hero_heading">WE'RE PLAYING AWAY!</h1>
          <h2 className="hero_heading">SUPPORT THE TEAM WHEREVER THEY GO</h2>
          <div className="hero_btn">
            <Link to="*">SHOP NOW</Link>
          </div>
        </div>
      </section>
      <section className="shopify_section">
        <div className="container">
          <div className="row">
            <div className="title">
              <div className="title_text">
                <h2>2ND AND THIRD KITS</h2>
              </div>
              <div className="diogonal_lines deg45"></div>
            </div>
            <div className="cards">
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
              <div className="card">
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
      <section className="collections_section">
        <div className="container">
          <div className="row">
            <div className="title">
              <div className="title_text">
                <h2>KITS</h2>
              </div>
              <div className="diogonal_lines deg45"></div>
            </div>
            <div className="collections">
              <div className="collection_item">
                <div className="card">
                  <div className="card_image">
                    <img src={collectionImageOne} alt="collection_image" />
                  </div>
                  <div className="card_info">
                    <h2>23/24 REAL MADRID HOME KITS</h2>
                    <Link to="/">
                      <span>SHOP NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="collection_item">
                <div className="card">
                  <div className="card_image">
                    <img src={collectionImageTwo} alt="collection_image" />
                  </div>
                  <div className="card_info">
                    <h2>23/24 REAL MADRID AWAY KITS</h2>
                    <Link to="/">
                      <span>SHOP NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="collection_item">
                <div className="card">
                  <div className="card_image">
                    <img src={collectionImageThree} alt="collection_image" />
                  </div>
                  <div className="card_info">
                    <h2>THIRD KIT REAL MADRID 23/24</h2>
                    <Link to="/">
                      <span>SHOP NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="collection_item">
                <div className="card">
                  <div className="card_image">
                    <img src={collectionImageFour} alt="collection_image" />
                  </div>
                  <div className="card_info">
                    <h2>23/24 REAL MADRID GOALKEEPER KITS</h2>
                    <Link to="/">
                      <span>SHOP NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
