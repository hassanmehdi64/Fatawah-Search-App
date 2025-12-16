import { Link } from "react-router-dom";

function SearchResultCard({ item, index }) {
  return (
    <article
      className="
        bg-white border border-slate-200
        rounded-2xl
        hover:border-blue-300
        hover:shadow-md
        transition
      "
    >
      <div className="p-6">
        <Link to={`/fatwah/${item.id || index}`}>
          <h2
            className="
              text-sm md:text-2xl font-bold text-slate-900
              leading-snug mb-3 line-clamp-1
              hover:text-blue-600 transition urdu-text
            "
          >
            <span className="text-xl md:text-2xl text-blue-600 font-bold ml-1">
              سوال:
            </span>
            {item.question || item.question_ur}
          </h2>
        </Link>

        <p className="text-gray-600 leading-relaxed urdu-text text-sm md:text-2xl font-semibold line-clamp-2">
          <span className="text-xl text-blue-600 font-bold ml-1">جواب:</span>
          {item.answer || item.answer_ur}
        </p>

        <Link
          to={`/fatwah/${item.id || index}`}
          className="text-sm md:text-2xl font-medium text-blue-600 hover:underline urdu-text"
        >
          مکمل جواب پڑھیں →
        </Link>
      </div>

      {item.mujtahid && (
        <div className="border-t border-gray-300 px-6 py-4 flex items-center gap-3 urdu-text">
          {item.mujtahid.logoUrl && (
            <img
              src={item.mujtahid.logoUrl}
              alt={item.mujtahid.name}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover ring-1 ring-gray-200"
            />
          )}
          <div>
            <p className="text-xl md:text-2xl text-gray-500">مجتہد</p>
            <p className="text-gray-700 font-semibold text-sm md:text-2xl">
              {item.mujtahid.name}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

export default SearchResultCard;
