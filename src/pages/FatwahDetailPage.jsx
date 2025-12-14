import { useParams, Link } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/Header";
import NoResults from "../components/NoResults";

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
          {/* Topic badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
              Family Law
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
              Marriage
            </span>
            {fatawah.source?.url && (
              <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
                Website
              </span>
            )}
          </div>

          {/* Question */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-blue-500 mb-2">سوال</p>
            <h1 className="text-2xl font-bold text-gray-900 leading-snug">
              {fatawah.question}
            </h1>
          </div>

          {/* Answer */}
          <div className="border border-gray-200 rounded-lg p-5 mb-6 bg-gray-50">
            <p className="text-xs font-semibold text-blue-500 mb-2">جواب</p>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
              {fatawah.answer}
            </p>
          </div>

          {/* Mujtahid & Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Mujtahid */}
            <div className="flex items-center gap-3 border rounded-lg p-4">
              <img
                src={fatawah.mujtahid.logoUrl}
                alt={fatawah.mujtahid.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">مجتہد</p>
                <p className="font-medium text-gray-800">
                  {fatawah.mujtahid.name}
                </p>
              </div>
            </div>

            {/* Source */}
            <div className="border rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">ماخذ</p>
              <p className="text-sm font-medium text-gray-700 mb-2">
                {fatawah.source.type}
              </p>
              <a
                href={fatawah.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
              >
                اصل ماخذ کھولیں
              </a>
            </div>
          </div>

          {/* Tags */}
          {fatawah.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {fatawah.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Back button */}
          <div className="pt-4 border-t">
            <Link
              to="/"
              className="inline-block px-6 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-black transition"
            >
              واپس ہوم
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
