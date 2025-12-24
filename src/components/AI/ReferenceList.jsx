function ReferenceList({ references }) {
  if (!references?.length) return null;

  return (
    <div className="mt-0 animate-fadeIn">
      <ul className="space-y-3">
        {references.map((ref, index) => (
          <li
            key={index}
            className="
              bg-white
              border border-slate-200
              rounded-xl
              px-4 py-3
              hover:shadow-md
              transition
            "
          >
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              <span className="text-sm  md:text-xl font-semibold text-slate-600 mb-4 urdu-text">
                حوالہ جات : 
              </span>{" "}
              {index + 1}. {ref.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReferenceList;
