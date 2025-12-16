import SearchResultCard from "./SearchResultCard";

function SearchResultsList({ results }) {
  return (
    <div className="space-y-6">
      {results.map((item, index) => (
        <SearchResultCard key={item.id || index} item={item} index={index} />
      ))}
    </div>
  );
}

export default SearchResultsList;
