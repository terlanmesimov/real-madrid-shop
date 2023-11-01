import { useEffect } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";
import ShopifySection from "../components/sections/ShopifySection";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "404 Not found - Real Madrid CF | EU";
  }, []);

  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <div className="error">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <Link to="/">{t("error.breadcrumb.home")} /</Link>
              <Link> {t("error.breadcrumb.notFound")}</Link>
            </div>
            <div className="error_message">
              <h2>{t("error.errorMessage")}</h2>
              <p>
                The page you requested does not exist. Click{" "}
                <Link to="/shop">here</Link> to continue shopping.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShopifySection />
      <Footer />
    </>
  );
};

export default Error;
