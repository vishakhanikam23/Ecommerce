import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { items } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbar-brand fw-bold fs-4">
          ShopEase
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link position-relative">
                <i className="bi bi-cart3"></i> Cart
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Login / Logout Button */}
          <div className="d-flex">
            {!isLoggedIn ? (
              <button
                className="btn btn-outline-light me-2"
                onClick={() => setIsLoggedIn(true)}
              >
                <i className="bi bi-box-arrow-in-right"></i> Login
              </button>
            ) : (
              <button
                className="btn btn-light text-primary fw-semibold"
                onClick={() => setIsLoggedIn(false)}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
