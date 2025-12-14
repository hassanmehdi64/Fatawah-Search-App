import { useParams } from "react-router-dom";
import fatawahData from "../Json-data";
import NotFound from "./NotFound";

export default function FatwahDetail() {
  const { id } = useParams();

  const fatwah = fatawahData.find((item) => item.id === id);

  if (!fatwah) return <NotFound />;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen" dir="rtl">
      {/* Topic */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-right">
        {fatwah.topic}
      </h1>

      {/* Question */}
      <div className="mb-4">
        <p className="font-semibold mb-1">سوال:</p>
        <p className="text-gray-800">{fatwah.question}</p>
      </div>

      {/* Answer */}
      <div className="mb-6">
        <p className="font-semibold mb-1">جواب:</p>
        <p className="text-gray-700 whitespace-pre-line">{fatwah.answer}</p>
      </div>

      {/* Mujtahid & Source */}
      <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
        <img
          src={fatwah.mujtahid.logoUrl}
          alt={fatwah.mujtahid.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{fatwah.mujtahid.name}</span>
        <span>• {fatwah.source.name}</span>
      </div>

      {/* Original Source Link */}
      <a
        href={fatwah.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors"
      >
        اصل ماخذ کھولیں
      </a>
    </div>
  );
}
