function FatwahMujtahid({ mujtahid }) {
  return (
    <div
      className="
        flex items-center gap-4
        bg-gradient-to-br from-white to-slate-50
        border border-slate-200
        rounded-2xl
        p-4 sm:p-5
        shadow-sm
        transition
        hover:shadow-md
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
          bg-white
        "
      />

      <div className="urdu-text">
        {/* Label */}
        <p className="text-xs sm:text-sm md:text-base text-gray-500 tracking-wide">
          مجتہد
        </p>

        {/* Name */}
        <p className="text-base sm:text-lg md:text-2xl font-semibold text-slate-900">
          {mujtahid.name}
        </p>
      </div>
    </div>
  );
}

export default FatwahMujtahid;
