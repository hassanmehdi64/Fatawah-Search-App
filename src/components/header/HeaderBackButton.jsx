import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function HeaderBackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex items-center gap-1
        px-3 py-2
        rounded-lg
        text-gray-600 bg-gray-100
        hover:text-gray-900 hover:bg-gray-200
        cursor-pointer
        transition
        text-xl
      "
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="hidden sm:inline">Back</span>
    </button>
  );
}


export default HeaderBackButton;