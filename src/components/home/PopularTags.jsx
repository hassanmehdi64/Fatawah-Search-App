import { useNavigate } from "react-router-dom";

function PopularTags() {
  const navigate = useNavigate();
  const tags = ["نماز", "روزہ", "نکاح", "طہارت", "جماعت", "زکوٰۃ"];

  return (
    <div className="w-full max-w-6xl mx-auto pb-6 sm:pb-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {/* Tags first */}
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
            className="
              urdu-text
              cursor-pointer
              text-sm sm:text-base md:text-xl
              px-4 sm:px-6 py-1 sm:py-2
              rounded-full
              bg-green-200 text-gray-900
              font-medium
              shadow-sm ring-1 ring-gray-200
              hover:bg-green-300
              transition
              active:scale-95
              focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
            "
          >
            {tag}
          </button>
        ))}

        {/* Label at end */}
        <span className="urdu-text text-base sm:text-xl md:text-2xl font-semibold text-gray-600 whitespace-nowrap scroll-mb-4">
          مقبول موضوعات:
        </span>
      </div>
    </div>
  );
}

export default PopularTags;
