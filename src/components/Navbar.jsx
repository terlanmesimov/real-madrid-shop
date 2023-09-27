import { NavLink, Link } from "react-router-dom";
// IMAGES
import homeKit from "../assets/images/nav-menu-home_kit_24_150x150.avif";
import awayKit from "../assets/images/navegation_image-desktop_AWAY_150x150.avif";
import thirdKit from "../assets/images/navegation_image-desktop_840e942e-a097-4b25-8e7d-c38702922b79_150x150.avif";
import fouthKit from "../assets/images/alaba_nave_menu_dfab4356-f6be-4556-a689-9a5160912356_150x150.avif";
import gkKit from "../assets/images/Navigation_Image_GOALKEEPER_150x150.avif";
import shopPlayerKit from "../assets/images/nacho_nave_menu_150x150.avif";
import basketballKit from "../assets/images/navegation_image-baloncesto_150x150.avif";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            KITS
          </NavLink>
          <div className="sub_menu">
            <ul className="sub_menu_cards">
              <li className="sub_menu_card">
                <img  src={homeKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  HOME JERSEY 23/24
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS
                </Link>
                <Link className="sub_card_item" to="*">
                  WOMENS
                </Link>
                <Link className="sub_card_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src={awayKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  AWAY KIT 23/24
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS
                </Link>
                <Link className="sub_card_item" to="*">
                  WOMENS
                </Link>
                <Link className="sub_card_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src={thirdKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  THIRD KIT 23/24
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS
                </Link>
                <Link className="sub_card_item" to="*">
                  WOMENS
                </Link>
                <Link className="sub_card_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src={fouthKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  FOURTH KIT 23/24
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS
                </Link>
                <Link className="sub_card_item" to="*">
                  WOMENS
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src={gkKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  GOOLKEEPER KIT 23/24
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS
                </Link>
                <Link className="sub_card_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src={shopPlayerKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  SHOP BY PLAYER
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS TEAM
                </Link>
                <Link className="sub_card_item" to="*">
                  WOMENS TEAM
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src={basketballKit} alt="kit" />
                <Link className="sub_card_title" to="*">
                  SHOP ALL BASKETBALL KITS
                </Link>
                <Link className="sub_card_item" to="*">
                  MENS
                </Link>
                <Link className="sub_card_item" to="*">
                  YOUTH
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            SHOP BY PLAYER
          </NavLink>
          <div className="sub_menu"></div>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            TRAINING
          </NavLink>
          <div className="sub_menu"></div>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            FASHION
          </NavLink>
          <div className="sub_menu"></div>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            ACCESSORIES
          </NavLink>
          <div className="sub_menu"></div>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            SALE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
