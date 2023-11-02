import { useEffect } from "react";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";
import HeroSection from "../components/sections/HeroSection";
import ShopifySection from "../components/sections/ShopifySection";
import CollectionsSection from "../components/sections/CollectionsSection";
import ContentSection from "../components/sections/ContentSection";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title =
      "The Official Online Store of Real Madrid CF - Real Madrid CF | EU Shop";
  }, []);

  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <main>
        <HeroSection />
        <ShopifySection />
        <CollectionsSection
          title={t("home.collectionsSection.titleOne")}
          collections={[
            `${t("home.collectionsSection.homeKits")}`,
            `${t("home.collectionsSection.awayKits")}`,
            `${t("home.collectionsSection.thirdKit")}`,
            `${t("home.collectionsSection.goolkeeperKits")}`,
          ]}
          id={"one"}
        />
        <ContentSection
          text={[
            `${t("home.contentSection.sectionOne.textOne")}`,
            `${t("home.contentSection.sectionOne.textTwo")}`,
          ]}
          id={"one"}
        />
        <ShopifySection />
        <CollectionsSection
          title={t("home.collectionsSection.titleTwo")}
          collections={[
            `${t("home.collectionsSection.lifeStyleMan")}`,
            `${t("home.collectionsSection.essentialForWomen")}`,
            `${t("home.collectionsSection.essentialYouth")}`,
          ]}
          id={"two"}
        />
        <ContentSection
          text={[
            `${t("home.contentSection.sectionTwo.textOne")}`,
            `${t("home.contentSection.sectionTwo.textTwo")}`,
          ]}
          id={"two"}
        />
        <ShopifySection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
