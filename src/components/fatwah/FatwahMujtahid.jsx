import { Tag } from "lucide-react";

function FatwahMujtahid({ mujtahid }) {
  return (
    <div
      className="
        flex items-center
        gap-3 sm:gap-4
        bg-white
        border border-gray-200
        rounded-xl
        p-4 sm:p-5
        shadow-sm
      "
    >
      {/* Mujtahid Image */}
      <img
        src={mujtahid.logoUrl}
        alt={mujtahid.name}
        className="
          w-12 h-12
          sm:w-16 sm:h-16
          md:w-20 md:h-20
          rounded-full
          object-cover
          ring-2 ring-blue-100
        "
      />

      <div>
        {/* Label */}
        <p
          className="
            text-sm sm:text-base md:text-2xl
            tracking-wide
            text-gray-600
            mb-0.5
          "
        >
          مجتہد
        </p>

        {/* Name */}
        <p
          className="
            text-base sm:text-lg md:text-3xl
            font-semibold
            text-gray-800
          "
        >
          {mujtahid.name}
        </p>
      </div>
    </div>
  );
}

export default FatwahMujtahid;
