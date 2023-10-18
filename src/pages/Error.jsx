import { useEffect } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";
import ShopifySection from "../components/sections/ShopifySection";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";


const Error = () => {
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
              <Link to="/">HOME /</Link>
              <Link> 404 NOT FOUND</Link>
            </div>
            <div className="error_message">
              <h2>404 Page not found</h2>
              <p>
                The page you requested does not exist. Click{" "}
                <Link to="/shop">here</Link> to continue shopping.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShopifySection title={"FEATURED COLLECTION"} id={"one"} />
      <Footer />
    </>
  );
};

export default Error;
