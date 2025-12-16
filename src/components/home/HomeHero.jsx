import { BookOpenCheck } from "lucide-react";

function HomeHero() {
  return (
    <div className="flex flex-col items-center pt-6 sm:pt-16">
      {/* Icon */}
      <div
        className="
          flex items-center justify-center
          w-16 h-16 sm:w-20 sm:h-20
          mb-4
          rounded-2xl
          bg-white
          shadow-md
          ring-1 ring-blue-100
        "
      >
        <BookOpenCheck className="w-10 h-10 sm:w-14 sm:h-14 text-blue-600" />
      </div>

      {/* Title */}
      <h1
        className="
          text-4xl sm:text-5xl md:text-7xl
          font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-500 to-blue-700
          text-center
          heading
          leading-tight
          tracking-[-0.02em]
          border-b-1 border-blue-300 border-dotted pb-1
        "
      >
        فتاویٰ سرچ
      </h1>

      {/* Subtitle */}
      <p
        className="
          text-gray-700
          text-xl sm:text-2xl md:text-3xl
          text-center
          urdu-text
          leading-snug
          mt-1
        "
      >
        مستند اسلامی مسائل کی تلاش
      </p>

      {/* Highlight line */}
      <p
        className="
          mt-2
          text-gray-700
          text-sm sm:text-base md:text-2xl
          text-center
          max-w-lg
          urdu-text
          bg-green-200
          px-4 sm:px-5
          py-1.5
          rounded-full
        "
      >
        معتبر علماء کے مستند اسلامی فتاویٰ میں تلاش کریں
      </p>
    </div>
  );
}

export default HomeHero;
