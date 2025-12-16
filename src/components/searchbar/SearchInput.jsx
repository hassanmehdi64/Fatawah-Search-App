function SearchInput({ value, onChange, onEnter }) {
  return (
    <input
      type="text"
      dir="rtl"
      autoFocus
      placeholder="فتویٰ تلاش کریں..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onEnter()}
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
        min-w-0
      "
    />
  );
}

export default SearchInput;
