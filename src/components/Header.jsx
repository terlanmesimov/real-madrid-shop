import { Link } from "react-router-dom";
import { useContext } from "react";
// IMAGES && ICONS
import headingImage from "../assets/images/RealMadrid_Official_Online_Store_COLOR_blacktext_510x_37d3cb70-f682-4b8a-83d4-f819439ba1e9_150x.avif";
// COMPONENTS
import SearchBar from "./SearchBar";
import SelectorsAndMenus from "./SelectorsAndMenus";
import Navbar from "./Navbar";
import ShoppingCartMenu from "./ShoppingCartMenu";
// CONTEXT
import { HeaderContext } from "../utils/HeaderContext";

const Header = () => {
  const { isHeaderOpen, openCart } = useContext(HeaderContext);
  return (
    <>
      <header className={`header ${isHeaderOpen ? "open" : "closed"}`}>
        <div className="header_top">
          <div className="row">
            <div className="heading_logo">
              <Link to="/">
                <img src={headingImage} alt="logo" />
              </Link>
            </div>
            <SearchBar />
            <SelectorsAndMenus />
          </div>
        </div>
        <div className="header_bottom">
          <SearchBar />
        </div>
        <Navbar />
      </header>
      {openCart && <ShoppingCartMenu />}
    </>
  );
};

export default Header;
