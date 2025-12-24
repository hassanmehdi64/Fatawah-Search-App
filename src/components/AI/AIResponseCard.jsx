import AITypingText from "./AITypingText";

function AIResponseCard({ text, onTypingDone }) {
  return (
    <div
      className="
        relative
        bg-white
        rounded-3xl
        border border-slate-200
        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
        p-6 sm:p-8
        urdu-text
        text-right
        animate-fadeIn
      "
      dir="rtl"
    >
      {/* AI badge */}
      <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
        جواب
      </div>

      <AITypingText text={text} onDone={onTypingDone} />
    </div>
  );
}

export default AIResponseCard;
