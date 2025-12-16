 function ResultsSummary({ count, query }) {
  return (
    <p className="sm:text-xl md:text-2xl text-gray-500 mb-6 urdu-text">
      {count} نتائج ملے برائے "{query}"
    </p>
  );
}
export default ResultsSummary;
