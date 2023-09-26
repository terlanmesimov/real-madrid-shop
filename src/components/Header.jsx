import { Link } from "react-router-dom";
// IMAGES && ICONS
import headingImage from "../assets/images/RealMadrid_Official_Online_Store_COLOR_blacktext_510x_37d3cb70-f682-4b8a-83d4-f819439ba1e9_150x.avif";
// Components
import SearchBar from "./SearchBar";
import UserSelectorOptions from "./UserSelectorOptions";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div className="row">
          <div className="heading_logo">
            <Link to="/">
              <img src={headingImage} alt="logo" />
            </Link>
          </div>
          <SearchBar />
          <UserSelectorOptions />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
