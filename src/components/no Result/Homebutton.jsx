import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Homebutton = () => {
  return (
    <Link
      to="/"
      className="
        inline-flex items-center gap-2
        px-5 py-2
        rounded-2xl
        bg-blue-600 text-white
        text-sm md:text-xl font-medium
        hover:bg-blue-700
        transition
        shadow-sm
        urdu-text
      "
    >
      ہوم
      <IoArrowBackOutline className="text-lg" />
    </Link>
  );
};

export default Homebutton;
