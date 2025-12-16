import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function HeaderHomeButton() {
  return (
    <Link
      to="/"
      className="
        flex items-center justify-center
       md:w-14 md:h-14
       p-2
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