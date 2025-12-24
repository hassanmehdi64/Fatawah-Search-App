import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchAIResponse } from "../services/DataFetcher";

import Header from "../components/header/Header";
import LoadingState from "../components/loading/LoadingState";
import AIAnswerStream from "../components/AI/AIAnswerStream";
import FollowUpInput from "../components/AI/FollowUpInput";

function AiResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [loading, setLoading] = useState(Boolean(query));
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      setResponse(null);
      return;
    }

    let isMounted = true; // 🛡 prevents state update after unmount
    setLoading(true);

    const load = async () => {
      try {
        const data = await fetchAIResponse(query);
        if (isMounted) setResponse(data || null);
      } catch (err) {
        console.error("AI fetch error:", err);
        if (isMounted) setResponse(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
      dir="rtl"
    >
      {/* ===== HEADER ===== */}
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* ===== QUESTION ===== */}
        {query && (
          <div className="mb-8 bg-white/90 backdrop-blur-md border border-slate-200/70 rounded-3xl px-6 py-5 sm:px-8 sm:py-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 urdu-text leading-relaxed">

              <span className="inline-flex items-center text-[11px] sm:text-xs md:text-xl font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full ml-3">
                آپ کا سوال
              </span>
              {query}
            </h1>
          </div>
        )}

        {/* ===== LOADING ===== */}
        {loading && (
          <div className="mt-20">
            <LoadingState />
          </div>
        )}

        {/* ===== AI RESPONSE ===== */}
        {!loading && response && (
          <>
            <AIAnswerStream response={response} />
            <FollowUpInput />
          </>
        )}

        {/* ===== NO RESULT ===== */}
        {!loading && !response && (
          <div className="text-center mt-24">
            <p className="text-slate-500 urdu-text text-base sm:text-lg">
              اس سوال کے لیے فی الحال کوئی جواب دستیاب نہیں۔
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiResultPage;
