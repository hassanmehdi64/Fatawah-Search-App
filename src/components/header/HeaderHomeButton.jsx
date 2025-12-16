import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function HeaderHomeButton() {
  return (
    <Link
      to="/"
      className="
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-blue-100
        hover:bg-blue-200
        transition-colors
        shadow
      "
    >
      <Home className="w-6 h-6 text-blue-600" />
    </Link>
  );
}

export default HeaderHomeButton;