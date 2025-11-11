import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover rounded"
      />
      <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600 mt-1">₹{product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
