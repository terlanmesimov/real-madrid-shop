import { Link } from "react-router-dom";
import headingImage from "../assets/images/RealMadrid_Official_Online_Store_COLOR_blacktext_510x_37d3cb70-f682-4b8a-83d4-f819439ba1e9_150x.avif";
// MUI
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="row">
          <div className="heading_logo">
            <Link to="/">
              <img src={headingImage} alt="logo" />
            </Link>
          </div>
          <div className="search_bar">
            <form className="search">
              <input
                type="text"
                className="search_input"
                placeholder="Search"
              />
              <button className="search_btn">
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className="header-top-right">
            <div className="language_selector"></div>
            <div className="cart_and_user"></div>
          </div>
        </div>
      </div>
      <nav className="navbar"></nav>
    </header>
  );
};

export default Header;
