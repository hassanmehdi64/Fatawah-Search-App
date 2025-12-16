export default function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-6">
        <span className="text-2xl text-gray-500">🔍</span>
      </div>
      <h2 className="text-2xl font-serif text-gray-800 mb-2 urdu-text">
        کوئی نتیجہ نہیں ملا
      </h2>
      <p className="text-gray-500 max-w-md mb-6 urdu-text">
        آپ کی تلاش سے متعلق کوئی fatawah نہیں ملا۔ مختلف keywords آزمائیں یا
        مشہور topics دیکھیں۔
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors urdu-text"
      >
        واپس ہوم
      </a>
    </div>
  );
}
