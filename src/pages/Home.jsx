import HomeHero from "../components/home/HomeHero";
import PopularTags from "../components/home/PopularTags";
import SearchSection from "../components/home/SearchSection";


export default function Home() {
  return (
    <main
      className="
        h-svh
        bg-gradient-to-b from-blue-50 via-white to-white
        flex items-center justify-center
        px-4
        overflow-hidden
      "
    >
      <section
        className="
          w-full max-w-6xl
          flex flex-col
          items-center
          justify-center
          gap-3 sm:gap-6
          text-center
        "
      >
        {/* Hero */}
        <HomeHero />

        {/* Search */}
        <div className="w-full flex justify-center">
          <SearchSection />
        </div>

        {/* Tags */}
        <div className="w-full flex justify-center">
          <PopularTags />
        </div>
      </section>
    </main>
  );
}
