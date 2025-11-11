export default function Footer() {
  return (
    <footer
      className="bg-dark text-light pt-5 pb-3 mt-5"
      style={{ marginTop: "auto" }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* --- Brand Info --- */}
          <div className="col-md-4">
            <h3 className="fw-bold text-uppercase text-primary">ShopEase</h3>
            <p className="text-muted mt-3">
              Your one-stop destination for trendy products, great deals, and
              smooth shopping experience.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-muted text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/cart" className="text-muted text-decoration-none">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p className="text-muted mb-1">
              <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
              Pune, Maharashtra, India
            </p>
            <p className="text-muted mb-1">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              +91 98765 43210
            </p>
            <p className="text-muted">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              support@shopease.com
            </p>
          </div>
        </div>

        <hr className="my-4 text-secondary" />

        {/* --- Bottom Footer --- */}
        <div className="text-center text-muted">
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
