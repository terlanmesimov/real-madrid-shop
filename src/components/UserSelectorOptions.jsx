import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const UserSelectorOptions = () => {
  const [openLangList, setOpenLangList] = useState(false);
  const [langList, setLangList] = useState([]);
  const [currentLang, setCurrentLang] = useState("en");

  const [openRegionList, setOpenRegionList] = useState(false);
  const [regionList, setRegionList] = useState([]);
  const [currentRegion, setCurrentRegion] = useState("eu");

  useEffect(() => {
    const languages = ["en", "es", "de", "pt", "fr"];
    const updatedLangList = languages.filter((lang) => lang !== currentLang);
    setLangList(updatedLangList);
  }, [currentLang]);
  const setLang = (e) => {
    setCurrentLang(String(e.target.id));
  };

  useEffect(() => {
    const regions = ["eu", "uk", "us", "au", "cn", "jp", "kr"];
    const updatedRegionList = regions.filter(
      (region) => region !== currentRegion
    );
    setRegionList(updatedRegionList);
  }, [currentRegion]);
  const setRegion = (e) => {
    setCurrentRegion(String(e.target.id));
  };

  return (
    <div className="selector_and_options">
      <div className="language_and_region">
        <div className="language_selector">
          <span className="title">IDIOMA</span>
          <div
            className="languages"
            onClick={() => setOpenLangList(!openLangList)}
          >
            <span className="current_lang">{currentLang}</span>
            <span className="arrow_down"></span>
            {openLangList && (
              <ul className="lang_list">
                {langList.map((lang) => {
                  return (
                    <li
                      key={lang}
                      id={lang}
                      onClick={setLang}
                      className="language"
                    >
                      {lang}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="region_selector">
          <span className="title">REGIÓN</span>
          <div
            className="regions"
            onClick={() => setOpenRegionList(!openRegionList)}
          >
            <span className="current_region">{currentRegion}</span>
            <span className="arrow_down"></span>
            {openRegionList && (
              <ul className="region_list">
                {regionList.map((region) => {
                  return (
                    <li
                      key={region}
                      id={region}
                      onClick={setRegion}
                      className="region"
                    >
                      {region}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="cart_and_user">
        <Link className="user" to="/">
          <div className="user_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon icon-account"
              fill="#636467"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                fill="#636467"
              ></path>
            </svg>
          </div>
        </Link>
        <Link className="cart" to="/">
          <div className="cart_icon">
            <svg
              className="icon icon-cart-empty"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="#636467"
            >
              <path
                d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
                fill="#636467"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserSelectorOptions;
