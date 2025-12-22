import { IoIosArrowRoundUp } from "react-icons/io";

function SearchButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Search"
      className="
        flex items-center justify-center cursor-pointer
        h-9 w-12
        sm:h-10 sm:w-auto
        px-0 sm:px-3
        shrink-0
        rounded-xl
        bg-blue-500 text-white
        shadow-sm
        hover:bg-blue-600 
        active:scale-95
        transition-all duration-200
        disabled:opacity-40 disabled:cursor-not-allowed
        focus:outline-none
        focus:ring-2 focus:ring-blue-300 focus:ring-offset-1
      "
    >
      <span className="hidden sm:inline text-sm font-medium ml-1">تلاش</span>

      <IoIosArrowRoundUp className="text-2xl -translate-y-[1px]" />
    </button>
  );
}

export default SearchButton;
