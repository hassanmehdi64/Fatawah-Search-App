const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  const MAX_PAGES = 4;

  const startPage = Math.min(
    totalPages,
    Math.max(currentPage + Math.floor(MAX_PAGES / 2), MAX_PAGES)
  );

  const pages = Array.from(
    { length: MAX_PAGES },
    (_, i) => startPage - i
  ).filter((page) => page >= 1 && page <= totalPages);

  return (
    <div className="flex justify-center items-center gap-2 mt-8 text-sm">
      {/* ================Prev — LEFT============== */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border border-gray-300 bg-gray-200 hover:bg-gray-100
                   disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Prev
      </button>

      {/*========= Page Numbers ============*/}
      {[...pages].reverse().map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded-md border transition
      ${
        currentPage === page
          ? "bg-blue-500 text-white border-blue-500 shadow-sm"
          : "bg-white hover:bg-gray-100 border-gray-300"
      }`}
        >
          {page}
        </button>
      ))}

      {/* ================Next — RIGHT============== */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border border-gray-300 bg-gray-200 hover:bg-gray-100
                   disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
