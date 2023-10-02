import { useEffect, useState } from "react";

const LanguageSelector = () => {
  const [openLangList, setOpenLangList] = useState(false);
  const [langList, setLangList] = useState([]);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const languages = ["en", "es", "de", "pt", "fr"];
    const updatedLangList = languages.filter((lang) => lang !== currentLang);
    setLangList(updatedLangList);
  }, [currentLang]);
  const setLang = (e) => {
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
