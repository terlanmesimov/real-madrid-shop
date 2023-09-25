import { Link } from "react-router-dom";
// MUI
import EastIcon from "@mui/icons-material/East";

const AnnoncementBar = () => {
  return (
    <div className="annoncement_bar">
      <Link to="/" className="annoncement_bar_link">
        <p className="annoncement_bar_message">
          REGISTER AS A MADRIDISTA FOR FREE AND GET 5% OFF YOUR FIRST PURCHASE
          <EastIcon className="annoncement_bar_icon" />
        </p>
      </Link>
    </div>
  );
};

export default AnnoncementBar;
