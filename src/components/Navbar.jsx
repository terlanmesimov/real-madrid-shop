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
import accessories from "../assets/images/accesorioes.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className="nav_item kits">
          <NavLink className="nav_link" to="/shop">
            KITS
          </NavLink>
          <div className="sub_menu kits_sub">
            <ul className="sub_menu_cards">
              <li className="sub_menu_card">
                <img className="sub_card_image" src={homeKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  HOME JERSEY 23/24
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS
                </Link>
                <Link className="sub_card_item" to="/">
                  WOMENS
                </Link>
                <Link className="sub_card_item" to="/">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img className="sub_card_image" src={awayKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  AWAY KIT 23/24
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS
                </Link>
                <Link className="sub_card_item" to="/">
                  WOMENS
                </Link>
                <Link className="sub_card_item" to="/">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img className="sub_card_image" src={thirdKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  THIRD KIT 23/24
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS
                </Link>
                <Link className="sub_card_item" to="/">
                  WOMENS
                </Link>
                <Link className="sub_card_item" to="/">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img className="sub_card_image" src={fouthKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  FOURTH KIT 23/24
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS
                </Link>
                <Link className="sub_card_item" to="/">
                  WOMENS
                </Link>
              </li>
              <li className="sub_menu_card">
                <img className="sub_card_image" src={gkKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  GOOLKEEPER KIT 23/24
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS
                </Link>
                <Link className="sub_card_item" to="/">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img className="sub_card_image" src={shopPlayerKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  SHOP BY PLAYER
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS TEAM
                </Link>
                <Link className="sub_card_item" to="/">
                  WOMENS TEAM
                </Link>
              </li>
              <li className="sub_menu_card">
                <img className="sub_card_image" src={basketballKit} alt="kit" />
                <Link className="sub_card_title" to="/">
                  SHOP ALL BASKETBALL KITS
                </Link>
                <Link className="sub_card_item" to="/">
                  MENS
                </Link>
                <Link className="sub_card_item" to="/">
                  YOUTH
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav_item shop_by_player">
          <NavLink className="nav_link" to="/shop">
            SHOP BY PLAYER
          </NavLink>
          <div className="sub_menu shop_by_player_sub">
            <ul className="players_list">
              <li className="list_title">
                <Link to="/">MENS TEAM</Link>
              </li>
              <li className="player">
                <Link to="/">Courtois</Link>
              </li>
              <li className="player">
                <Link to="/">Carvajal</Link>
              </li>
              <li className="player">
                <Link to="/">E. Militão</Link>
              </li>
              <li className="player">
                <Link to="/">Rüdiger</Link>
              </li>
              <li className="player">
                <Link to="/">Alaba</Link>
              </li>
              <li className="player">
                <Link to="/">Camavinga</Link>
              </li>
              <li className="player">
                <Link to="/">Modrić</Link>
              </li>
              <li className="player">
                <Link to="/">Bellingham</Link>
              </li>
              <li className="player">
                <Link to="/">Kroos</Link>
              </li>
              <li className="player">
                <Link to="/">Valverde</Link>
              </li>
              <li className="player">
                <Link to="/">Vini JR.</Link>
              </li>
              <li className="player">
                <Link to="/">Rodrygo</Link>
              </li>
            </ul>
            <ul className="players_list">
              <li className="list_title">
                <Link to="/">WOMENS TEAM</Link>
              </li>
              <li className="player">
                <Link to="/">Misa</Link>
              </li>
              <li className="player">
                <Link to="/">K. Robles</Link>
              </li>
              <li className="player">
                <Link to="/">Rocio</Link>
              </li>
              <li className="player">
                <Link to="/">Olga</Link>
              </li>
              <li className="player">
                <Link to="/">Ivana</Link>
              </li>
              <li className="player">
                <Link to="/">Svana</Link>
              </li>
              <li className="player">
                <Link to="/">Teresa</Link>
              </li>
              <li className="player">
                <Link to="/">Weir</Link>
              </li>
              <li className="player">
                <Link to="/">Zornoza</Link>
              </li>
              <li className="player">
                <Link to="/">Feller</Link>
              </li>
              <li className="player">
                <Link to="/">Athenea</Link>
              </li>
            </ul>
            <div className="sub_info_part">
              <img
                className="info_part_image"
                src={shopbyplayer}
                alt="info_part_img"
              />
              <h3>KİTS 23/24</h3>
              <h5>
                <Link>SHOP NOW</Link>
              </h5>
            </div>
          </div>
        </li>
        <li className="nav_item training">
          <NavLink className="nav_link" to="/shop">
            TRAINING
          </NavLink>
          <div className="sub_menu training_sub">
            <ul className="items">
              <li className="list_title">
                <Link to="/">MENS</Link>
              </li>
              <li className="list_item">
                <Link to="/">Tracksuit</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Jackets</Link>
              </li>
              <li className="list_item">
                <Link to="/">T-shirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Polos</Link>
              </li>
              <li className="list_item">
                <Link to="/">Bottoms</Link>
              </li>
              <li className="list_item">
                <Link to="/">See All</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">WOMENS</Link>
              </li>
              <li className="list_item">
                <Link to="/">Tracksuit</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Jackets</Link>
              </li>
              <li className="list_item">
                <Link to="/">T-shirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Bottoms</Link>
              </li>
              <li className="list_item">
                <Link to="/">See All</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">YOUTH</Link>
              </li>
              <li className="list_item">
                <Link to="/">Tracksuit</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Jackets</Link>
              </li>
              <li className="list_item">
                <Link to="/">T-shirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Bottoms</Link>
              </li>
              <li className="list_item">
                <Link to="/">See All</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">COLLECTIONS</Link>
              </li>
              <li className="list_item">
                <Link to="/">Culture Wear</Link>
              </li>
              <li className="list_item">
                <Link to="/">Training</Link>
              </li>
              <li className="list_item">
                <Link to="/">Travel</Link>
              </li>
              <li className="list_item">
                <Link to="/">Champhions League</Link>
              </li>
              <li className="list_item">
                <Link to="/">Lfstr Collection</Link>
              </li>
            </ul>
            <div className="sub_info_part">
              <img
                className="info_part_image"
                src={training}
                alt="info_part_img"
              />
              <h3>CHAMPIONS LEAGUE COLLECTION 23/24</h3>
              <h5>
                <Link>SHOP NOW</Link>
              </h5>
            </div>
          </div>
        </li>
        <li className="nav_item fashion">
          <NavLink className="nav_link" to="/shop">
            FASHION
          </NavLink>
          <div className="sub_menu fashion_sub">
            <ul className="items">
              <li className="list_title">
                <Link to="/">MENS</Link>
              </li>
              <li className="list_item">
                <Link to="/">T-shirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Hooded Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Tracksuit</Link>
              </li>
              <li className="list_item">
                <Link to="/">Polos</Link>
              </li>
              <li className="list_item">
                <Link to="/">Bottoms</Link>
              </li>
              <li className="list_item">
                <Link to="/">Caps-Hats</Link>
              </li>
              <li className="list_item">
                <Link to="/">Pajamas & Underwear</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">WOMENS</Link>
              </li>
              <li className="list_item">
                <Link to="/">T-shirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Hooded Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Jackets</Link>
              </li>
              <li className="list_item">
                <Link to="/">Bottoms</Link>
              </li>
              <li className="list_item">
                <Link to="/">Pajamas & Underwear</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">YOUTH</Link>
              </li>
              <li className="list_item">
                <Link to="/">T-shirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Hooded Sweatshirts</Link>
              </li>
              <li className="list_item">
                <Link to="/">Jackets</Link>
              </li>
              <li className="list_item">
                <Link to="/">Tracksuit</Link>
              </li>
              <li className="list_item">
                <Link to="/">Bottoms</Link>
              </li>
              <li className="list_item">
                <Link to="/">Caps-Hats</Link>
              </li>
              <li className="list_item">
                <Link to="/">Pajamas & Underwear</Link>
              </li>
              <li className="list_item">
                <Link to="/">Baby Clothing</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">COLLECTIONS</Link>
              </li>
              <li className="list_item">
                <Link to="/">Lifestyle</Link>
              </li>
              <li className="list_item">
                <Link to="/">Urban Gold</Link>
              </li>
              <li className="list_item">
                <Link to="/">Signature</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sakura</Link>
              </li>
              <li className="list_item">
                <Link to="/">Summer Exxentials</Link>
              </li>
              <li className="list_item">
                <Link to="/">Exxentials</Link>
              </li>
              <li className="list_item">
                <Link to="/">Sportswear</Link>
              </li>
            </ul>
            <div className="sub_info_part">
              <img
                className="info_part_image"
                src={fashion}
                alt="info_part_img"
              />
              <h3>NEW SAKURA COLLECTION!</h3>
              <h5>
                <Link>SHOP NOW</Link>
              </h5>
            </div>
          </div>
        </li>
        <li className="nav_item accessories">
          <NavLink className="nav_link" to="/shop">
            ACCESSORIES
          </NavLink>
          <div className="sub_menu accessories_sub">
            <ul className="items">
              <li className="list_title">
                <Link to="/">ACCESSORIES FOR FASHION</Link>
              </li>
              <li className="list_item">
                <Link to="/">Face Masks</Link>
              </li>
              <li className="list_item">
                <Link to="/">Caps</Link>
              </li>
              <li className="list_item">
                <Link to="/">Beanies</Link>
              </li>
              <li className="list_item">
                <Link to="/">Socks and Gloves</Link>
              </li>
              <li className="list_item">
                <Link to="/">Jewellery</Link>
              </li>
              <li className="list_item">
                <Link to="/">Wathces</Link>
              </li>
              <li className="list_item">
                <Link to="/">Wallets</Link>
              </li>
              <li className="list_item">
                <Link to="/">Backpacks</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">HOMEWARE</Link>
              </li>
              <li className="list_item">
                <Link to="/">Home and Office</Link>
              </li>
              <li className="list_item">
                <Link to="/">Glassware and Cups</Link>
              </li>
              <li className="list_item">
                <Link to="/">Electronics</Link>
              </li>
              <li className="list_item">
                <Link to="/">Games and Toys</Link>
              </li>
              <li className="list_item">
                <Link to="/">Pets</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">FAN WORLD</Link>
              </li>
              <li className="list_item">
                <Link to="/">Scarves</Link>
              </li>
              <li className="list_item">
                <Link to="/">Flags</Link>
              </li>
              <li className="list_item">
                <Link to="/">Key Rings</Link>
              </li>
              <li className="list_item">
                <Link to="/">Souvenirs</Link>
              </li>
              <li className="list_item">
                <Link to="/">Corporate Gifts</Link>
              </li>
            </ul>
            <ul className="items">
              <li className="list_title">
                <Link to="/">ACCESSORIES FOR FOOTBALL</Link>
              </li>
              <li className="list_item">
                <Link to="/">Footballs</Link>
              </li>
              <li className="list_item">
                <Link to="/">Baggs and Luggage</Link>
              </li>
              <li className="list_item">
                <Link to="/">Gloves and Shin Guards</Link>
              </li>
            </ul>
            <div className="sub_info_part">
              <img
                className="info_part_image"
                src={accessories}
                alt="info_part_img"
              />
              <h3>NEW TRAINING ACCESSORIES</h3>
              <h5>
                <Link>SHOP NOW</Link>
              </h5>
            </div>
          </div>
        </li>
        <li className="nav_item sale">
          <NavLink className="nav_link" to="/shop">
            SALE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
