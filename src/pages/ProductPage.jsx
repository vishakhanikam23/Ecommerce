import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartDispatch } from "../contexts/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const dispatch = useCartDispatch();

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div
      className="container-fluid bg-light min-vh-100 d-flex flex-column"
      style={{ padding: "4rem 6vw" }}
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary display-5">Featured Products</h2>
        <p className="text-muted fs-5">Find your favorite items below</p>
      </div>

      {/* Search + Filter */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2">
          <select
            className="form-select shadow-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home</option>
            <option>Accessories</option>
            <option>Beauty</option>
            <option>Books</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-4 flex-grow-1">
        {filtered.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 shadow border-0 rounded-4">
              <img
                src={product.image}
                className="card-img-top rounded-top-4"
                alt={product.title}
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark">{product.title}</h5>
                <p className="card-text text-muted small flex-grow-1">
                  {product.description}
                </p>
                <p className="fw-bold text-primary mb-2 fs-5">
                  ₹{product.price}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                  >
                    <i className="bi bi-cart-plus"></i> Add to Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Products */}
      {filtered.length === 0 && (
        <p className="text-center text-muted mt-5 fs-5">No products found.</p>
      )}
    </div>
  );
}
