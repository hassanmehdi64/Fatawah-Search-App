import { useNavigate } from "react-router-dom";

function PopularTags() {
  const navigate = useNavigate();
  const tags = ["نماز", "روزہ", "نکاح", "طہارت", "جماعت", "زکوٰۃ"];

  return (
    <div className="pb-6 sm:pb-8 text-center max-w-xl">
      <p className="text-xl sm:text-2xl font-semibold text-gray-600 mb-3 urdu-text">
        مقبول موضوعات
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
            className="
              urdu-text text-lg cursor-pointer
              px-6 py-1.5
              rounded-full
              bg-green-200 text-gray-800
              font-medium
              shadow-sm ring-1 ring-gray-200
              hover:bg-green-300 
              transition
              active:scale-95
            "
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PopularTags;