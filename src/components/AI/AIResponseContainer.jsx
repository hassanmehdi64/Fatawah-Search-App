import { useMemo, useState } from "react";
import AIResponseCard from "./AIResponseCard";
import ReferenceList from "./ReferenceList";

function AIResponseContainer({ answer, references }) {
  const [done, setDone] = useState(false);

  // ============== ✅Build full answer ONCE (future-ready)=========
  const fullAnswerText = useMemo(() => {
    if (!answer) return "";

    let text = "";

    if (answer.summary) {
      text += answer.summary + "\n\n";
    }

    if (Array.isArray(answer.sections)) {
      answer.sections.forEach((section) => {
        text += section.title + "\n";
        text += section.content + "\n\n";
      });
    }

    return text.trim();
  }, [answer]);

  if (!fullAnswerText) return null;

  return (
    <div className="space-y-8">
      <AIResponseCard
        text={fullAnswerText}
        onTypingDone={() => setDone(true)}
      />

      {/* References appear ONLY after typing finishes */}
      {done && references?.length > 0 && (
        <ReferenceList references={references} />
      )}
    </div>
  );
}

export default AIResponseContainer;
