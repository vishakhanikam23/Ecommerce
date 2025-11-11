export default function About() {
  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold display-5">About Us</h1>
        <p className="text-muted fs-5">
          Learn more about who we are and what drives us.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=60"
            alt="About Us"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>

        <div className="col-md-6">
          <h3 className="fw-bold mb-3 text-dark">Who We Are</h3>
          <p className="text-muted mb-3">
            At <strong>ShopEase</strong>, we believe shopping should be simple,
            enjoyable, and accessible to everyone. Our platform offers a
            wide range of high-quality products across multiple categories.
          </p>
          <p className="text-muted mb-3">
            We are passionate about customer satisfaction and strive to deliver
            the best online shopping experience by combining technology,
            creativity, and user-friendly design.
          </p>
          <p className="text-muted">
            Whether you're looking for the latest gadgets, trendy fashion, or
            home essentials, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}
