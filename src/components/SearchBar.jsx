import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SearchBar({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="w-full">
      <div className="relative flex items-stretch bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="
            flex items-center justify-center
            px-4 sm:px-6
            text-base sm:text-lg
            font-medium
            bg-blue-500 text-white
            hover:bg-blue-700
            transition
          "
        >
          <span className="hidden sm:inline">تلاش</span>
          <span className="sm:hidden">🔍</span>
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="فتویٰ تلاش کریں..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="
            w-full
            px-4 sm:px-6
            py-3 sm:py-4
            text-sm sm:text-lg
            text-right text-gray-800
            placeholder-gray-400
            focus:outline-none
            focus:ring-2 focus:ring-blue-500
            transition
          "
        />
      </div>
    </div>
  );
}
