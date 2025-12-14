import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import FatawahCard from "../components/Results/FatawahCard";
import fatawahData from "../Json-data";

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("q") || "";
  const results = fatawahData.filter(
    (item) =>
      item.question.includes(query) ||
      item.topic.includes(query) ||
      item.tags?.some((tag) => tag.includes(query))
  );

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <Header initialQuery={query} />

      <main className="max-w-6xl mx-auto px-4 py-10 text-right">
        {/* Search Summary */}
        {query && (
          <div className="mb-8 bg-white rounded-lg shadow-sm p-4 border">
            <p className="text-gray-700">
              {results.length > 0 ? (
                <>
                  <span className="font-semibold text-blue-600">
                    {results.length}
                  </span>{" "}
                  نتائج ملیں برائے{" "}
                  <span className="font-semibold text-gray-900">"{query}"</span>
                </>
              ) : (
                <>
                  کوئی نتیجہ نہیں ملا برائے{" "}
                  <span className="font-semibold text-gray-900">"{query}"</span>
                </>
              )}
            </p>
          </div>
        )}

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid gap-6">
            {results.map((item) => (
              <FatawahCard key={item.id} fatawah={item} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl shadow-sm border p-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <span className="text-3xl">🔍</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              کوئی نتیجہ نہیں ملا
            </h2>

            <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
              آپ کی تلاش سے متعلق کوئی فتویٰ موجود نہیں۔ براہ کرم مختلف الفاظ
              آزمائیں یا مشہور موضوعات دیکھیں۔
            </p>

            <a
              href="/"
              className="px-6 py-3 rounded-md bg-gray-900 text-white text-sm hover:bg-black transition"
            >
              واپس ہوم
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
