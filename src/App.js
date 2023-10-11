// REACT-ROUTER-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Registration from "./pages/Registration";
import ProductDetails from "./pages/ProductDetails";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/product_details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
