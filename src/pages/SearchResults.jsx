import { useSearchParams, Link } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/Header";
import NoResults from "../components/NoResults";

export default function Search() {
  const [searchParams] = useSearchParams();
  const rawQuery = searchParams.get("q") || "";
  const query = rawQuery.trim().toLowerCase();

  if (!query) return <NoResults />;

  const results = fatawahData.filter((item) => {
    return (
      item.question?.toLowerCase().includes(query) ||
      item.question_ur?.toLowerCase().includes(query) ||
      item.answer?.toLowerCase().includes(query) ||
      item.answer_ur?.toLowerCase().includes(query) ||
      item.topic?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Result summary */}
        <p className="text-sm text-gray-500 mb-6">
          {results.length} نتائج ملے برائے "{rawQuery}"
        </p>

        {results.length === 0 ? (
          <NoResults />
        ) : (
          <div className="space-y-6">
            {results.map((item, index) => (
              <article
                key={item.id ?? index}
                className="
                  bg-white border border-slate-200
                  rounded-2xl
                  hover:border-blue-300
                  hover:shadow-md
                  transition
                "
              >
                <div className="p-6">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-4"></div>

                  {/* Question */}
                  <Link to={`/fatwah/${item.id ?? index}`}>
                    <h2
                      className="
                        text-2xl font-bold text-slate-900
                        leading-snug mb-3 line-clamp-1
                        hover:text-blue-600 transition
                      "
                    >
                      <span className="text-xl text-blue-600 font-bold">
                        سوال:  {" "}
                      </span>

                      {item.question || item.question_ur}
                    </h2>
                  </Link>

                  {/* Answer preview */}
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    <span className="text-xl text-blue-600 font-bold">
                      {" "}
                      جواب :{" "}
                    </span>
                    {item.answer || item.answer_ur}
                  </p>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-300 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                  {/* Mujtahid */}
                  {item.mujtahid && (
                    <div className="flex items-center gap-3">
                      {item.mujtahid.logoUrl && (
                        <img
                          src={item.mujtahid.logoUrl}
                          alt={item.mujtahid.name}
                          className="w-9 h-9 rounded-full object-cover ring-1 ring-gray-200"
                        />
                      )}
                      <div className="text-sm">
                        <p className="text-gray-700 font-medium">
                          {item.mujtahid.name}
                        </p>
                        <p className="text-xs text-gray-400">مجتہد</p>
                      </div>
                    </div>
                  )}

                  {/* Read more */}
                  <Link
                    to={`/fatwah/${item.id ?? index}`}
                    className="
                      text-sm font-medium text-blue-600
                      hover:underline
                      whitespace-nowrap
                    "
                  >
                    مکمل جواب پڑھیں →
                  </Link>
                </div>

                {/* Tags */}
                {/* Topic & Tags */}
                {(item.topic || (item.tags && item.tags.length > 0)) && (
                  <div className="px-6 pb-5 flex flex-wrap items-center gap-2">
                    {/* Topic badge */}
                    {item.topic && (
                      <span
                        className="
          px-3 py-1 rounded-full
          text-xs font-semibold
          bg-blue-50 text-blue-600
          ring-1 ring-blue-100
        "
                      >
                        {item.topic}
                      </span>
                    )}

                    {/* Tags */}
                    {item.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="
          px-2.5 py-1
          rounded-md
          text-xs
          bg-slate-100 text-slate-600
          hover:bg-slate-200
          transition
        "
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
