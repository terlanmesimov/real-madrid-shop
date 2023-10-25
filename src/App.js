// REACT-ROUTER-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Account from "./pages/Account";
import ChangePassword from "./pages/ChangePassword";
// PROVIDER
import { MainContextProvider } from "./utils/MainContext";
import { AuthContextProvider } from "./utils/AuthContext";
import PrivateRoutes from "./routers/PrivateRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <MainContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/account" element={<Account />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/product_details/:productId"
              element={<ProductDetails />}
            />
          </Routes>
        </BrowserRouter>
      </MainContextProvider>
    </AuthContextProvider>
  );
};

export default App;
