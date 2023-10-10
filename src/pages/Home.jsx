import { Link } from "react-router-dom";
// IMAGES (Hero)
import heroBg from "../assets/images/hero_bg.jpeg";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";
// IMAGES (Shopify - 1)
import cardFirstImage from "../assets/images/card_image_first.jpeg";
import cardSecondImage from "../assets/images/card_image_second.jpeg";
// IMAGES (Collections - 1)
import collectionImageOne from "../assets/images/collections_image_1.jpeg";
import collectionImageTwo from "../assets/images/collections_image_2.jpeg";
import collectionImageThree from "../assets/images/collections_image_3.jpeg";
import collectionImageFour from "../assets/images/collections_image_4.jpeg";
// IMAGES (Content - 1)
import contentImage from "../assets/images/content_section_image.jpeg";
// IMAGES (Shopify - 2)
import cardFirstImage2 from "../assets/images/card_second_image_2.jpeg";
import cardSecondImage2 from "../assets/images/card_first_image_2.jpeg";
// IMAGES (Collections - 2)
import collectionTwoImageOne from "../assets/images/collections2_image_1.jpeg";
import collectionTwoImageTwo from "../assets/images/collections2_image_2.jpeg";
import collectionTwoImageThree from "../assets/images/collections2_image_3.jpeg";
// IMAGES (Content - 2)
import contentImageTwo from "../assets/images/content_section_image2.jpeg";
// IMAGES (Shopify - 3)
import cardFirstImage3 from "../assets/images/card_first_image_3.jpeg";
import cardSecondImage3 from "../assets/images/card_second_image_3.jpeg";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";

const Home = () => {
  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <main>
        <section className="hero">
          <div className="hero_bg">
            <img src={heroBg} alt="hero bg" />
          </div>
          <div className="content">
            <h1 className="hero_heading">WE'RE PLAYING AWAY!</h1>
            <h2 className="hero_heading">SUPPORT THE TEAM WHEREVER THEY GO</h2>
            <div className="hero_btn">
              <Link to="/shop">SHOP NOW</Link>
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
        <section className="collections_section">
          <div className="container">
            <div className="row">
              <div className="title">
                <div className="title_text">
                  <h2>KITS</h2>
                </div>
                <div className="diogonal_lines deg45"></div>
              </div>
              <div className="collections d-grid">
                <div className="collection_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={collectionImageOne} alt="collection_image" />
                    </div>
                    <div className="card_info p-20-30">
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
                    <div className="card_info p-20-30">
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
                    <div className="card_info p-20-30">
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
                    <div className="card_info p-20-30">
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
        <section className="content_section bg-1">
          <div className="container">
            <div className="row">
              <div className="text_content">
                <h2>CHAMPIONS LEAGUE TRAINING COLLECTION</h2>
                <h3>TRAIN LIKE A PRO</h3>
                <Link to="/">
                  <span>SHOP NOW</span>
                </Link>
              </div>
              <div className="image_content">
                <img src={contentImage} alt="content_image" />
              </div>
            </div>
          </div>
        </section>
        <section className="shopify_section m-30">
          <div className="container">
            <div className="row">
              <div className="title">
                <div className="title_text">
                  <h2>CHAMPİONS LEAGUE TRAİNİNG</h2>
                </div>
                <div className="diogonal_lines deg45"></div>
              </div>
              <div className="cards">
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-2">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage2}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage2}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
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
                  <h2>SCORE YOUR STYLE</h2>
                </div>
                <div className="diogonal_lines deg45"></div>
              </div>
              <div className="collections d-flex">
                <div className="collection_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={collectionTwoImageOne} alt="collection_image" />
                    </div>
                    <div className="card_info p-20">
                      <h2 className="font-size-18">LIFESTYLE MAN</h2>
                      <Link to="/">
                        <span>SHOP NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="collection_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={collectionTwoImageTwo} alt="collection_image" />
                    </div>
                    <div className="card_info p-20">
                      <h2 className="font-size-18">ESSENTIALS FOR WOMEN</h2>
                      <Link to="/">
                        <span>SHOP NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="collection_item">
                  <div className="card">
                    <div className="card_image">
                      <img
                        src={collectionTwoImageThree}
                        alt="collection_image"
                      />
                    </div>
                    <div className="card_info p-20">
                      <h2 className="font-size-18">ESSENTIALS YOUTH</h2>
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
        <section className="content_section bg-2">
          <div className="container">
            <div className="row">
              <div className="text_content">
                <h3 className="m-0">GET READY FOR FALL</h3>
                <h2 className="m-20">COLLECTİON SİGNATURE</h2>
                <Link to="/">
                  <span>SHOP NOW</span>
                </Link>
              </div>
              <div className="image_content">
                <img src={contentImageTwo} alt="content_image" />
              </div>
            </div>
          </div>
        </section>
        <section className="shopify_section m-30-0-80">
          <div className="container">
            <div className="row">
              <div className="title">
                <div className="title_text">
                  <h2>COLLECTION SIGNATURE</h2>
                </div>
                <div className="diogonal_lines deg45"></div>
              </div>
              <div className="cards">
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
                <div className="card mw-1">
                  <div className="card_image">
                    <img
                      className="first_image"
                      src={cardFirstImage3}
                      alt="first img"
                    />
                    <img
                      className="second_image"
                      src={cardSecondImage3}
                      alt="second img"
                    />
                  </div>
                  <div className="card_features">
                    <div className="content">
                      <p className="card_info">
                        Mens Away Authentic Shirt 23/24 Navy
                      </p>
                      <span className="price">150.00€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
