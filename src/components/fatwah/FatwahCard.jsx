import FatwahQuestion from "./FatwahQuestion";
import FatwahAnswer from "./FatwahAnswer";
import FatwahMujtahid from "./FatwahMujtahid";
import FatwahSource from "./FatwahSource";
import FatwahTags from "./FatwahTags";
import { Link } from "react-router-dom";

function FatwahCard({ fatawah }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <FatwahQuestion question={fatawah.question} />
      <FatwahAnswer answer={fatawah.answer} />

      {/* 🔹 Info Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mb-8
          urdu-text
        "
      >
        <FatwahMujtahid mujtahid={fatawah.mujtahid} />
        <FatwahSource source={fatawah.source} />
      </div>

      <FatwahTags tags={fatawah.tags} />

      {/* 🔹 Improved Button */}
      <div className="pt-6 border-t flex justify-center">
        <Link
          to="/"
          className="
            inline-flex items-center justify-center
            px-6 sm:px-8
            py-2.5
            rounded-full
            bg-gray-900 text-white
            text-sm sm:text-lg
            hover:bg-black
            active:scale-95
            transition-all
            urdu-text
            shadow-sm
          "
        >
          ← واپس ہوم
        </Link>
      </div>
    </div>
  );
}

export default FatwahCard;
