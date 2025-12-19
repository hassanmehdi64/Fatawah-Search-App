import { useSearchParams } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/header/Header";
import NoResults from "../components/no Result/NoResults";
import SearchResultsList from "../components/search/SearchResultsList";
import CopyrightFooter from "../components/footer/CopyrightFooter";
import Pagination from "../components/pagination/Pagination";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const rawQuery = searchParams.get("q") || "";
  const query = rawQuery.trim().toLowerCase();

  if (!query) return <NoResults />;

  const results = fatawahData.filter((item) => {
    return (
      item.question?.toLowerCase().includes(query) ||
      item.answer?.toLowerCase().includes(query) ||
      item.question_ur?.toLowerCase().includes(query) ||
      item.answer_ur?.toLowerCase().includes(query) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50" dir="rtl">
      <Header />

      {/* Main content grows to push footer down */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {results.length === 0 ? (
          <NoResults />
        ) : (
          <SearchResultsList results={results} />
        )}
      </main>

      {/* Footer */}
      <CopyrightFooter />
    </div>
  );
}
