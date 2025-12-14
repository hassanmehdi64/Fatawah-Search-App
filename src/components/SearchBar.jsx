import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* Search Input */}
        <input
          type="text"
          placeholder="فتویٰ تلاش کریں..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full px-6 py-4 text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 px-6 py-4 bg-blue-500 text-white text-lg font-medium hover:bg-blue-700 transition"
        >
        
          <span className="hidden sm:inline">تلاش</span>
        </button>
      </div>

    </div>
  );
}
