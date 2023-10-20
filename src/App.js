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
// PROVIDER
import { MainContextProvider } from "./utils/MainContext";
const App = () => {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/account" element={<Account />} />
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
  );
};

export default App;
