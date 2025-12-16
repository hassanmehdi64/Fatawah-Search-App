import { useSearchParams } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/header/Header";
import NoResults from "../components/no Result/NoResults";
import ResultsSummary from "../components/search/ResultsSummary";
import SearchResultsList from "../components/search/SearchResultsList";

export default function SearchResults() {
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

  // ✅ ONLY FIRST 3 RESULTS
  const visibleResults = results.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <ResultsSummary count={results.length} query={rawQuery} />

        {visibleResults.length === 0 ? (
          <NoResults />
        ) : (
          <SearchResultsList results={visibleResults} />
        )}
      </main>
    </div>
  );
}
