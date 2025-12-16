import { useLocation, useNavigate } from "react-router-dom";
import HeaderBackButton from "./HeaderBackButton";
import HeaderToggleButton from "./HeaderToggleButton";
import HeaderHomeButton from "./HeaderHomeButton";
import HeaderSearch from "./HeaderSearch";

export default function Header({ initialQuery = "" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

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
          flex items-center
          gap-2 sm:gap-4
          px-3 sm:px-4 md:px-6
          py-2.5 sm:py-4
        "
      >
        <div className="sm:hidden">
          <HeaderToggleButton
            mode={isHome ? "home" : "back"}
            onClick={() => (isHome ? navigate("/") : navigate(-1))}
          />
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <HeaderBackButton />
          <HeaderHomeButton />
        </div>

        <div className="flex-1 min-w-0">
          <HeaderSearch initialQuery={initialQuery} />
        </div>
      </div>
    </header>
  );
}
