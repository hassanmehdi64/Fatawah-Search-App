import { LiaExternalLinkAltSolid } from "react-icons/lia";

function FatwahSource({ source }) {
  if (!source?.url) return null;

  return (
    <div
      className="
        bg-gradient-to-br from-white to-slate-50
        border border-slate-200
        rounded-2xl
        p-4 sm:p-5
        shadow-sm
        transition
        hover:shadow-md
        urdu-text
      "
    >
      {/* Page Title */}
      {source.pageTitle && (
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-2">
          {source.pageTitle}
        </p>
      )}

      {/* Label */}
      <span className="block text-xs sm:text-sm md:text-base text-gray-400 mb-1">
        اصل ماخذ
      </span>

      {/* Source Link */}
      <a
        href={source.url}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2
          text-base sm:text-lg md:text-xl
          font-semibold text-slate-900
          px-3 py-2 rounded-lg
          hover:text-blue-600 hover:bg-blue-50
          transition
        "
      >
        <span className="border-b border-dotted border-gray-400 hover:border-blue-500">
          {source.name}
        </span>

        <LiaExternalLinkAltSolid className="text-lg md:text-2xl text-blue-600 opacity-80" />
      </a>
    </div>
  );
}

export default FatwahSource;
