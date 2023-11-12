import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// MUI
import EastIcon from "@mui/icons-material/East";
// CONTEXT
import { useContext } from "react";
import { Auth } from "../utils/AuthContext";


const AnnoncementBar = () => {
  const { hasToken } = useContext(Auth);
  const { t } = useTranslation();
  return (
    <div className="annoncement_bar">
      <Link
        to={hasToken ? "/shop" : "/register"}
        className="annoncement_bar_link"
      >
        <p className="annoncement_bar_message">
          {!hasToken && `${t("annoncementBar.toRegister")}`}
          {hasToken && `${t("annoncementBar.toShop")}`}
          <EastIcon className="annoncement_bar_icon" />
        </p>
      </Link>
    </div>
  );
};

export default AnnoncementBar;
