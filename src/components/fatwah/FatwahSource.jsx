import { LiaExternalLinkAltSolid } from "react-icons/lia";

function FatwahSource({ source }) {
  if (!source?.url) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
      {/* Page Title from source */}
      {source.pageTitle && (
        <p className="text-xl md:text-2xl tracking-wide text-gray-600 mb-2 urdu-text">
          {source.pageTitle}
        </p>
      )}

      {/* Source label */}
      <span className="text-lg  md:text-2xl text-gray-500 mb-1 urdu-text">
        اصل ماخذ
      </span>

      <a
        href={source.url}
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
          {source.name}
        </span>
        <LiaExternalLinkAltSolid className="text-2xl md:text-3xl text-blue-600 opacity-80" />
      </a>
    </div>
  );
}

export default FatwahSource;
