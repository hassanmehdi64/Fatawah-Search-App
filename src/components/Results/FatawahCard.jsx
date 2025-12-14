import { useNavigate } from "react-router-dom";

export default function FatawahCard({ fatawah }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/fatwah/${fatawah.id}`)}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-2">
        {fatawah.topic}
      </h3>
      <p className="text-gray-700 mb-4 line-clamp-3 whitespace-pre-line">
        {fatawah.answer}
      </p>

      <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
        <img
          src={fatawah.mujtahid.logoUrl}
          alt={fatawah.mujtahid.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{fatawah.mujtahid.name}</span>
      </div>

      {fatawah.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {fatawah.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
