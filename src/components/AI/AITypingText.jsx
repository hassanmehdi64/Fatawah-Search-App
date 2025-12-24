import { useEffect, useRef, useState } from "react";

function AITypingText({ text, speed = 18, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!text) return;

    // reset cleanly
    setDisplayed("");
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplayed((prev) => prev + text[indexRef.current]);
      indexRef.current++;

      if (indexRef.current >= text.length) {
        clearInterval(intervalRef.current);
        onDone?.();
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed, onDone]);

  return (
    <p className="whitespace-pre-line leading-loose text-slate-800">
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-2 animate-pulse">▍</span>
      )}
    </p>
  );
}

export default AITypingText;
