const CopyrightFooter = () => {
  return (
    <footer className="relative mt-16 bg-white/70 backdrop-blur border-t border-gray-200 py-5 text-center">
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm font-medium text-gray-700">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-500 font-semibold">Fatawah Search</span>
        </span>
        <span className="text-xs text-gray-400">All rights reserved.</span>
      </div>

      {/* subtle accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </footer>
  );
};

export default CopyrightFooter;
