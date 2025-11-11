export default function Services() {
  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold display-5">Our Services</h1>
        <p className="text-muted fs-5">
          What we offer to make your shopping experience better.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm p-4">
            <i className="bi bi-truck fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Fast Delivery</h4>
            <p className="text-muted">
              Get your orders delivered quickly and safely right to your
              doorstep.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm p-4">
            <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Secure Payments</h4>
            <p className="text-muted">
              Enjoy a 100% safe and secure checkout experience with encryption.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm p-4">
            <i className="bi bi-headset fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">24/7 Support</h4>
            <p className="text-muted">
              Our dedicated team is always ready to help you whenever needed.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm p-4">
            <i className="bi bi-gift fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Exciting Offers</h4>
            <p className="text-muted">
              Save big with our regular discounts, coupons, and combo offers.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm p-4">
            <i className="bi bi-box-seam fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Easy Returns</h4>
            <p className="text-muted">
              Hassle-free returns and replacements for your peace of mind.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm p-4">
            <i className="bi bi-globe fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Worldwide Shipping</h4>
            <p className="text-muted">
              We deliver across the globe with reliable international partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
