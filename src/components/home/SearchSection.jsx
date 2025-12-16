import SearchBar from "../searchbar/SearchBar";
import MujtahideenSlider from "../slider/MujtahideenSlider";

 function SearchSection() {
  return (
    <div
      className="
        w-full
        max-w-2xl
        flex flex-col
        gap-4
        flex-grow
        justify-center
      "
    >
      <SearchBar />
      <MujtahideenSlider />
    </div>
  );
}

export default SearchSection;