import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function SearchBar({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="w-full">
      {/* Focusable Container */}
      <div
        className="
          relative flex items-center
          w-full
          h-12 sm:h-14
          px-2 sm:px-3
          gap-2
          bg-white
          border border-slate-200
          rounded-2xl
          shadow-sm
          transition-all duration-200
          focus-within:border-slate-400
          focus-within:ring-2
          focus-within:ring-slate-300
        "
      >
        {/* 🔒 Button — SAME as you provided */}
        <button
          type="button"
          onClick={handleSearch}
          disabled={!query.trim()}
          aria-label="Search"
          className="
            flex items-center justify-center gap-1.5
            h-9 w-10 sm:h-10 sm:w-11 md:w-22
            shrink-0
            rounded-2xl
            bg-blue-500 text-white
            curosor-pointer
            shadow-sm
            hover:bg-blue-600 hover:shadow-md
            active:scale-95 active:shadow-sm
            transition-all duration-200 ease-out
            disabled:opacity-40 disabled:cursor-not-allowed
            focus:outline-none
            focus:ring-2 focus:ring-slate-400 focus:ring-offset-1
          "
        >
          <span className="text-sm font-medium leading-none">تلاش</span>
          <IoIosArrowRoundUp className="text-2xl -translate-y-[1px]" />
        </button>

        {/* Input */}
        <input
          type="text"
          dir="rtl"
          autoFocus
          placeholder="فتویٰ تلاش کریں..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="
            urdu-text
            flex-1
            h-full
            px-3 sm:px-4
            text-base sm:text-lg
            text-right
            text-slate-800
            placeholder-slate-400
            bg-transparent
            outline-none
          "
        />
      </div>
    </div>
  );
}
