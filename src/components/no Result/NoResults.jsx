import Homebutton from "./Homebutton";

export default function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl font-serif text-gray-800 mb-2 urdu-text">
        کوئی نتیجہ نہیں ملا
      </h2>
      <p className="text-gray-500 max-w-md mb-6 urdu-text">
        آپ کی تلاش سے متعلق کوئی fatawah نہیں ملا۔ مختلف keywords آزمائیں یا
        مشہور topics دیکھیں۔
      </p>
      <Homebutton />
    </div>
  );
}
