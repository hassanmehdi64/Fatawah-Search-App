import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    // ✅ Navigate to AI results page
    navigate(`/ai-result?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="w-full">
      <div
        className="
          relative flex items-center
          w-full h-11 sm:h-14
          px-2 sm:px-2 gap-2
          bg-white
          border border-slate-200
          rounded-2xl
          shadow-sm
          transition-all
          focus-within:border-blue-400
          focus-within:ring-2 focus-within:ring-blue-200
        "
      >
        <SearchButton onClick={handleSearch} disabled={!query.trim()} />
        <SearchInput value={query} onChange={setQuery} onEnter={handleSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
