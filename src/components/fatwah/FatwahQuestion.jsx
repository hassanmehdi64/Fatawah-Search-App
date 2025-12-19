function FatwahQuestion({ question }) {
  return (
    <div className="mb-6 urdu-text">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
        <span className="text-xl md:text-2xl font-semibold text-blue-500 ml-2">
          سوال:
        </span>
        {question}
      </h1>
    </div>
  );
}

export default FatwahQuestion;
