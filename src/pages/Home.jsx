import { Link } from "react-router-dom";
// COMPONENTS
import Footer from "../components/Footer";
import Header from "../components/Header";
// IMAGES
import heroBg from "../assets/images/hero_bg.jpeg"

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
    </>
  );
};

export default Home;
