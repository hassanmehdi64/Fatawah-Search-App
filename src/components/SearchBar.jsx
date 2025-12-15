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
      <div className="relative flex items-stretch bg-white rounded-full shadow-sm border overflow-hidden">
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="
    flex items-center justify-center
    px-8 sm:px-12
    py-2.5
    text-2xl 
    bg-blue-500 text-white
    rounded-lg
    hover:bg-blue-700
    transition
  "
        >
          <span className="urdu-text">تلاش</span>
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="فتویٰ تلاش کریں..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          dir="rtl"
          autoFocus
          className="
    urdu-text
    w-full
    px-4 sm:px-6
    py-3 sm:py-4
    text-xl sm:text-2xl md:text-2xl
    text-right
    text-gray-800
    placeholder-gray-400
    outline-none
    focus:outline-none
    rounded-full
  "
        />
      </div>
    </div>
  );
}
