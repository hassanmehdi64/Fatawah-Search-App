import HomeHero from "../components/home/HomeHero";
import PopularTags from "../components/home/PopularTags";
import SearchSection from "../components/home/SearchSection";

export default function Home() {
  return (
    // Page wrapper — prevents horizontal scroll
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Content container — centers and constrains width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <HomeHero />
        <SearchSection />
        <PopularTags />
      </div>
    </div>
  );
}
