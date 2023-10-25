import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";
import { Auth } from "../utils/AuthContext";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";

const Account = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Account - Real Madrid CF - EU Shop";
  }, []);
  const { userData, setHasToken } = useContext(Auth);

  const logOut = () => {
    localStorage.removeItem("token");
    setHasToken(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <div className="account">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <Link to="/">HOME</Link>
              <Link>/ ACCOUNT</Link>
            </div>
            <div className="costumer_account">
              <h2 className="title">Welcome back, {userData.name}</h2>
              <button className="log_out">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    fill="none"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="word" onClick={logOut}>
                  Log Out
                </span>
                <span
                  className="word"
                  onClick={() => navigate("/change-password")}
                >
                  Change Password
                </span>
              </button>
              <div className="account_info">
                <div>
                  <h3>Order history</h3>
                  <p>You have not yet placed an order.</p>
                </div>
                <div>
                  <h3>Account details</h3>
                  <Link>See addresses (0)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
