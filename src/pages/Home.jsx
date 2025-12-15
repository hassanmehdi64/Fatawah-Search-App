import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { BookOpenCheck } from "lucide-react";
import MujtahideenSlider from "../components/MujtahideenSlider";

export default function Home() {
  const navigate = useNavigate();
  const tags = ["نماز", "روزہ", "نکاح", "طہارت", "جماعت", "زکوٰۃ"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Logo */}
      <div
        className="mb-10 flex items-center justify-center w-28 h-28 rounded-3xl 
        bg-white shadow-xl ring-1 ring-blue-100
        hover:scale-105 transition-transform duration-300"
      >
        <BookOpenCheck className="w-16 h-16 text-blue-600" />
      </div>

      {/* Title */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
        text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 
        text-center tracking-tight"
      >
        Fatawah Search
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-700 text-2xl sm:text-3xl text-center font-medium">
        مستند اسلامی مسائل کی تلاش
      </p>
      <p className="mt-2 text-gray-500 text-base sm:text-lg text-center max-w-xl">
        Search through authentic Islamic rulings from respected scholars
      </p>

      {/* Search */}
      <div className="mt-10 w-full max-w-2xl space-y-4">
        <SearchBar />
        <MujtahideenSlider />
      </div>

      {/* Popular Tags */}
      <div className="mt-10 text-center max-w-xl">
        <p className="text-xl font-semibold text-gray-600 mb-4">
          مقبول موضوعات
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
              className="
                px-5 py-2 rounded-full
                bg-white text-gray-700 text-base sm:text-lg
                shadow-sm ring-1 ring-gray-200
                hover:bg-blue-50 hover:text-blue-600 hover:ring-blue-200
                transition-all duration-200
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
