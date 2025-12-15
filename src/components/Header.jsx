import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header({ initialQuery = "" }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 md:px-6 py-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-600 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 cursor-pointer transition text-xl"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Home Button */}
        <Link
          to="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors shadow"
        >
          <Home className="w-6 h-6 text-blue-600" />
        </Link>

        {/* Search Bar */}
        <div className="flex-1">
          <SearchBar initialQuery={initialQuery} />
        </div>
      </div>
    </header>
  );
}
