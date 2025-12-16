import SearchBar from "../searchbar/SearchBar";

function HeaderSearch({ initialQuery }) {
  return (
    <div className="flex-1">
      <SearchBar initialQuery={initialQuery} />
    </div>
  );
}

export default HeaderSearch;
