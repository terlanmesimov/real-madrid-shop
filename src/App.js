// REACT-ROUTER-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnnoncementBar from "./components/AnnoncementBar";
// PROVIDER
import { HeaderContextProvider } from "./utils/HeaderContext";

const App = () => {
  return (
    <BrowserRouter>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
