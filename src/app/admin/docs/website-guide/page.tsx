import Link from "next/link";

export default function WebsiteGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 pb-20">

      {/* Back */}
      <Link href="/admin/docs" className="inline-flex items-center gap-2 text-grey-dark text-sm hover:text-orange transition-colors mb-8">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Documents
      </Link>

      <div className="mb-2">
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-700 text-white">Guide</span>
      </div>
      <h1 className="text-navy text-2xl font-bold mt-3 mb-1">How to Update the Website</h1>
      <p className="text-grey-dark text-sm mb-10">A plain-English guide for making changes using v0.</p>

      <hr className="border-grey-mid mb-10" />

      {/* Intro */}
      <section className="mb-10">
        <div className="bg-navy text-white rounded p-6">
          <h2 className="font-bold text-lg mb-2">The one thing to know before you start</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            You make changes by describing them in plain English. You don&apos;t touch any code. v0 is the tool that does the technical work — think of it as a very capable assistant who speaks website. You tell it what you want, it shows you the result, and when you&apos;re happy you press one button to make it live.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mb-10">
        <h2 className="text-navy text-xl font-bold mb-6">Making a change — step by step</h2>
        <ol className="space-y-6">
          {[
            {
              n: "1",
              title: "Open v0",
              body: `Click the "Rons changes" bookmark in your browser. This takes you straight to the Super Media project in v0.`,
            },
            {
              n: "2",
              title: "Start a new chat",
              body: `You'll see the project page with a "New Chat" button in the top left. Click it.`,
              note: `Do not click "New Branch" — that's for something different. Always use New Chat.`,
            },
            {
              n: "3",
              title: "Describe what you want changed",
              body: "Type what you want in plain English. Be as specific as you can about where on the site and what the change is.",
              examples: [
                "On the About page, change the last paragraph in the Ron section to read: [new text]",
                "Add a new article to the Thinking section called [title]. Here is the text: [paste text]",
                "On the homepage, change the headline from [old] to [new]",
                "Remove the second bullet point from the services list on the Services page",
              ],
            },
            {
              n: "4",
              title: "Review the preview",
              body: "v0 will show you a preview of the change. Check it looks right. If it's not quite what you wanted, just type a follow-up message explaining what to adjust — same as correcting anyone.",
            },
            {
              n: "5",
              title: "Deploy it",
              body: `When you're happy, look for the Deploy button (it may also appear as "Merge" or "Ship"). Click it. The change will be live on supermedia.co.nz within about 60 seconds.`,
            },
            {
              n: "6",
              title: "Check the live site",
              body: "Open supermedia.co.nz in a new tab and confirm the change looks right on the real site.",
            },
          ].map((step) => (
            <li key={step.n} className="flex gap-5">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white font-bold text-sm flex items-center justify-center mt-0.5">
                {step.n}
              </span>
              <div className="flex-1">
                <h3 className="text-navy font-bold mb-1">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-2">{step.body}</p>
                {step.note && (
                  <p className="text-sm bg-amber-50 border border-amber-200 text-amber-800 rounded px-3 py-2 mb-2">
                    ⚠ {step.note}
                  </p>
                )}
                {step.examples && (
                  <ul className="space-y-1.5 mt-2">
                    {step.examples.map((ex) => (
                      <li key={ex} className="text-sm text-grey-dark bg-grey-light rounded px-3 py-2 italic">
                        &ldquo;{ex}&rdquo;
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Safe changes */}
      <section className="mb-10">
        <h2 className="text-navy text-xl font-bold mb-4">Things that are safe to ask v0 to change</h2>
        <ul className="space-y-2">
          {[
            "Any text anywhere on the site",
            "Adding or editing articles in the Thinking section",
            "Changing images (you'll need to provide the new image file)",
            "Reordering sections on a page",
            "Adding or removing items from lists",
            "Changing button labels or links",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-body">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange flex items-center justify-center mt-0.5">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Avoid */}
      <section className="mb-10">
        <h2 className="text-navy text-xl font-bold mb-4">Things to avoid</h2>
        <ul className="space-y-2">
          {[
            `Don't click "New Branch" unless you've been specifically told to`,
            "Don't start multiple chats for the same change — finish one, deploy it, then start the next",
            "If a change looks wrong in preview, fix it in v0 before deploying — don't deploy something you're not happy with",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-body">
              <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✕</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Emergency */}
      <section className="mb-10">
        <h2 className="text-navy text-xl font-bold mb-4">If something goes wrong</h2>
        <p className="text-body text-sm leading-relaxed">
          The site has an <strong>Instant Rollback</strong> button in Vercel (use the &ldquo;vercel backend&rdquo; bookmark). If a change breaks something, click Instant Rollback and it will immediately revert to the previous version. Then contact the person who manages the site to investigate.
        </p>
      </section>

      {/* Complicated */}
      <section className="mb-12">
        <h2 className="text-navy text-xl font-bold mb-4">If a change feels complicated</h2>
        <p className="text-body text-sm leading-relaxed">
          Describe it as clearly as you can and let v0 attempt it. If v0 can&apos;t get it right after two or three attempts, take a screenshot of what it&apos;s showing and send it to the person who manages the site. Don&apos;t keep trying — some changes need a human developer.
        </p>
      </section>

      {/* Laminate box */}
      <div className="bg-navy rounded p-6 text-white">
        <h2 className="font-bold text-base mb-4 text-orange uppercase tracking-widest text-xs">The short version</h2>
        <ol className="space-y-2">
          {[
            `Click the "Rons changes" bookmark`,
            "Click New Chat",
            "Describe the change in plain English",
            "Check the preview",
            "Click Deploy",
            "Check supermedia.co.nz",
          ].map((step, i) => (
            <li key={step} className="flex items-center gap-3 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange text-white font-bold text-xs flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-white/80">{step}</span>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}
