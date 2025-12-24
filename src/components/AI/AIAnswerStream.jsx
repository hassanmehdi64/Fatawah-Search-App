import { useMemo, useState, useEffect } from "react";
import AIResponseCard from "./AIResponseCard";
import ReferenceList from "./ReferenceList";

function AIAnswerStream({ response }) {
  const [done, setDone] = useState(false);

  const text = useMemo(() => {
    if (!response?.answer) return "";

    let out = "";
    const { summary, sections } = response.answer;

    if (typeof summary === "string" && summary.trim()) {
      out += summary.trim() + "\n\n";
    }

    if (Array.isArray(sections)) {
      sections.forEach((s) => {
        if (typeof s?.title === "string" && s.title.trim()) {
          out += s.title.trim() + "\n";
        }
        if (typeof s?.content === "string" && s.content.trim()) {
          out += s.content.trim() + "\n\n";
        }
      });
    }

    return out.trim();
  }, [response]);

  useEffect(() => {
    setDone(false);
  }, [text]);

  if (!text) return null;

  return (
    <section className="space-y-8">
      <AIResponseCard
        text={text}
        onTypingDone={() => setDone((prev) => (prev ? prev : true))}
      />

      {done &&
        Array.isArray(response?.references) &&
        response.references.length > 0 && (
          <ReferenceList references={response.references} />
        )}
    </section>
  );
}

export default AIAnswerStream;
