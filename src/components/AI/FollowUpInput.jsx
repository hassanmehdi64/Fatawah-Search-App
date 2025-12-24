import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FollowUpInput() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (!value.trim()) return;
    navigate(`/ai-result?q=${encodeURIComponent(value)}`);
  };

  return (
    <div className="mt-12">
      <div
        className="
          flex items-center gap-3
          bg-white
          border border-slate-200
          rounded-2xl
          px-4 py-3
          shadow-sm
        "
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="مزید سوال پوچھیں..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-right
            urdu-text
            text-sm
          "
          dir="rtl"
        />

        <button
          onClick={submit}
          className="
            bg-blue-600 text-white
            text-sm
            px-4 py-2
            rounded-xl
            hover:bg-blue-700
            transition
          "
        >
          پوچھیں
        </button>
      </div>
    </div>
  );
}

export default FollowUpInput;
