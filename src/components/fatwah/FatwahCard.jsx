import FatwahQuestion from "./FatwahQuestion";
import FatwahAnswer from "./FatwahAnswer";
import FatwahMujtahid from "./FatwahMujtahid";
import FatwahSource from "./FatwahSource";
import FatwahTags from "./FatwahTags";
import CopyrightFooter from "../footer/CopyrightFooter.jsx";

function FatwahCard({ fatawah }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* ========= MAIN CONTENT ========= */}
      <article
        className="
          flex-1
          bg-white
          rounded-2xl
          border border-slate-200
          shadow-sm
          p-4 sm:p-6
          max-w-6xl
          mx-auto
          w-full
        "
      >
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ========= DETAILS ========= */}
          <div className="order-1 lg:order-2 w-full lg:w-[72%] space-y-6">
            <FatwahQuestion question={fatawah.question} />
            <FatwahAnswer answer={fatawah.answer} />

            {fatawah.tags?.length > 0 && (
              <div className="pt-4 border-t border-slate-200">
                <FatwahTags tags={fatawah.tags} />
              </div>
            )}
          </div>

          {/* ========= SIDEBAR ========= */}
          <aside className="order-2 lg:order-1 w-full lg:w-[25%] lg:sticky lg:top-32">
            <div className="space-y-4 urdu-text">
              <FatwahMujtahid mujtahid={fatawah.mujtahid} />
              <FatwahSource source={fatawah.source} />
            </div>
          </aside>
        </div>
      </article>

      {/* ========= FOOTER ========= */}
      <CopyrightFooter className="mt-6" />
    </div>
  );
}

export default FatwahCard;
