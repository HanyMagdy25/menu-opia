import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Feedback from "./pages/Feedback/Feedback";
import Cart from "./pages/Cart/Cart";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from "react-use-cart";

function ScrollToTopAfterChangePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <CartProvider>
      <div className="App">
      <Router>
        <ScrollToTopAfterChangePage />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu-opia" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ScrollToTop smooth />
      </Router>
    </div>
    </CartProvider>
    
    </>
    
  );
}

export default App;
