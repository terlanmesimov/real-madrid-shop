import { Link } from "react-router-dom";
// MUI
import EastIcon from "@mui/icons-material/East";
// CONTEXT
import { useContext } from "react";
import { Auth } from "../utils/AuthContext";

const AnnoncementBar = () => {
  const { hasToken } = useContext(Auth);
  return (
    <div className="annoncement_bar">
      <Link
        to={hasToken ? "/shop" : "/register"}
        className="annoncement_bar_link"
      >
        <p className="annoncement_bar_message">
          {!hasToken &&
            "REGISTER AS A MADRIDISTA FOR FREE AND GET 5% OFF YOUR FIRST PURCHASE"}
          {hasToken && "GET READY FOR THE COLD WITH OUR WINTER JACKETS - SHOP"}
          <EastIcon className="annoncement_bar_icon" />
        </p>
      </Link>
    </div>
  );
};

export default AnnoncementBar;
