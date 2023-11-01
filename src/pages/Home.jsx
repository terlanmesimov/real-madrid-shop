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

const Home = () => {

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
          title={"KITS"}
          collections={[
            "23/24 REAL MADRID HOME KITS",
            "23/24 REAL MADRID AWAY KITS",
            "THIRD KIT REAL MADRID 23/24",
            "23/24 REAL MADRID GOALKEEPER KITS",
          ]}
          id={"one"}
        />
        <ContentSection
          text={["CHAMPIONS LEAGUE TRAINING COLLECTION", "TRAIN LIKE A PRO"]}
          id={"one"}
        />
        <ShopifySection/>
        <CollectionsSection
          title={"SCORE YOUR STYLE"}
          collections={[
            "LIFESTYLE MAN",
            "ESSENTIALS FOR WOMEN",
            "ESSENTIALS YOUTH",
          ]}
          id={"two"}
        />
        <ContentSection
          text={["COLLECTİON SİGNATURE", "GET READY FOR FALL"]}
          id={"two"}
        />
        <ShopifySection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
