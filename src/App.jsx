import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Updated
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from"./components/Footer";
export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* ✅ Responsive Navbar */}
        <Navbar />

        {/* ✅ Main content section */}
        <main className="container-fluid p-4" style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
