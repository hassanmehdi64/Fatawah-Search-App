import { useParams, Link } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/Header";
import NoResults from "../components/NoResults";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function FatwahDetailPage() {
  const { id } = useParams();
  const fatawah = fatawahData.find((item) => item.id === id);

  if (!fatawah) return <NoResults />;

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Related English Tags */}
          {fatawah.tags_en?.length > 0 && (
            <div className="mb-6">
              <p className="text-xs text-gray-400 mb-2 tracking-wide">
                RELATED TOPICS
              </p>
              <div className="flex flex-wrap gap-2">
                {fatawah.tags_en.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-xs rounded-md
                      bg-gray-100 text-gray-500
                      border border-gray-200
                      select-none
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Question */}
          <div className="mb-6 urdu-text">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              <span className="text-2xl md:text-3xl font-semibold text-blue-500 ml-2">
                سوال:
              </span>
              {fatawah.question}
            </h1>
          </div>

          {/* Answer */}
          <div className="border border-gray-200 rounded-lg p-5 mb-8 bg-gray-50 urdu-text text-xl md:text-3xl ">
            <p className="text-2xl font-semibold text-blue-500 mb-2">جواب</p>
            <p className="text-gray-800 text-xl leading-[2.2] whitespace-pre-line">
              {fatawah.answer}
            </p>
          </div>

          {/* Mujtahid & Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 urdu-text">
            {/* Mujtahid */}
            <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <img
                src={fatawah.mujtahid.logoUrl}
                alt={fatawah.mujtahid.name}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <p className="text-xl md:text-2xl tracking-wide text-gray-600 mb-1">
                  مجتہد
                </p>
                <p className="text-xl md:text-3xl font-semibold text-gray-800">
                  {fatawah.mujtahid.name}
                </p>
              </div>
            </div>

            {/* Source */}
            {fatawah.source?.url && (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-2xl tracking-wide text-gray-600 font-semibold mb-2 urdu-text">
                  اصل ماخذ
                </p>

                <a
                  href={fatawah.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
    inline-flex items-center gap-3
    text-2xl font-semibold text-gray-800
    px-3 py-2 rounded-lg
    hover:text-blue-700 hover:bg-blue-50
    transition-all
  "
                >
                  <span className="border-b-2 border-dotted border-gray-400 hover:border-blue-600">
                    {fatawah.source.name}
                  </span>
                  <LiaExternalLinkAltSolid className="text-2xl md:text-3xl text-blue-600 opacity-80" />
                </a>
              </div>
            )}
          </div>

          {/* Urdu Tags */}
          {fatawah.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {fatawah.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm md:text-xl  urdu-text"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="pt-4 border-t text-center">
            <Link
              to="/"
              className="inline-block px-6 py-2 rounded-md bg-gray-900 text-white text-lg hover:bg-black transition urdu-text"
            >
              واپس ہوم
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
