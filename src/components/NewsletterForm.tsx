"use client";

export default function NewsletterForm({ className = "" }: { className?: string }) {
  return (
    <form
      className={`flex gap-2 ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
      />
      <button type="submit" className="btn-primary text-sm py-2.5">
        Subscribe
      </button>
    </form>
  );
}
