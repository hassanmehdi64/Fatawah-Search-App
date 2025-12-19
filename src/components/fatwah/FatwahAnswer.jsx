function FatwahAnswer({ answer }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-8 bg-gray-50 urdu-text">
      <p className="text-gray-800 text-xl md:text-2xl leading-[2.2] whitespace-pre-line">
        <span className="text-2xl font-semibold text-blue-500 mb-2">
          جواب:{" "}
        </span>
        {answer}
      </p>
    </div>
  );
}

export default FatwahAnswer;
