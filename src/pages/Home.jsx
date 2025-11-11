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
      className="bg-light d-flex flex-column"
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        padding: "3rem 5vw",
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="fw-bold text-primary display-4">Featured Products</h1>
        <p className="text-muted fs-5">
          Explore our top categories and discover your next favorite product
        </p>
      </header>

      {/* Filter Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-10 col-sm-8 col-md-4 mb-2">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-8 col-sm-6 col-md-2 mb-2">
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

      {/* Product Grid (Full Screen Width) */}
      <div className="container-fluid px-0 flex-grow-1">
        <div className="row g-4 justify-content-center px-3">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                key={product.id}
              >
                <div className="card h-100 border-0 shadow-lg rounded-4">
                  <img
                    src={product.image}
                    className="card-img-top rounded-top-4"
                    alt={product.title}
                    style={{
                      height: "230px",
                      objectFit: "cover",
                    }}
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
            ))
          ) : (
            <p className="text-center text-muted fs-5 mt-5">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
