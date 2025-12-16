import FatwahRelatedTags from "./FatwahRelatedTags";
import FatwahQuestion from "./FatwahQuestion";
import FatwahAnswer from "./FatwahAnswer";
import FatwahMujtahid from "./FatwahMujtahid";
import FatwahSource from "./FatwahSource";
import FatwahTags from "./FatwahTags";
import { Link } from "react-router-dom";

function FatwahCard({ fatawah }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <FatwahRelatedTags tags={fatawah.tags_en} />
      <FatwahQuestion question={fatawah.question} />
      <FatwahAnswer answer={fatawah.answer} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 urdu-text">
        <FatwahMujtahid mujtahid={fatawah.mujtahid} />
        <FatwahSource source={fatawah.source} />
      </div>

      <FatwahTags tags={fatawah.tags} />

      <div className="pt-4 border-t text-center">
        <Link
          to="/"
          className="
            inline-block px-6 py-2
            rounded-md bg-gray-900 text-white
            text-lg hover:bg-black transition
            urdu-text
          "
        >
          واپس ہوم
        </Link>
      </div>
    </div>
  );
}

export default FatwahCard;
