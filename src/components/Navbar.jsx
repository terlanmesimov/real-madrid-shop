import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            KITS
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            SHOP BY PLAYER
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            TRAINING
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            FASHION
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            ACCESSORIES
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink className="nav_link" to="/">
            SALE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
