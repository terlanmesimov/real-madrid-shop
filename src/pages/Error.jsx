import { useEffect } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";
// IMAGES
import cardFirstImage from "../assets/images/card_image_first.jpeg";
import cardSecondImage from "../assets/images/card_image_second.jpeg";
const Error = () => {
  useEffect(() => {
    document.title = "404 Not found - Real Madrid CF | EU";
  }, []);

  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <div className="error">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <Link to="/">HOME /</Link>
              <Link> 404 NOT FOUND</Link>
            </div>
            <div className="error_message">
              <h2>404 Page not found</h2>
              <p>
                The page you requested does not exist. Click{" "}
                <Link to="/shop">here</Link> to continue shopping.
              </p>
            </div>
          </div>
        </div>
      </div>
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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
              <div className="card mw-3 m-20">
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

export default Error;
