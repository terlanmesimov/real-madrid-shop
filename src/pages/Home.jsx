import { Link } from "react-router-dom";
// IMAGES
import heroBg from "../assets/images/hero_bg.jpeg";

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
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
