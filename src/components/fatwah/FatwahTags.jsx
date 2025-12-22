import { useNavigate } from "react-router-dom";

function FatwahTags({ tags }) {
  const navigate = useNavigate();
  if (!tags?.length) return null;

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 urdu-text">
      {tags.map((tag, idx) => (
        <button
          key={idx}
          onClick={() =>
            navigate(`/search?q=${encodeURIComponent(tag)}`, {
              replace: true,
            })
          }
          className="
            cursor-pointer
            inline-flex items-center justify-center
            text-xs sm:text-sm md:text-base
            px-3 py-1
            rounded-md
            bg-green-100 text-black
            border border-green-200
            hover:bg-green-200
            transition-transform
            active:scale-95
            focus:outline-none
            focus-visible:ring-1
            focus-visible:ring-green-300
          "
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}

export default FatwahTags;
