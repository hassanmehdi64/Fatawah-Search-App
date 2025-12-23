import { useSearchParams } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/header/Header";
import NoResults from "../components/no Result/NoResults";
import SearchResultsList from "../components/search/SearchResultsList";
import CopyrightFooter from "../components/footer/CopyrightFooter";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const tagParam = searchParams.get("tag");
  const queryParam = searchParams.get("q");

  let results = [];

  // ====TAG BASED RESULTS ========
  if (tagParam) {
    const tag = tagParam.trim().toLowerCase();

    results = fatawahData.filter((item) =>
      item.tags?.some((t) => t.toLowerCase() === tag)
    );
  }

  //=====SEARCH RESULTS==========
  else if (queryParam) {
    const query = queryParam.trim().toLowerCase();

    results = fatawahData.filter((item) => {
      return (
        item.question?.toLowerCase().includes(query) ||
        item.answer?.toLowerCase().includes(query) ||
        item.question_ur?.toLowerCase().includes(query) ||
        item.answer_ur?.toLowerCase().includes(query) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }

  // ============= NOTHING TO SEARCH-=============
  else {
    return <NoResults />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50" dir="ltr">
      <Header initialQuery={queryParam || tagParam || ""} />

      {/*----------------- MAIN CONTENT ------------*/}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {results.length === 0 ? (
          <NoResults />
        ) : (
          <SearchResultsList results={results} />
        )}
      </main>

      {/* =========FOOTER========= */}
      <CopyrightFooter className="mt-auto w-full" />
    </div>
  );
}
