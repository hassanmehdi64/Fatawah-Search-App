import SearchResultCard from "./SearchResultCard";

function SearchResultsList({ results }) {
  return (
    <div
      className="
        h-[540px auto]        
        sm:h-auto
        sm:max-h-[75vh]
        space-y-4
        pr-1
      "
    >
      {results.map((item, index) => (
        <SearchResultCard key={item.id || index} item={item} index={index} />
      ))}
    </div>
  );
}

export default SearchResultsList;
