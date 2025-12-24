function AnswerContainer({ answer }) {
  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-800 leading-relaxed">{answer.summary}</p>

      {answer.sections.map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold text-slate-900 mb-1">{section.title}</h3>
          <p className="text-slate-700 leading-relaxed">{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default AnswerContainer;
