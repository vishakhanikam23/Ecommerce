import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
      </nav>
    </header>
  );
}
