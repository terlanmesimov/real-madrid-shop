import { NavLink, Link } from "react-router-dom";

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
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  HOME JERSEY 23/24
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  WOMENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  AWAY KIT 23/24
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  WOMENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  THIRD KIT 23/24
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  WOMENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  FOURTH KIT 23/24
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  WOMENS
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  GOOLKEEPER KIT 23/24
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS
                </Link>
                <Link className="sub_menu_item" to="*">
                  YOUTH
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  SHOP BY PLAYER
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS TEAM
                </Link>
                <Link className="sub_menu_item" to="*">
                  WOMENS TEAM
                </Link>
              </li>
              <li className="sub_menu_card">
                <img src="" alt="kit" />
                <Link className="sub_menu_title" to="*">
                  SHOP ALL BASKETBALL KITS
                </Link>
                <Link className="sub_menu_item" to="*">
                  MENS
                </Link>
                <Link className="sub_menu_item" to="*">
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
