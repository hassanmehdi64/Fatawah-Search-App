import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { BookOpenCheck } from "lucide-react";
import MujtahideenSlider from "../components/MujtahideenSlider";

export default function Home() {
  const navigate = useNavigate();
  const tags = ["نماز", "روزہ", "نکاح", "طہارت", "جماعت", "زکوٰۃ"];

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center px-4 sm:px-6 bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Top Section */}
      <div className="flex flex-col items-center mt-8">
        <div
          className="mb-4 flex items-center justify-center w-24 h-24 rounded-3xl
          bg-white shadow-lg ring-1 ring-blue-100"
        >
          <BookOpenCheck className="w-14 h-14 text-blue-600" />
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700
          text-center"
        >
          Fatawah Search
        </h1>

        <p className="mt-2 text-gray-700 text-2xl sm:text-3xl text-center urdu-text">
          مستند اسلامی مسائل کی تلاش
        </p>

        <p className="mt-1 text-gray-500 text-sm sm:text-base text-center max-w-lg">
          Search through authentic Islamic rulings from respected scholars
        </p>
      </div>

      {/* Middle Section */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-2xl space-y-4">
        <SearchBar />
        <MujtahideenSlider />
      </div>

      {/* Bottom Section */}
      <div className="mb-6 text-center max-w-xl">
        <p className="text-xl sm:text-2xl font-semibold text-gray-600 mb-3 urdu-text">
          مقبول موضوعات
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
              className="
                urdu-text text-lg
                px-6 py-1.5 rounded-full
                bg-white text-gray-700
                shadow-sm ring-1 ring-gray-200
                hover:bg-blue-50 hover:text-blue-600
                transition
                active:scale-95
              "
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
