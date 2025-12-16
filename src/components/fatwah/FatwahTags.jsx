function FatwahTags({ tags }) {
  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="
            px-3 py-1 rounded-full
            bg-gray-100 text-gray-600
            text-sm md:text-xl
            urdu-text
          "
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default FatwahTags;
