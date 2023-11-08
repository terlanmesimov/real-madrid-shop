import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../utils/MainContext";
// IMAGES
import searchIcon from "../assets/images/icons8-search-50.png";

const SearchBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [openList, setOpenList] = useState(false);
  const { products } = useContext(MainContext);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setOpenList(false);
  }, [window.scrollY]);

  const performSearch = (searchQuery) => {
    const filteredResults = products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleInputChange = (event) => {
    setOpenList(true);
    const newQuery = event.target.value;
    setQuery(newQuery);
    performSearch(newQuery);
  };

  return (
    <div className="search_bar">
      <div className="form_content">
        <form className="search">
          <input
            type="text"
            className="search_input"
            placeholder={t("header.search")}
            value={query}
            onChange={handleInputChange}
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
      {openList && (
        <div className="results">
          <ul className="result_list">
            {results.map((item) => {
              return (
                <li
                  key={item.id}
                  id={item.id}
                  className="list_item"
                  onClick={() => {
                    navigate(`/product-details/${item.id}`);
                    window.location.reload();
                  }}
                >
                  <img
                    className="item_image"
                    src={`${process.env.REACT_APP_DOMAIN}/${item.productImage}`}
                    alt="item"
                  />
                  <h3 className="item_name">{item.name}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
