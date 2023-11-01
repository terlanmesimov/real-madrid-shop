import { Link } from "react-router-dom";
// IMAGES
import contentImage from "../../assets/images/content_section_image.jpeg";
import contentImageTwo from "../../assets/images/content_section_image2.jpeg";
import { useTranslation } from "react-i18next";

const ContentSection = ({ text, id }) => {
  const { t } = useTranslation();
  return (
    <section className={`content_section ${id === "one" ? "bg-1" : "bg-2"}`}>
      <div className="container">
        <div className="row">
          <div className="text_content">
            <h2 className={id === "two" ? "m-20" : ""}>{text[0]}</h2>
            <h3 className={id === "two" ? "m-0" : ""}>{text[1]}</h3>
            <Link to="/">
              <span>{t("shopNow")}</span>
            </Link>
          </div>
          <div className="image_content">
            <img
              src={id === "one" ? contentImage : contentImageTwo}
              alt="content_image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
