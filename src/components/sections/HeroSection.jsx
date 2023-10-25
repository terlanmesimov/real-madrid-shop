import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// IMAGES
import heroBg from "../../assets/images/hero_bg.jpeg";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero_bg">
        <img src={heroBg} alt="hero bg" />
      </div>
      <div className="content">
        <h1 className="hero_heading">{t("home.heroSection.heroHeadingOne")}</h1>
        <h2 className="hero_heading">{t("home.heroSection.heroHeadingTwo")}</h2>
        <div className="hero_btn">
          <Link to="/shop">{t("shopNow")}</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
