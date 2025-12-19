import { Link } from "react-router-dom";

function SearchResultCard({ item, index }) {
  return (
    <Link to={`/fatwah/${item.id || index}`} className="block">
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
          {/* ==================Question =============*/}
          <h2
            className="
              text-sm md:text-xl font-bold text-slate-900
              leading-snug mb-3 line-clamp-1
              hover:text-blue-600 transition urdu-text
            "
          >
            <span className="text-xl md:text-2xl text-blue-600 font-bold ml-1">
              سوال:
            </span>
            {item.question || item.question_ur}
          </h2>

          {/*================== Answer=============== */}
          <p className="text-gray-600 leading-relaxed urdu-text text-sm md:text-2xl font-semibold line-clamp-2 mb-4">
            <span className="text-xl text-blue-600 font-bold ml-1">جواب:</span>
            {item.answer || item.answer_ur}
          </p>

          {/* ========Bottom Row========= */}
          <div className="flex justify-between items-center urdu-text">
            {/*========== Mujtahid ========= */}
            {item.mujtahid && (
              <div className="flex items-center gap-2 text-gray-600">
                {item.mujtahid.logoUrl && (
                  <img
                    src={item.mujtahid.logoUrl}
                    alt={item.mujtahid.name}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover ring-1 ring-gray-200"
                  />
                )}
                <span className="text-xs md:text-lg font-semibold">
                  {item.mujtahid.name}
                </span>
              </div>
            )}
            {/* =======Read More======== */}
            <span
              className="
    inline-flex items-center gap-2
    px-3 py-1.5
    rounded-full
    text-sm md:text-2xl font-medium
    text-blue-600
    bg-blue-50
    border border-blue-100
    transition
    group-hover:bg-blue-100
  "
            >
              {/* Left Arrow Icon */}
              مکمل جواب پڑھیں
              <span className="text-base md:text-2xl">←</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default SearchResultCard;
