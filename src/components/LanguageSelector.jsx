import { useContext, useEffect, useState } from "react";
import i18n from "../utils/i18n";
import { MainContext } from "../utils/MainContext";

const LanguageSelector = () => {
  const { currentLang, setCurrentLang } = useContext(MainContext);

  const [openLangList, setOpenLangList] = useState(false);
  const [langList, setLangList] = useState([]);

  useEffect(() => {
    const languages = ["en", "es", "de", "pt", "fr"];
    const updatedLangList = languages.filter((lang) => lang !== currentLang);
    setLangList(updatedLangList);
    i18n.changeLanguage(currentLang);
  }, [currentLang]);
  const setLang = (e) => {
    window.location.reload();
    setCurrentLang(String(e.target.id));
  };

  return (
    <div className="language_selector">
      <span className="title">IDIOMA</span>
      <div className="languages" onClick={() => setOpenLangList(!openLangList)}>
        <span className="current_lang">{currentLang}</span>
        <span className="arrow_down"></span>
        {openLangList && (
          <ul className="lang_list">
            {langList.map((lang) => {
              return (
                <li key={lang} id={lang} onClick={setLang} className="language">
                  {lang}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
