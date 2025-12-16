import { ArrowLeft, Home } from "lucide-react";

function HeaderToggleButton({ mode = "back", onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        w-10 h-10
        rounded-full
        bg-gray-100
        hover:bg-gray-200
        transition
      "
    >
      {mode === "back" ? (
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      ) : (
        <Home className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}

export default HeaderToggleButton;
