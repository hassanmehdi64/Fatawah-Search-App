import { useParams } from "react-router-dom";
import fatawahData from "../Json-data";
import Header from "../components/header/Header";
import NoResults from "../components/no Result/NoResults";
import FatwahCard from "../components/fatwah/FatwahCard";

export default function FatwahDetailPage() {
  const { id } = useParams();
  const fatawah = fatawahData.find((item) => item.id === id);

  if (!fatawah) return <NoResults />;

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <Header />

      {/* changed: py-10 -> pt-10 (remove bottom spacing) */}
      <main className="max-w-auto mx-auto px-4 pt-10">
        <FatwahCard fatawah={fatawah} />
      </main>
    </div>
  );
}
