import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header({ initialQuery = "" }) {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-4 px-4 md:px-6 py-4">
        {/* Home Button */}
        <Link
          to="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors shadow"
        >
          <Home className="w-6 h-6 text-blue-600" />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 w-full">
          <SearchBar initialQuery={initialQuery} />
        </div>
      </div>
    </header>
  );
}
