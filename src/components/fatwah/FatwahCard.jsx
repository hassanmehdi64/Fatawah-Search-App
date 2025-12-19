import FatwahQuestion from "./FatwahQuestion";
import FatwahAnswer from "./FatwahAnswer";
import FatwahMujtahid from "./FatwahMujtahid";
import FatwahSource from "./FatwahSource";
import FatwahTags from "./FatwahTags";
import CopyrightFooter from "../footer/CopyrightFooter.jsx";

function FatwahCard({ fatawah }) {
  return (
    <>
      <article
        className="
          bg-white
          rounded-2xl
          border border-slate-200
          shadow-sm
          p-4 sm:p-6
          max-w-8xl
          mx-auto
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* DETAILS — first on mobile, right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            <FatwahQuestion question={fatawah.question} />
            <FatwahAnswer answer={fatawah.answer} />

            {fatawah.tags?.length > 0 && (
              <div className="pt-4">
                <FatwahTags tags={fatawah.tags} />
              </div>
            )}
          </div>

          {/* SIDEBAR — last on mobile, left & sticky on desktop */}
          <aside className="order-2 lg:order-1 lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4 urdu-text">
              <FatwahMujtahid mujtahid={fatawah.mujtahid} />
              <FatwahSource source={fatawah.source} />
            </div>
          </aside>
        </div>
      </article>

      <CopyrightFooter />
    </>
  );
}

export default FatwahCard;
