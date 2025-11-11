import { useCart, useCartDispatch } from "../contexts/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  // --- Empty Cart UI ---
  if (items.length === 0) {
    return (
      <div className="container text-center py-5">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fw-bold display-6 text-secondary mb-3"
        >
          Your Cart is Empty 🛒
        </motion.h2>
        <p className="text-muted fs-5 mb-4">
          Add some products to see them here.
        </p>
        <Link to="/" className="btn btn-primary px-4">
          Go Back to Shop
        </Link>
      </div>
    );
  }

  // --- Main Cart UI ---
  return (
    <div className="container my-5">
      <div className="row g-5">
        {/* Left Section: Cart Items */}
        <div className="col-lg-8">
          <h2 className="fw-bold text-primary mb-4">Your Cart</h2>

          <div className="row g-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-12"
              >
                <div className="card shadow-sm border-0 rounded-4 p-3 d-flex flex-md-row align-items-center justify-content-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded-4"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />

                  <div className="flex-grow-1 ms-md-4 my-3 my-md-0">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-2">₹{item.price}</p>

                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center gap-2">
                      <button
                        onClick={() =>
                          dispatch({ type: "ADD_TO_CART", payload: item })
                        }
                        className="btn btn-sm btn-outline-secondary"
                      >
                        +
                      </button>
                      <span className="fw-semibold">{item.qty}</span>
                      <button
                        onClick={() =>
                          item.qty > 1
                            ? dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item.id,
                              })
                            : dispatch({
                                type: "CLEAR_ITEM",
                                payload: item.id,
                              })
                        }
                        className="btn btn-sm btn-outline-secondary"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div className="text-end">
                    <p className="fw-bold fs-5 mb-1">
                      ₹{item.price * item.qty}
                    </p>
                    <button
                      onClick={() =>
                        dispatch({ type: "CLEAR_ITEM", payload: item.id })
                      }
                      className="btn btn-link text-danger text-decoration-none"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-lg-4"
        >
          <div className="card shadow-lg border-0 rounded-4 p-4 sticky-top" style={{ top: "100px" }}>
            <h4 className="fw-bold mb-4 text-primary">Order Summary</h4>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Shipping</span>
              <span className="text-success">Free</span>
            </div>

            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="btn btn-primary w-100 mt-4 py-2 fw-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
