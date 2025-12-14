import FatawahCard from "./FatawahCard";

export default function ResultsList({ results }) {
  return (
    <div className="grid gap-6">
      {results.map((item) => (
        <FatawahCard key={item.id} fatawah={item} />
      ))}
    </div>
  );
}
    