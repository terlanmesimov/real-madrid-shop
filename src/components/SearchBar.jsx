import { useTranslation } from "react-i18next";
// IMAGES
import searchIcon from "../assets/images/icons8-search-50.png";

const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <div className="search_bar">
      <div className="form_content">
        <form className="search">
          <input
            type="text"
            className="search_input"
            placeholder={t("header.search")}
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "Search";
            }}
          />
          <button className="search_btn">
            <img className="search_icon" src={searchIcon} alt="search icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
