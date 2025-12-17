import { useNavigate } from "react-router-dom";

function PopularTags() {
  const navigate = useNavigate();
  const tags = ["نماز", "روزہ", "نکاح", "طہارت", "جماعت", "زکوٰۃ"];

  return (
    <div className="w-full max-w-6xl mx-auto pb-6 sm:pb-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

        {/* Tags */}
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
            className="
              urdu-text
              cursor-pointer
              inline-flex items-center justify-center
              text-xs sm:text-sm 
              px-3 py-1
              mb-7
              rounded-md
              bg-green-100 text-black
              border border-green-200
              hover:bg-green-200
              transition-transform
              active:scale-95
              focus:outline-none focus-visible:ring-1 focus-visible:ring-green-300
            "
          >
            {tag}
          </button>
        ))}

        {/* Label placed after tags to appear on the right side */}
        <span className="urdu-text text-base sm:text-lg md:text-xl font-semibold text-gray-600 whitespace-nowrap mr-2 sm:mr-4 mb-7" >
          مقبول موضوعات:
        </span>
      </div>
    </div>
  );
}

export default PopularTags;
