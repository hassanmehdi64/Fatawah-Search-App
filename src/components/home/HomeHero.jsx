import { BookOpenCheck } from "lucide-react";

function HomeHero() {
  return (
    <div className="flex flex-col items-center pt-10 sm:pt-16">
      {/* /* ================ Icon & accents ================ */}
      <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8 flex flex-col items-center relative">
        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div className="w-44 h-24 sm:w-56 sm:h-28 bg-gradient-to-r from-blue-200/40 to-blue-500/20 rounded-full filter blur-3xl opacity-70" />
        </div>

        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 p-1 rounded-2xl bg-white shadow-lg ring-1 ring-blue-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-white opacity-60" />
          <BookOpenCheck className="w-9 h-9 sm:w-14 sm:h-14 text-blue-700 z-10" />
        </div>
      </div>
      <h1
        className="
          text-3xl md:text-5xl
          font-extrabold
          text-transparent bg-clip-text
          bg-linear-to-r from-blue-500 to-blue-700
          text-center
          nato-urdu-text
          leading-tight
          heading-urdu
          tracking-normal
          pb-1
        "
      >
        فتاویٰ سرچ
      </h1>
      {/* Subtitle */}
      <p
        className="
          text-gray-700
          text-xl sm:text-2xl md:text-1xl
          text-center
         urdu-text
          leading-snug
          mt-1
        "
      >
        مستند اسلامی مسائل کی تلاش
      </p>
      {/* ===============Highlight line============== */}
      <p
        className="
          mt-1
          text-gray-700
          text-sm sm:text-base md:text-xl
          text-center
          max-w-lg
         urdu-text
          font-medium
          bg-green-100
          px-3 sm:px-5
          rounded-full
        "
      >
        معتبر علماء کے مستند اسلامی فتاویٰ میں تلاش کریں
      </p>
    </div>
  );
}

export default HomeHero;
