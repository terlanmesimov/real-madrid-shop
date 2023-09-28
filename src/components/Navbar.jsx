import { NavLink, Link } from "react-router-dom";
//* IMAGES
import homeKit from "../assets/images/nav-menu-home_kit_24_150x150.avif";
import awayKit from "../assets/images/navegation_image-desktop_AWAY_150x150.avif";
import thirdKit from "../assets/images/navegation_image-desktop_840e942e-a097-4b25-8e7d-c38702922b79_150x150.avif";
import fouthKit from "../assets/images/alaba_nave_menu_dfab4356-f6be-4556-a689-9a5160912356_150x150.avif";
import gkKit from "../assets/images/Navigation_Image_GOALKEEPER_150x150.avif";
import shopPlayerKit from "../assets/images/nacho_nave_menu_150x150.avif";
import basketballKit from "../assets/images/navegation_image-baloncesto_150x150.avif";
//
import shopbyplayer from "../assets/images/shop_by_player.jpeg";
import training from "../assets/images/training.jpeg";
import fashion from "../assets/images/fashion.jpeg";
import accessories from "../assets/images/accesorioes.jpeg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink className="nav_link" to="*">
            KITS
          </NavLink>
          <div className="sub_menu kits">
            <ul className="sub_menu_cards">
              <li className="sub_menu_card">
                <img className="sub_card_image" src={homeKit} alt="kit" />
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
                <img className="sub_card_image" src={awayKit} alt="kit" />
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
                <img className="sub_card_image" src={thirdKit} alt="kit" />
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
                <img className="sub_card_image" src={fouthKit} alt="kit" />
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
                <img className="sub_card_image" src={gkKit} alt="kit" />
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
                <img className="sub_card_image" src={shopPlayerKit} alt="kit" />
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
                <img className="sub_card_image" src={basketballKit} alt="kit" />
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
          <div className="sub_menu shop_by_player">
            <ul className="players_list">
              <li className="list_title">
                <Link to="*">MENS TEAM</Link>
              </li>
              <li className="player">
                <Link to="*">Courtois</Link>
              </li>
              <li className="player">
                <Link to="*">Carvajal</Link>
              </li>
              <li className="player">
                <Link to="*">E. Militão</Link>
              </li>
              <li className="player">
                <Link to="*">Rüdiger</Link>
              </li>
              <li className="player">
                <Link to="*">Alaba</Link>
              </li>
              <li className="player">
                <Link to="*">Camavinga</Link>
              </li>
              <li className="player">
                <Link to="*">Modrić</Link>
              </li>
              <li className="player">
                <Link to="*">Bellingham</Link>
              </li>
              <li className="player">
                <Link to="*">Kroos</Link>
              </li>
              <li className="player">
                <Link to="*">Valverde</Link>
              </li>
              <li className="player">
                <Link to="*">Vini JR.</Link>
              </li>
              <li className="player">
                <Link to="*">Rodrygo</Link>
              </li>
            </ul>
            <ul className="player_list">
              <li className="list_title">
                <Link to="*">WOMENS TEAM</Link>
              </li>
              <li className="player">
                <Link to="*">Misa</Link>
              </li>
              <li className="player">
                <Link to="*">K. Robles</Link>
              </li>
              <li className="player">
                <Link to="*">Rocio</Link>
              </li>
              <li className="player">
                <Link to="*">Olga</Link>
              </li>
              <li className="player">
                <Link to="*">Ivana</Link>
              </li>
              <li className="player">
                <Link to="*">Svana</Link>
              </li>
              <li className="player">
                <Link to="*">Teresa</Link>
              </li>
              <li className="player">
                <Link to="*">Weir</Link>
              </li>
              <li className="player">
                <Link to="*">Zornoza</Link>
              </li>
              <li className="player">
                <Link to="*">Feller</Link>
              </li>
              <li className="player">
                <Link to="*">Athenea</Link>
              </li>
            </ul>
            <div className="sub_info_part">
              <img src={shopbyplayer} alt="image" />
            </div>
          </div>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="*e">
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
