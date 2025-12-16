import { Tag } from "lucide-react";

 function FatwahMujtahid({ mujtahid }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <img
        src={mujtahid.logoUrl}
        alt={Tag.name}
        className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-100"
      />
      <div>
        <p className="text-xl md:text-2xl tracking-wide text-gray-600 mb-1">
          مجتہد
        </p>
        <p className="text-xl md:text-3xl font-semibold text-gray-800">
          {mujtahid.name}
        </p>
      </div>
    </div>
  );
}

export default FatwahMujtahid;
