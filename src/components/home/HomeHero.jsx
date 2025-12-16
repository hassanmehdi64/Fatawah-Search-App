import { BookOpenCheck } from "lucide-react";

function HomeHero() {
  return (
    <div className="flex flex-col items-center  sm:pt-20">
      <div
        className="
          flex items-center justify-center
          w-20 h-20
          mt-2 p-2
          mb-4
          md:w-20 md:h-20
          rounded-2xl
          bg-white
          shadow-lg
          ring-1 ring-blue-100
        "
      >
        <BookOpenCheck className="w-10 h-10 md:w-16 md:h-16 text-blue-600" />
      </div>

      <h1
        className="
          text-5xl  md:text-7xl
          font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-500 to-blue-700
          text-center urdu-text
          leading-tight
        "
      >
        فتاویٰ تلاش
      </h1>

      <p
        className="
          text-gray-700
          text-2xl sm:text-3xl
          text-center
          urdu-text
          leading-snug
        "
      >
        مستند اسلامی مسائل کی تلاش
      </p>

      <p
        className="
          mt-0 mb-2
          text-gray-700 md:text-2xl
          text-center
          max-w-lg
          urdu-text
          bg-green-200
          px-5 py-1
          rounded-3xl
        "
      >
        معتبر علماء کے مستند اسلامی فتاویٰ میں تلاش کریں
      </p>
    </div>
  );
}

export default HomeHero;