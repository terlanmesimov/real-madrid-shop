import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// IMAGES && ICONS
import headingImage from "../assets/images/RealMadrid_Official_Online_Store_COLOR_blacktext_510x_37d3cb70-f682-4b8a-83d4-f819439ba1e9_150x.avif";
// Components
import SearchBar from "./SearchBar";
import UserSelectorOptions from "./SelectorsAndMenus";
import Navbar from "./Navbar";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = currentScrollPos < prevScrollPos;
      if (window.scrollY > 200 && document.body.style.overflow !== "hidden") {
        if (scrollingUp) {
          setIsHeaderOpen(true);
        } else {
          setIsHeaderOpen(false);
        }
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header className={`header ${isHeaderOpen ? "open" : "closed"}`}>
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
      <div className="header_bottom">
        <SearchBar />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
