import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiExclamationCircle } from "react-icons/hi";

 function NotFound() {
  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        flex items-center justify-center
        bg-slate-50
        px-4
      "
    >
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <HiExclamationCircle className="text-6xl text-blue-500" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">404</h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 mb-6 urdu-text">
          معذرت! یہ صفحہ موجود نہیں ہے
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            px-5 py-0
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
      </div>
    </div>
  );
}

export default NotFound;