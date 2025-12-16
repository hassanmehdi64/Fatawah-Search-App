import HomeHero from "../components/home/HomeHero";
import PopularTags from "../components/home/PopularTags";
import SearchSection from "../components/home/SearchSection";

export default function Home() {
  return (
    <div
      className="
        min-h-screen
        flex flex-col items-center
        px-4 sm:px-6
        bg-gradient-to-b from-blue-50 via-white to-white
      "
    >
      <HomeHero />
      <SearchSection />
      <PopularTags />
    </div>
  );
}
