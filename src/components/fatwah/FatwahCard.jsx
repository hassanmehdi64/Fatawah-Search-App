import FatwahQuestion from "./FatwahQuestion";
import FatwahAnswer from "./FatwahAnswer";
import FatwahMujtahid from "./FatwahMujtahid";
import FatwahSource from "./FatwahSource";
import FatwahTags from "./FatwahTags";
import CopyrightFooter from "../footer/CopyrightFooter.jsx";

function FatwahCard({ fatawah }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 w-full">
      {/* MAIN CONTENT */}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* DETAILS — scrolls with page */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            <FatwahQuestion question={fatawah.question} />
            <FatwahAnswer answer={fatawah.answer} />

            {fatawah.tags?.length > 0 && (
              <div className="pt-4">
                <FatwahTags tags={fatawah.tags} />
              </div>
            )}
          </div>

          {/* SIDEBAR — STICKY, MAX TOP SPACING */}
          <aside className="order-2 lg:order-1 lg:col-span-1 sticky top-24">
            <div className="space-y-4 urdu-text">
              <FatwahMujtahid mujtahid={fatawah.mujtahid} />
              <FatwahSource source={fatawah.source} />
            </div>
          </aside>
        </div>
      </article>

      {/* FOOTER — FULL WIDTH */}
      <CopyrightFooter className="mt-4 w-full" />
    </div>
  );
}

export default FatwahCard;
