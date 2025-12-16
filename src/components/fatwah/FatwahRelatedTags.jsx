 function FatwahRelatedTags({ tags }) {
  if (!tags?.length) return null;

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-400 mb-2 tracking-wide">RELATED TOPICS</p>
      <div className="flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-xs rounded-md
              bg-gray-100 text-gray-500
              border border-gray-200
              select-none
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FatwahRelatedTags;
