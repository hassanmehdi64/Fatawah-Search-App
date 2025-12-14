import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { BookOpenCheck } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const tags = ["نماز", "روزہ", "زکوٰۃ", "نکاح", "طہارت", "جماعت"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef6ff] to-[#f8fbff] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-10 flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg hover:scale-110 transition-transform duration-300">
        <BookOpenCheck className="w-16 h-16 text-blue-600" />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 bg-clip-text drop-shadow-black text-center">
        Fatawah Search
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-gray-600 text-3xl text-center">
        مستند اسلامی مسائل کی تلاش
      </p>
      <p className="mt-2 text-gray-600 text-lg text-center">
        Search through authentic Islamic rulings from respected scholars
      </p>

      {/* Search */}
      <div className="mt-10 w-full max-w-2xl">
        <SearchBar />
      </div>

      {/* Popular Tags */}
      <div className="mt-8 text-center">
        <p className="text-2xl text-gray-500 mb-3">مقبول موضوعات</p>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => navigate(`/search?q=${tag}`)}
              className="px-4 py-1.5 rounded-full bg-white text-sm text-gray-700 shadow hover:bg-blue-50 hover:text-blue-600 transition active:scale-95"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
