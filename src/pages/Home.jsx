import { Link } from "react-router-dom";
// IMAGES
import heroBg from "../assets/images/hero_bg.jpeg";
import cardFirstImage from "../assets/images/card_image_first.jpeg";
import cardSecondImage from "../assets/images/card_image_second.jpeg";

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
                  <div className="first_image">
                    <img src={cardFirstImage} alt="first img" />
                  </div>
                  <div className="second_image">
                    <img src={cardSecondImage} alt="second img" />
                  </div>
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
    </>
  );
};

export default Home;
