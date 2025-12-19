import { ArrowLeft, Menu, X } from "lucide-react";

function HeaderToggleButton({ mode = "menu", onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle navigation"
      className="
        flex items-center justify-center
        w-10 h-10
        rounded-full
        bg-gray-100
        hover:bg-gray-200
        active:scale-95
        transition
      "
    >
      {mode === "back" && <ArrowLeft className="w-5 h-5 text-gray-700" />}

      {mode === "menu" && <Menu className="w-5 h-5 text-gray-700" />}

      {mode === "close" && <X className="w-5 h-5 text-gray-700" />}
    </button>
  );
}

export default HeaderToggleButton;
