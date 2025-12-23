import { useState } from "react";
import SearchResultCard from "./SearchResultCard";
import Pagination from "../pagination/Pagination";

function SearchResultsList({ results }) {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 2;

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedResults = results.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-4 pr-1">
      {/* Results */}
      {paginatedResults.map((item, index) => (
        <SearchResultCard key={item.id || index} item={item} index={index} />
      ))}

      {/* Pagination */}
      <Pagination
        className="mt-6"
        dir="rtl"
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default SearchResultsList;
