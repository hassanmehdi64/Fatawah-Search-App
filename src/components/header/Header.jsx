import HeaderBackButton from "./HeaderBackButton";
import HeaderHomeButton from "./HeaderHomeButton";
import HeaderSearch from "./HeaderSearch";

export default function Header({ initialQuery = "" }) {
  return (
    <header
      className="
      sticky top-0 z-20
      bg-white/90 backdrop-blur-md
      border-b border-gray-200
      shadow-sm
    "
    >
      <div
        className="
        max-w-6xl mx-auto
        flex items-center gap-4
        px-4 md:px-6 py-4
      "
      >
        <HeaderBackButton />
        <HeaderHomeButton />
        <HeaderSearch initialQuery={initialQuery} />
      </div>
    </header>
  );
}
